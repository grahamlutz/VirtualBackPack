var app = angular.module('myVirtualPack');

app.controller('DashboardCtrl', ['$stateParams', '$scope', 'user', 'post', dashboardController]);

function dashboardController($stateParams, $scope, user, post) {
  console.log('$stateParams: ', $stateParams);
  //$scope.user = $stateParams.id;
  //$scope.post = post;
}
