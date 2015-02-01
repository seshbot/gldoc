// models
//

App.Feature = DS.Model.extend({
  api: DS.attr('string'),
  name: DS.attr('string'),
  number: DS.attr('string')
});

// TODO:
// - gl version
App.Group = DS.Model.extend({
  name: DS.attr('string'),
  features: DS.hasMany('feature')
});

// TODO:
// - gl version
App.Command = DS.Model.extend({
  name: DS.attr('string'),
  features: DS.hasMany('feature')
});

// TODO: extensions

// data
//

// App.Feature.FIXTURES = [
//   {
//     id: 0,
//     api: 'gl',
//     name: 'GL_VERSION_1_0',
//     number: '1.0'
//   },
//   {
//     id: 1,
//     api: 'gl',
//     name: 'GL_VERSION_1_1',
//     number: '1.1'
//   },
//   {
//     id: 2,
//     api: 'gles1',
//     name: 'GL_VERSION_ES_CM_1_0',
//     number: '1.0'
//   },
//   {
//     id: 3,
//     api: 'gles2',
//     name: 'GL_ES_VERSION_2_0',
//     number: '2.0'
//   },
//   {
//     id: 4,
//     api: 'gles2',
//     name: 'GL_ES_VERSION_3_0',
//     number: '3.0'
//   },
// ];

// App.Group.FIXTURES = [
//  {
//    id: 0,
//    name: 'AccumOp',
//  },
//  {
//    id: 1,
//    name: 'AttribMask',
//  },
//  {
//    id: 2,
//    name: 'AlphaFunction',
//  },
//  {
//    id: 3,
//    name: 'BlendEquationModeEXT',
//  },
// ];

// App.Command.FIXTURES = [
//  {
//    id: 0,
//    name: 'glAccum',
//  },
//  {
//    id: 1,
//    name: 'glActiveShaderProgram',
//  },
//  {
//    id: 2,
//    name: 'glActiveTexture',
//  },
//  {
//    id: 3,
//    name: 'glAlphaFunc',
//  },
//  {
//    id: 4,
//    name: 'glAreTexturesResident',
//  }
// ];
