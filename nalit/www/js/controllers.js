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
  $scope.toggleGroup = function(group, id) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;

      var wrappedList = angular.element(document.getElementById("item-" + id).parentElement);
      wrappedList[0].scrollTop = 70 * id;
    }

    $scope.reCalculateSize = function() {
      $ionicScrollDelegate.resize();
    };
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
});
