App.Router.map(function() {
  this.resource('group', { path: '/groups/:group_id' });
  this.resource('command', { path: '/commands/:command_id' });
  this.route('search_results', { path: '/search/:query'});
});

App.Filter = Ember.Object.extend({
  searchString: '',
  features: [],
  setSearchString: function(s) {
    console.log('setting search string', s);
    this.set('searchString', s);
  },
  setFeature: function(f, shouldSet) {
    var featureId = f.get('id');
    var features = this.get('features');
    if (shouldSet && !features.contains(featureId)) {
      console.log('setting feature', featureId);
      features.pushObject(featureId);
    }
    if (!shouldSet && features.contains(featureId)) {
      console.log('removing feature', featureId);
      features.removeObject(featureId);
    }
  },
  setFeatures: function(fs, shouldSet) {
    var self = this;
    fs.forEach(function(f) { self.setFeature(f, shouldSet); });
  },
  unsetAllFeatures: function() {
    this.get('features').clear();
  },
  testGroup: function(g) {
    var features = this.get('features');
    var hasActiveFeatures = function(f) { return features.contains(f.get('id')); };

    var groupFeatures = g.get('features');
    return groupFeatures.any(hasActiveFeatures);
  },
  testCommand: function(c) {
    var features = this.get('features');
    var hasActiveFeatures = function(f) { return features.contains(f.get('id')); };

    var groupFeatures = c.get('features');
    return groupFeatures.any(hasActiveFeatures);
  },
});

App.filter = App.Filter.create();


//
// Routes
//

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return {
      features: this.store.find('feature'),
      groups: this.store.find('group'),
      commands: this.store.find('command'),
      parameters: this.store.find('parameter')
    };
  },

  actions: {
    search: function() {
      var querystr = $('#search').val();
      if (querystr === '') {
        return;
      }

      this.transitionTo('search_results', querystr);
    }
  }
});

App.SearchResultsRoute = Ember.Route.extend({
  model: function(params) {
    var querystr = params.query.toUpperCase();
    var command_results = this.store.filter('command', function(c) {
      return c.get('name').toUpperCase().indexOf(querystr) > -1;
    });
    var group_results = this.store.filter('group', function(c) {
      return c.get('name').toUpperCase().indexOf(querystr) > -1;
    });

    return {
      commands: command_results,
      groups: group_results
    };
  },
  serialize: function(query) {
    return {q: query};
  }
});


//
// Controllers
//

App.NavbarController = Ember.ObjectController.extend({
  currentVersion: 'Choose Version',

  versions: function() {
    var featureVersion = function(f) { return f.get('api') + ' ' + f.get('number').split('.')[0] };
    var features = this.get('features');

    var featureVersions = features.map(featureVersion).uniq();
    featureVersions.sort();

    var featuresByVersion = [];
    featureVersions.forEach(function(version){
      var matchesVersion = function(f) { return featureVersion(f) == version };
      var versionFeatures = features.filter(matchesVersion);

      var entity = Ember.Object.create({
        api: version,
        features: versionFeatures
      });
      featuresByVersion.push(entity);
    });
    return featuresByVersion;
  }.property('features.@each'),

  actions: {
    setVersion: function(v) {
      var features = v.get('features');
      this.set('currentVersion', v.get('api'));
      App.filter.unsetAllFeatures();
      App.filter.setFeatures(features, true);
    }
  }
});

App.FeatureController = Ember.ObjectController.extend({
  isActive: false,
  actions: {
    toggle: function(feature) {
      this.toggleProperty('isActive');
      App.filter.setFeature(feature, this.get('isActive'));
    }
  }
});

App.FeaturesController = Ember.ArrayController.extend({
  itemController: 'feature',
  sortProperties: ['api', 'number'],
  sortAscending: true // false for descending
});

App.GroupsController = Ember.ArrayController.extend({
  needs: ['features'],

  filteredCount: 0,

  filteredContent: function() {
    var content = this.get('model');
    if (!content) { return content; }

    var features = this.get('controllers.features');
    var featureFilter = function(entity) { return App.filter.testGroup(entity); };

    var filtered = content.filter(featureFilter);
    this.set('filteredCount', filtered.get('length'));

    return filtered;
  }.property('@each', 'App.filter.features.@each'),
});

App.CommandsController = Ember.ArrayController.extend({
  needs: ['features'],

  // sortProperties: ['name', 'artist'],
  // sortAscending: true // false for descending

  filteredCount: 0,

  filteredContent: function() {
    var content = this.get('model');
    if (!content) { return content; }

    var features = this.get('controllers.features');
    var featureFilter = function(entity) { return App.filter.testCommand(entity); };

    var filtered = content.filter(featureFilter);
    this.set('filteredCount', filtered.get('length'));

    return filtered;
  }.property('@each', 'App.filter.features.@each'),
});
