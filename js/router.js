App.Router.map(function() {
  this.resource('home', { path: '/' }, function() {
    this.resource('group', { path: '/groups/:group_id' });
    this.resource('command', { path: '/commands/:command_id' });
  });
});

App.HomeRoute = Ember.Route.extend({
  model: function() {
    return {
      groups: this.store.find('group'),
      commands: this.store.find('command')
    };
  }
});
