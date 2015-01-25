App.Router.map(function() {
  this.resource('group', { path: '/groups/:group_id' });
  this.resource('command', { path: '/commands/:command_id' });
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return {
      features: this.store.find('feature'),
      groups: this.store.find('group'),
      commands: this.store.find('command')
    };
  },
});

App.FeatureController = Ember.ObjectController.extend({
  isActive: false,
  actions: {
    toggle: function(feature) {
      var wasActive = this.get('isActive');
      this.set('isActive', !wasActive);
    }
  }
});

App.FeaturesController = Ember.ArrayController.extend({
  shouldBeVisible: function(v) {
    return v;
  }
});

App.GroupsController = Ember.ArrayController.extend({
  needs: ['features'],

  filteredContent: function() {
    var content = this.get('content');
    if (!content) { return content; }

    var features = this.get('controllers.features');
    var featureFilter = function(group) { return features.shouldBeVisible(group.get('isActive')); };

    return content.filter(featureFilter);
  }.property('content.isLoaded')
});

App.CommandsController = Ember.ArrayController.extend({
  filtered: function() {
    return this;
  }.property()
});
