#!/usr/bin/python
'''OpenGL registry parser'''

__author__    = 'Paul Cechner'
__license__   = 'Boost Software License, Version 1.0'
__copyright__ = '2015, Paul Cechner <at cechner.com>'
__version__   = '0.1'


import os
import sys
import re
import json

from registry.parsers import *
from registry.writejson import *

import xml.etree.cElementTree as etree

# see also https://github.com/AlexandreFournier/gl-spec-parser

# sys dir(sys)  dir()

# dictionary: DICT = { x: v1, y: v2}
#             for k in DICT.keys(): 

# func prog: my_new_list = filter(lambda x : re.match(my_re, x), my_list) # .sort()
# string: n = s.count('x')  s = s.replace('a', 'b')  s.startswith('aaa')
#         s = s[2:]  s = 'a %s' % mystr  '\n'.join(mystr)
#         'What is your {0}?  It is {1}.'.format(q, a)
# reversed(xrange(1,10,2))
# for k, v in knights.iteritems():


# TODO: extensions
# TODO: commands without 'features' are always 'aliases' ?
#  if so, create an 'aliases' collection and remove them from commands

def writeEntitiesToExistingFile(entities, varname, fp):
  fp.write('{ "%s": ' % varname)
  writeJson(entities, fp)
  fp.write('}')

def writeEntitiesToNewFile(entities, filename, varname):
  fp = open(filename, 'w')
  fp.write("var %s = " % varname)
  writeJson(entities, fp)
  fp.write(";\n")
  fp.close

if __name__ == '__main__':
  import argparse
  parser = argparse.ArgumentParser()
  parser.add_argument('-p', '--patchfile', help='XML patch file')
  parser.add_argument('-o', '--outputdir', default='.', help='directory into which output files are dumped')
  parser.add_argument('regfile', help='XML registry file')

  args = parser.parse_args()

  inputfile = args.regfile # os.path.join(os.path.dirname(__file__), 'gl.xml')
  outputpath = args.outputdir
  if not os.path.exists(outputpath):
    print 'output path %s does not exist' % outputpath
    sys.exit(1)

  print 'parsing registry file %s' % inputfile
  xmltree       = etree.parse(inputfile)
  xmlregistry   = xmltree.getroot()

  print '  - parsing features...',
  features = parseXmlFeatures(xmlregistry)
  print '%d found' % len(features)

  print '  - parsing enums...',
  enums = parseXmlEnums(xmlregistry)
  print '%d found' % len(enums)

  print '  - parsing enum goups...',
  groups = parseXmlGroups(xmlregistry, enums)
  print '%d found' % len(groups)

  print '  - parsing commands...',
  commands = parseXmlCommands(xmlregistry)
  print '%d found' % len(commands)

  patchfile = args.patchfile
  if patchfile:
    print 'applying patches from file %s' % patchfile

  registry = Registry(features, enums, groups, commands)

  # print 'verifying enum groups are consistent...'
  # for e in registry.enums:
  #   if len(e.groups) > 1:
  #     print '  - enum %s is a member of groups %s' % (e.name, [g.name for g in e.groups])

  # print 'verifying features have sensible enums...'
  # for f in registry.features:
  #   enum_names = {e.name for e in f.requiredEnums}
  #   print '  - feature %s has %s enums' % (f.name, len(enum_names))
  #   flatten = lambda ll: reduce(lambda a, b: a | b, ll, set())
  #   expanded_enums = flatten([g.enums for e in f.requiredEnums for g in e.groups])
  #   expanded_enum_names = {e.name for e in expanded_enums}
  #   print '               should have %s' % len(expanded_enum_names)
  #   diff = expanded_enum_names - enum_names
  #   print '               diff: %s' % diff

  # TODO: extensions
  # TODO: aliases

  print 'writing js files'
  writeEntitiesToNewFile(registry.features, os.path.join(outputpath, 'features.js'), 'GL_REGISTRY_FEATURES')
  writeEntitiesToNewFile(registry.coreGroups, os.path.join(outputpath, 'groups.js'), 'GL_REGISTRY_GROUPS')
  writeEntitiesToNewFile(registry.coreCommands, os.path.join(outputpath, 'commands.js'), 'GL_REGISTRY_COMMANDS')
  writeEntitiesToNewFile(registry.coreParameters, os.path.join(outputpath, 'parameters.js'), 'GL_REGISTRY_PARAMETERS')

  print 'writing json file'
  fp = open(os.path.join(outputpath, 'data.json'), 'w')
  writeEntitiesToExistingFile(registry.features, 'features', fp)
  writeEntitiesToExistingFile(registry.coreGroups, 'groups', fp)
  writeEntitiesToExistingFile(registry.coreCommands, 'commands', fp)
  writeEntitiesToExistingFile(registry.coreParameters, 'parameters', fp)
  fp.close
