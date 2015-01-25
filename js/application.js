window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

//// http://emberjs.com/api/classes/Ember.ArrayController.html
//
// $.get('people.json', function(data) {
//   MyApp.listController.set('model', data);
// });
