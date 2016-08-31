var app = angular.module('myVirtualPack');

app.controller('GearCtrl', ['$scope', 'gear', 'auth', gearController]);

function gearController($scope, gear, auth) {
  $scope.gear = gear.items;
  $scope.addProduct = function() {
  	var p = $scope.gear;
  	if(!p.manufacturer || p.manufacturer === '') { return; }
  	$scope.products.push({
  		manufacturer: $scope.products.manufacturer,
  		name: $scope.products.name,
  		weight: $scope.products.weight,
  		units: $scope.products.units,
  		nickname: $scope.products.nickname,
  		price: $scope.products.price
  	});
  	console.log($scope.products[0].manufacturer);
  	p.manufacturer = '';
  	p.name = '';
  	p.weight = '';
  	p.units = 'oz';
  	p.nickname = '';
  	p.price = '';
  };
}
