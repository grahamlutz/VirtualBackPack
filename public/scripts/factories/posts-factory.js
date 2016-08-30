var app = angular.module('myVirtualPack');

app.factory('posts', ['$http', function ($http) {
  var postsObj = {
    posts: []
  }

  postsObj.getAll = function() {
    console.log('posts.getAll()')
    return $http.get('/posts').success(function(data){
      angular.copy(data, postsObj.posts);
      console.log('postsObj.posts: ',postsObj.posts);
    });
  };

  postsObj.create = function(post) {
    return $http.post('/posts', post).success(function(data){
      postsObj.posts.push(data);
    });
  };

  postsObj.upvote = function(post) {
    return $http.put('/posts/' + post._id + '/upvote')
      .success(function(data){
        post.upvotes += 1;
      });
  };

  postsObj.downvote = function(post) {
    return $http.put('/posts/' + post._id + '/downvote')
      .success(function(data){
        post.upvotes -= 1;
      });
  };

  return postsObj;
}])

// var postFactory = function postFactory() {
//   var postsObj = {
//     posts: []
//   }
//   return postsObj;
// }
