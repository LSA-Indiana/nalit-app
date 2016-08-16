var app = angular.module('nalit.services', []);

app.factory('Data', function($http) {

  var data = [];
  var get_url = "";

  if (window.location.hostname != "localhost") {
    get_url = 'http://nalit.iga.local/assets/data.json';
  } else {
    get_url = 'assets/data.json';
  }
  return {
    all: function(){
      return $http.get(get_url).then(function(response) {
        data = response.data;
        return data;
      });
    },
    get: function(itemId) {
      return $http.get(get_url).then(function(response) {
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
