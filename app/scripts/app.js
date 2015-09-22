var app = angular.module('virtualPack', []);

app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.test = 'Scope test';
	$scope.products = [
		{manufacturer: 'Enlightened Equipment', name: 'Revelation', weight: 21.95, units: 'oz', nickname: 'Top Quilt'},
		{manufacturer: 'Enlightened Equipment', name: 'Revolt', weight: 21.95, units: 'oz', nickname: 'UQ'},
		{manufacturer: 'Osprey', name: 'Exos 58', weight: 39, units: 'oz', nickname: 'Backpack'}
	];
	$scope.addProduct = function() {
		$scope.products.push({
			manufacturer: $scope.products.manufacturer, 
			name: $scope.products.name, 
			weight: $scope.products.weight, 
			units: $scope.products.units, 
			nickname: $scope.products.nickname
		});
		console.log("manufacturer: " + $scope.products.manufacturer)
	}
}])
