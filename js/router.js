App.Router.map(function() {
  this.resource('group', { path: '/groups/:group_id' });
  this.resource('command', { path: '/commands/:command_id' });
  this.route('search_results', { path: '/search/:query'});
});

App.Filter = Ember.Object.extend({
  searchString: '',
  features: [],

  setSearchString: function(s) {
    this.set('searchString', s);
  },
  setFeature: function(f, shouldSet) {
    var featureId = f.get('id');
    var features = this.get('features');
    if (shouldSet && !features.contains(featureId)) {
      features.pushObject(featureId);
    }
    if (!shouldSet && features.contains(featureId)) {
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
    },
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
  currentVersion: null,

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

  recalcCurrentVersion: function() {
    var versionApi = $.cookie('currentVersionApi');
    if (Ember.isEmpty(versionApi)) {
      this.set('currentVersion', null);
      return;
    }

    var self = this;
    var versions = this.get('versions');
    versions.forEach(function(v) {
      if (v.get('api') == versionApi) {
        self.send('setVersion', v);
      }
    });
  }.observes('versions', 'versions.@each'),

  versionCookie: function() {
    var currentVersion = this.get('currentVersion');
    if (Ember.isEmpty(currentVersion)) {
      $.removeCookie('currentVersionApi');
    } else {
      $.cookie('currentVersionApi', currentVersion.get('api'));
    }
  }.observes('currentVersion'),

  actions: {
    setVersion: function(v) {
      var features = v.get('features');
      this.set('currentVersion', v);
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

App.VersionedEntityController = Ember.ObjectController.extend({
  versions: function() {
    var featureApi = function(f) { return f.get('api'); };
    var featureNumber = function(f) { return f.get('number'); };

    var features = this.get('features');

    var featureApis = features.map(featureApi).uniq();
    featureApis.sort();

    var featuresByApi = [];
    featureApis.forEach(function(api){
      var matchesApi = function(f) { return featureApi(f) == api };
      var apiFeatures = features.filter(matchesApi);

      apiFeatures.sort(function(f1, f2) {
        var n1 = f1.get('number');
        var n2 = f2.get('number');
        return n1 < n2 ? -1 : n1 > n2 ? 1 : 0;
      });

      var first = apiFeatures[0];
      var last = apiFeatures[apiFeatures.length - 1];
      var rangeStr = '' + first.get('number');
      if (first != last) rangeStr += ' - ' + last.get('number');
      featuresByApi.push({api: api, features: apiFeatures, first: first, last: last, range: rangeStr });
    });
    return featuresByApi;
  }.property('features.@each'),
});


App.CommandController = App.VersionedEntityController.extend();
App.GroupController = App.VersionedEntityController.extend();
