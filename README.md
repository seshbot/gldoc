# GLDoc OpenGL documentation

See it in action [here](https://cechner.github.io)

Static HTML OpenGL documentation, because the online docs suck so much.

This is implemented as a single-page application using ember.js mainly because I want to experiment more with ember. I would probably be better off just auto-generating the static pages and perhaps using handlebars or something for formatting.

All information is derived from the [Khronos OpenGL API registry](https://cvs.khronos.org/svn/repos/ogl/trunk/doc/registry/public/api/gl.xml) and is transformed for consumption by [GLgen](https://github.com/seshbot/glgen)

TODO:
 - allow OpenGL extensions to be explored
 - related to the above, show 'alias' commands (generally provided by extensions)
 - source command description and usage text from somewhere
 - add disqus comments or something?
 - indicate deprecated enums and functions
 - performance: use localstorage so JSON data doesn't have to be loaded into the app every visit
 - performance: generate static HTML instead of running as a dynamic ember application (using FastBoot?)
