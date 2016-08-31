var app = angular.module('myVirtualPack');

app.controller( 'NavCtrl', [ '$scope', 'auth', navController ] );

 function navController($scope, auth){
   $scope.isLoggedIn = auth.isLoggedIn;
   $scope.currentUser = auth.currentUser;
   $scope.logOut = auth.logOut;
 }
