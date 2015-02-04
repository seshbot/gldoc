import json

class Feature:
  def __init__(self, data, id):
    self.id = id
    self.name = data.name
    self.data = data

    self.requiredEnums = set() #[registry.enumIdsByName[name] for name in feature.reqEnumStrings]
    self.removedEnums  = set() #[registry.enumIdsByName[name] for name in feature.remEnumStrings]

    self.requiredCommands = set() #[registry.commandIdsByName[name] for name in feature.reqCommandStrings]
    self.removedCommands  = set() #[registry.commandIdsByName[name] for name in feature.remCommandStrings]

  def toDictionary(self):
    data = {}
    data['id'] = self.id
    data['name'] = self.name

    data['api'] = self.data.api
    data['number'] = self.data.number

    data['require_comments'] = self.data.requireComments

    data['required_enums'] = map(lambda e: e.id, self.requiredEnums)
    data['removed_enums'] = map(lambda e: e.id, self.removedEnums)

    data['required_commands'] = map(lambda c: c.id, self.requiredCommands)
    data['removed_commands'] = map(lambda c: c.id, self.removedCommands)

    return data


class Enum:
  def __init__(self, data, id):
    self.id = id
    self.name = data.name
    self.value = data.value
    self.data = data

    self.features = set()
    self.groups = set()

  def toDictionary(self):
    data = {}
    data['id'] = self.id
    data['name'] = self.name
    data['value'] = self.value

    data['features'] = map(lambda f: f.id, self.features)
    
    return data


class Group:
  def __init__(self, data, id):
    self.id = id
    self.name = data.name
    self.data = data

    self.features = set()
    self.enums = set()

  def toDictionary(self):
    data = {}
    data['id'] = self.id
    data['name'] = self.name

    data['features'] = map(lambda f: f.id, self.features)
    data['enums'] = map(lambda e: e.id, self.enums)

    return data


class Parameter:
  def __init__(self, data, id):
    self.id = id
    self.name = data.name
    self.type = data.groupString if data.groupString != None else data.type
    self.data = data
    self.hash = data.hash

  def __str__(self):
    return str(self.data)

  def toDictionary(self):
    data = {}
    data['id'] = self.id
    data['name'] = self.name
    data['type'] = self.type
    return data


class Command:
  def __init__(self, data, id):
    self.id = id
    self.name = data.name
    self.data = data

    self.features = set()
    self.parameters = set()

    self.parameterHashes = [p.hash for p in data.params]

  def toDictionary(self):
    data = {}
    data['id'] = self.id
    data['name'] = self.name

    data['features'] = map(lambda f: f.id, self.features)
    data['parameters'] = map(lambda p: p.id, self.parameters)
    data['return_type'] = self.data.returntype

    return data


class Registry:
  def __init__(self, xmlFeatures, xmlEnums, xmlGroups, xmlCommands):
    print('creating registry...')
    #
    # create entities
    #

    self.features = [Feature(e, id) for id, e in enumerate(xmlFeatures)]
    self.enums    = [Enum(e, id) for id, e in enumerate(xmlEnums)]
    self.groups   = [Group(e, id) for id, e in enumerate(xmlGroups)]
    self.commands = [Command(e, id) for id, e in enumerate(xmlCommands)]

    # TODO: verify this doesnt overwrite dissimilar parameters
    paramXmlsByHash = {p.hash: p for c in xmlCommands for p in c.params}
    uniqueXmlParameters = paramXmlsByHash.values()
    self.parameters = [Parameter(e, id) for id, e in enumerate(uniqueXmlParameters)]


    #
    # create lookup tables
    #

    self.featuresById = {e.id: e for e in self.features}
    self.enumsById    = {e.id: e for e in self.enums}
    self.groupsById   = {e.id: e for e in self.groups}
    self.commandsById = {e.id: e for e in self.commands}
    self.parametersById = {e.id: e for e in self.parameters}

    self.featuresByName = {e.name: e for e in self.features}
    self.enumsByName    = {e.name: e for e in self.enums}
    self.groupsByName   = {e.name: e for e in self.groups}
    self.commandsByName = {e.name: e for e in self.commands}
    self.parametersByHash = {e.hash: e for e in self.parameters}

    #
    # update entity relationships
    #

    print(' - updating feature references...')
    for f in self.features:
      f.requiredEnums = {self.enumsByName[name] for name in f.data.reqEnumStrings}
      f.removedEnums  = {self.enumsByName[name] for name in f.data.remEnumStrings}

      f.requiredCommands = {self.commandsByName[name] for name in f.data.reqCommandStrings}
      f.removedCommands  = {self.commandsByName[name] for name in f.data.remCommandStrings}

    print(' - updating enum references...')
    for e in self.enums:
      e.features = {f for f in self.features if e in f.requiredEnums}

    print(' - updating group references...')
    for g in self.groups:
      for enumString in g.data.enumStrings:
        e = self.enumsByName.get(enumString)
        if e is None:
          print('    - cannot look up value for enum: %s' % enumString)
        else:
          g.enums.add(e)
          e.groups.add(g)

      enum_feature_sets = map(lambda e: e.features, g.enums)

      union = lambda a, b: a | b
      enumFeatures = reduce(union, enum_feature_sets, set())

      g.features = enumFeatures

    print(' - updating command references...')
    for c in self.commands:
      c.features = {f for f in self.features if c in f.requiredCommands}
      c.parameters = set(map(lambda h: self.parametersByHash[h], c.parameterHashes))


    hasFeatures = lambda e: len(e.features) > 0
    self.coreEnums = filter(hasFeatures, self.enums)
    self.coreGroups = filter(hasFeatures, self.groups)
    for g in self.coreGroups:
      g.enums = filter(hasFeatures, g.enums)
    self.coreCommands = filter(hasFeatures, self.commands)
    coreParamSet = {p for c in self.coreCommands for p in c.parameters}
    self.coreParameters = list(coreParamSet)


#
# write routines
#

def writeJson(entities, fp):
  fp.write("[\n")
  for entity in entities:
    data = entity.toDictionary()
    #json.dump(data, fp, indent=2, separators=(',', ': '))
    json.dump(data, fp)
    fp.write(',\n')
  fp.write("]")
