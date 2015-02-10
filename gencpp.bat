@echo off

python utils/jsongen/gen.py assets/registry/gl.xml -p assets/registry/gl-patch.xml -o assets/registry/ --cpp --es2only
