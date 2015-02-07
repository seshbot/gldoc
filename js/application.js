window.App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true
//  rootElement: '#app'
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();


// App.ApplicationSerializer = DS.LSSerializer.extend();
// App.ApplicationAdapter = DS.LSAdapter.extend({
//     namespace: 'yournamespace'
// });



//// http://emberjs.com/api/classes/Ember.ArrayController.html
//
// $.get('people.json', function(data) {
//   MyApp.listController.set('model', data);
// });

//// http://nerdyworm.com/blog/2013/04/03/ember-initializers/
//
// Ember.Application.initializer({
//   name: "loadWidgets",
//   after: "store",
//   initialize: function(container) {
//     App.deferReadiness();
//     Ember.$.getJSON("/widgets.json", function(json) {
//       var store = container.lookup('store:main');
//       store.load(App.Widgets, json);
//       App.advanceReadiness();
//     });
//   }

// OR (from application.js docs)

// Ember.Application.initializer({
//   name: 'preload-data',
//   initialize: function(container, application) {
//     var store = container.lookup('store:main');
//     store.pushPayload(preloadedData);
//   }

// });

// TODO: also load filter from cookies?



