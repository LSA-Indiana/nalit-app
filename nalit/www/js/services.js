var app = angular.module('nalit.services', [])

app.factory('Menu', function() {
  // Might use a resource here that returns a JSON array
  var menu = [{
    id: 0,
    name: 'Ideas',
    subText: 'What to do in Indy.',
    icon: 'lightbulb'
  }, {
    id: 1,
    name: 'Schedule',
    subText: 'Find out what\'s next.',
    icon: 'calendar'
  }, {
    id: 2,
    name: 'Locations',
    subText: 'Find your way around.',
    icon: 'compass'
  }];

  return {
    all: function() {
      return menu;
    },
    get: function(itemId) {
      for (var i = 0; i < menu.length; i++) {
        if (menu[i].id === parseInt(itemId)) {
          return menu[i];
        }
      }
      return null;
    }
  };
});
