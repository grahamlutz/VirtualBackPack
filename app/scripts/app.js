var app = angular.module('virtualPack', []);

app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.test = 'Scope test';
	$scope.products = [
		{manufacturer: 'Enlightened Equipment', name: 'Revelation', weight: 21.95, units: 'oz', nickname: 'Top Quilt', price: 295},
		{manufacturer: 'Enlightened Equipment', name: 'Revolt', weight: 21.95, units: 'oz', nickname: 'UQ', price: 255},
		{manufacturer: 'Osprey', name: 'Exos 58', weight: 39, units: 'oz', nickname: 'Backpack', price: 199}
	];
	$scope.addProduct = function() {
		var p = $scope.products;
		//if(!p.manufacturer || p.manufacturer === '') { return; }
		$scope.products.push({
			manufacturer: $scope.products.manufacturer, 
			name: $scope.products.name, 
			weight: $scope.products.weight, 
			units: $scope.products.units, 
			nickname: $scope.products.nickname,
			price: $scope.products.price
		});
		p.manufacturer = '';
		p.name = '';
		p.weight = '';
		p.units = 'oz';
		p.nickname = '';
		p.price = '';
	}
}])
