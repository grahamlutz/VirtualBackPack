var app = angular.module('myVirtualPack');

app.controller('GearCtrl', [
  '$scope',
  'gear',
  function($scope, products) {
  	// $scope.products = products.products;
  	// $scope.addProduct = function() {
  	// 	var p = $scope.products;
  	// 	if(!p.manufacturer || p.manufacturer === '') { return; }
  	// 	$scope.products.push({
  	// 		manufacturer: $scope.products.manufacturer,
  	// 		name: $scope.products.name,
  	// 		weight: $scope.products.weight,
  	// 		units: $scope.products.units,
  	// 		nickname: $scope.products.nickname,
  	// 		price: $scope.products.price
  	// 	});
  	// 	console.log($scope.products[0].manufacturer);
  	// 	p.manufacturer = '';
  	// 	p.name = '';
  	// 	p.weight = '';
  	// 	p.units = 'oz';
  	// 	p.nickname = '';
  	// 	p.price = '';
  	// };
}]);
