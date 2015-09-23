(function() {

var app = angular.module('virtualPack', ['ui.router', 'ngRoute']);

app.factory('products', [function(){
  var o = {
    products: [
    	{manufacturer: 'Enlightened Equipment', name: 'Revelation', weight: 21.95, units: 'oz', nickname: 'Top Quilt', price: 295},
		{manufacturer: 'Enlightened Equipment', name: 'Revolt', weight: 21.95, units: 'oz', nickname: 'UQ', price: 255},
		{manufacturer: 'Osprey', name: 'Exos 58', weight: 39, units: 'oz', nickname: 'Backpack', price: 199}
    ]
  };
  return o;
}]);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

	  $stateProvider
	    .state('home', {
	      url: '/home',
	      templateUrl: '/home.html',
	      controller: 'MainCtrl'
	    });

	  $urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', ['$scope', 'products', function($scope, products) {
	$scope.products = products.products;
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
		console.log($scope.products[0].manufacturer);
		p.manufacturer = '';
		p.name = '';
		p.weight = '';
		p.units = 'oz';
		p.nickname = '';
		p.price = '';
	};
}]);

})();
