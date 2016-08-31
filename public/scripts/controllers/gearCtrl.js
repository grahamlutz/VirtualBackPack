var app = angular.module('myVirtualPack');

app.controller('GearCtrl', ['$scope', 'gear', 'auth', gearController]);

function gearController($scope, gear, auth) {
  $scope.gear = gear.gear;
}
