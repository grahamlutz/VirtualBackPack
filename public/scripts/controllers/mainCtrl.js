var app = angular.module( 'myVirtualPack');

app.controller( 'MainCtrl', ['$scope', 'posts', mainCtrl]);

function mainCtrl ($scope, posts) {
  $scope.test = 'Hello, World!';
  $scope.posts = posts.posts;
  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      link: $scope.link,
      title: $scope.title,
      upvotes: 0,
      comments: []
    });
    $scope.title = '';
    $scope.link = '';
  }
  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }
  $scope.decrementUpvotes = function(post) {
    post.upvotes -= 1;
  }
}
