var app = angular.module( 'myVirtualPack');

app.controller( 'MainCtrl', ['$scope', 'posts', 'gear', 'auth', mainCtrl]);

function mainCtrl ($scope, posts, auth) {
  $scope.posts = posts.posts;
  $scope.isLoggedIn = auth.isLoggedIn;
  
  $scope.addGear = addGear;
  $scope.addPost = addPost;
  $scope.incrementUpvotes = incrementUpvotes;
  $scope.decrementUpvotes = decrementUpvotes;

  function addGear() {};

  function addPost() {
    if(!$scope.title || $scope.title === '') { return; }
    posts.create({
      title: $scope.title,
      link: $scope.link,
    });
    $scope.title = '';
    $scope.link = '';
  };

  function incrementUpvotes(post) {
    posts.upvote(post);
  }

  function decrementUpvotes(post) {
    posts.downvote(post);
  }
}
