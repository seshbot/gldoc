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

def writeEntities(entities, filename, varname):
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

  writeEntities(registry.features, os.path.join(outputpath, 'features.js'), 'GL_REGISTRY_FEATURES')
  writeEntities(registry.groups, os.path.join(outputpath, 'groups.js'), 'GL_REGISTRY_GROUPS')
  writeEntities(registry.commands, os.path.join(outputpath, 'commands.js'), 'GL_REGISTRY_COMMANDS')
