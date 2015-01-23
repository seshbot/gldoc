// models
//

App.Group = DS.Model.extend({
  name: DS.attr('string'),
  isActive: DS.attr('boolean')
});

App.Command = DS.Model.extend({
  name: DS.attr('string')
});

// data
//

App.Group.FIXTURES = [
 {
   id: 1,
   name: 'AccumOp',
   isActive: false
 },
 {
   id: 2,
   name: 'AttribMask',
   isActive: true
 },
 {
   id: 3,
   name: 'AlphaFunction',
   isActive: false
 },
 {
   id: 4,
   name: 'BlendEquationModeEXT',
   isActive: true
 },
];

App.Command.FIXTURES = [
 {
   id: 1,
   name: 'glAccum',
 },
 {
   id: 2,
   name: 'glActiveShaderProgram',
 },
 {
   id: 3,
   name: 'glActiveTexture',
 },
 {
   id: 4,
   name: 'glAlphaFunc',
 },
 {
   id: 5,
   name: 'glAreTexturesResident',
 }
];
