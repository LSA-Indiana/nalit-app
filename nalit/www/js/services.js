var app = angular.module('nalit.services', []);

app.factory('Data', function($http) {

  var data = [];

  return {
    all: function(){
      return $http.get('/data.json').then(function(response) {
        data = response.data;
        return data;
      });
    },
    get: function(itemId) {
      return $http.get('/data.json').then(function(response) {
        data = response.data.data;
        for (var i = 0; i < data.length; i++) {
          if (data[i].id === parseInt(itemId)) {
            return data[i];
          }
        }
      });
    }
  };
});
