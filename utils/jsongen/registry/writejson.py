import json

class Feature:
  def __init__(self, data, id):
    self.id = id
    self.name = data.name
    self.data = data

    self.requiredEnums = [] #[registry.enumIdsByName[name] for name in feature.reqEnumStrings]
    self.removedEnums  = [] #[registry.enumIdsByName[name] for name in feature.remEnumStrings]

    self.requiredCommands = [] #[registry.commandIdsByName[name] for name in feature.reqCommandStrings]
    self.removedCommands  = [] #[registry.commandIdsByName[name] for name in feature.remCommandStrings]

  def toDictionary(self):
    data = {}
    data['id'] = self.id
    data['name'] = self.name

    data['api'] = self.data.api
    data['number'] = self.data.number

    data['requireComments'] = self.data.requireComments

    data['required_enums'] = map(lambda e: e.id, self.requiredEnums)
    data['removed_enums'] = map(lambda e: e.id, self.removedEnums)

    data['required_commands'] = map(lambda c: c.id, self.requiredCommands)
    data['removed_commands'] = map(lambda c: c.id, self.removedCommands)

    return data


class Enum:
  def __init__(self, data, id):
    self.id = id
    self.name = data.name
    self.data = data

    self.features = []
    self.groups = []

class Group:
  def __init__(self, data, id):
    self.id = id
    self.name = data.name
    self.data = data

    self.features = []
    self.enums = []

  def toDictionary(self):
    data = {}
    data['id'] = self.id
    data['name'] = self.name

    data['features'] = map(lambda f: f.id, self.features)
    data['enums'] = map(lambda e: e.id, self.enums)

    return data

class Command:
  def __init__(self, data, id):
    self.id = id
    self.name = data.name
    self.data = data

    self.features = []

  def toDictionary(self):
    data = {}
    data['id'] = self.id
    data['name'] = self.name

    data['features'] = map(lambda f: f.id, self.features)

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

    #
    # create lookup tables
    #

    self.featuresById = {e.id: e for e in self.features}
    self.enumsById    = {e.id: e for e in self.enums}
    self.groupsById   = {e.id: e for e in self.groups}
    self.commandsById = {e.id: e for e in self.commands}

    self.featuresByName = {e.name: e for e in self.features}
    self.enumsByName    = {e.name: e for e in self.enums}
    self.groupsByName   = {e.name: e for e in self.groups}
    self.commandsByName = {e.name: e for e in self.commands}

    #
    # update entity relationships
    #

    print(' - updating feature references...')
    for f in self.features:
      f.requiredEnums = [self.enumsByName[name] for name in f.data.reqEnumStrings]
      f.removedEnums  = [self.enumsByName[name] for name in f.data.remEnumStrings]

      f.requiredCommands = [self.commandsByName[name] for name in f.data.reqCommandStrings]
      f.removedCommands  = [self.commandsByName[name] for name in f.data.remCommandStrings]

    print(' - updating enum references...')
    for e in self.enums:
      e.features = [f for f in self.features if e in f.requiredEnums]

    print(' - updating group references...')
    for g in self.groups:
      for enumString in g.data.enumStrings:
        e = self.enumsByName.get(enumString)
        if e is None:
          print('    - cannot look up value for enum: %s' % enumString)
        else:
          g.enums.append(e)
          e.groups.append(g)
      flatten = lambda ll: sum(ll, [])
      enumFeatures = flatten(map(lambda e: e.features, g.enums))
      g.features = list(set(enumFeatures))

    print(' - updating command references...')
    for c in self.commands:
      c.features = [f for f in self.features if c in f.requiredCommands]


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
