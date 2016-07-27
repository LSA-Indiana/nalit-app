app = angular.module('nalit.controllers', ['nalit.services'])

app.controller('MainCtrl', function($scope, $state, Menu) {
    $scope.menuItems = Menu.all();
});
