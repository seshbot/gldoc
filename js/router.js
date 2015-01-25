App.Router.map(function() {
  this.resource('group', { path: '/groups/:group_id' });
  this.resource('command', { path: '/commands/:command_id' });
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return {
      groups: this.store.find('group'),
      commands: this.store.find('command')
    };
  }
})

App.GroupsController = Ember.ArrayController.extend({
  filtered: function() {
    return this.filter(function(group) { return group.get('isActive'); });
  }.property()
});

App.CommandsController = Ember.ArrayController.extend({
  filtered: function() {
    return this;
  }.property()
});
