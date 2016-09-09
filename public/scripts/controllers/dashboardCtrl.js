var app = angular.module('myVirtualPack');

app.controller('DashboardCtrl', ['$stateParams', '$scope', 'user', 'post', dashboardController]);

function dashboardController($stateParams, $scope, user, post) {
  $scope.post = JSON.parse(post);
  console.log('user:', user);
  console.log('$scope.post: ', post);
  $scope.username = $scope.post.data[0].username;
}
