angular.module('nalit.controllers', ['nalit.services'])

.controller('MainCtrl', function($scope, $state, Data) {
  Data.all().then(function(response) {
    $scope.data = [];

    for(var i=0; i<3; i++){
      $scope.data.push(response.data[i]);
    }
  });
})

.controller('InternalCtrl', function($scope, $stateParams, Data, $ionicScrollDelegate) {
  var itemId = $stateParams.itemId;

  Data.get(itemId).then(function(response) {
    $scope.data = response;
  });

  /*
  * if given group is the selected group, deselect it
  * else, select the given group
  */
  $scope.toggleGroup = function(group, key, id) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;

      $scope.wrappedList = document.getElementById("item-" + id).childNodes[0];
      $scope.wrappedList.scrollTop = 69 * key;
    }

    $scope.reCalculateSize = function() {
      $ionicScrollDelegate.resize();
    };
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
});
