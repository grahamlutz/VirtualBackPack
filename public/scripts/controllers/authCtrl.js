var app = angular.module( 'myVirtualPack');

app.controller('AuthCtrl', [ '$scope', '$state', 'auth', authController]);

function authController($scope, $state, auth){
  $scope.user = {};

  $scope.register = register;
  $scope.logIn = logIn;

  function register(){
    auth.register($scope.user).error(function(error){
      $scope.error = error;
    }).then(function(){
      $state.go('home');
    });
  };

  function logIn(){
    auth.logIn($scope.user).error(function(error){
      $scope.error = error;
    }).then(function(){
      $state.go('home');
    });
  };
}
