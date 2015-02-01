window.App = Ember.Application.create({
  LOG_TRANSITIONS: true,
//  rootElement: '#app'
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();


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
// });
