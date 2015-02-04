// models
//

App.Feature = DS.Model.extend({
  api: DS.attr('string'),
  name: DS.attr('string'),
  number: DS.attr('string'),
  require_comments: DS.attr(),
  required_commands: DS.hasMany("command", {async: true}),
});

App.Enum = DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr('string'),
  features: DS.hasMany('feature', {async: true})
});

// TODO:
// - gl version
App.Group = DS.Model.extend({
  name: DS.attr('string'),
  features: DS.hasMany('feature', {async: true}),
  enums: DS.hasMany('enum', {async: true})
});

// TODO:
// - gl version
App.Command = DS.Model.extend({
  name: DS.attr('string'),
  features: DS.hasMany('feature', {async: true}),
  return_type: DS.attr('string'),
  parameters: DS.hasMany('parameter', {async: true}),
});

App.Parameter = DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
});

// TODO: extensions
