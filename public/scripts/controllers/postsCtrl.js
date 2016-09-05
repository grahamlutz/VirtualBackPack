var app = angular.module('myVirtualPack');

app.controller('PostsCtrl', ['$scope','posts','post','auth',postController]);

function postController($scope, posts, post, auth) {
  $scope.post = post;
  $scope.isLoggedIn = auth.isLoggedIn;

  $scope.addComment = addComment;
  $scope.incrementUpvotes = incrementUpvotes;
  $scope.decrementUpvotes = decrementUpvotes;

  function addComment() {
    if($scope.body === '') { return; }
    posts.addComment(post._id, {
      body: $scope.body,
      author: 'user',
    }).success(function(comment) {
      $scope.post.comments.push(comment);
    });
    $scope.body = '';
  }

  function incrementUpvotes(comment) {
    posts.upvoteComment(post, comment);
  }

  function decrementUpvotes(comment) {
    posts.downvoteComment(post, comment);
  }
}
