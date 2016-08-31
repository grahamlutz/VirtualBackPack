var app = angular.module('myVirtualPack');

app.factory('posts', ['$http', 'auth', postsFactory]);

function postsFactory($http, auth) {
  var postsObj = {
    posts: []
  }

  postsObj.getAll = function() {
    return $http.get('/posts').success(function(data){
      angular.copy(data, postsObj.posts);
    });
  };

  postsObj.create = function(post) {
    return $http.post('/posts', post, {
      headers: {Authorization: 'Bearer '+auth.getToken()}
    }).success(function(data){
      postsObj.posts.push(data);
    });
  };

  postsObj.upvote = function(post) {
    return $http.put('/posts/' + post._id + '/upvote', null, {
      headers: {Authorization: 'Bearer '+auth.getToken()}
    })
      .success(function(data){
        post.upvotes += 1;
      });
  };

  postsObj.downvote = function(post) {
    return $http.put('/posts/' + post._id + '/downvote', null, {
      headers: {Authorization: 'Bearer '+auth.getToken()}
    })
      .success(function(data){
        post.upvotes -= 1;
      });
  };

  postsObj.get = function(id) {
    return $http.get('/posts/' + id).then(function(res){
      return res.data;
    });
  };

  postsObj.addComment = function(id, comment) {
    return $http.post('/posts/' + id + '/comments', comment, {
      headers: {Authorization: 'Bearer '+auth.getToken()}
    });
  };

  postsObj.upvoteComment = function(post, comment) {
    return $http.put('/posts/' + post._id + '/comments/'+ comment._id + '/upvote', null, {
      headers: {Authorization: 'Bearer '+auth.getToken()}
    })
      .success(function(data){
        comment.upvotes += 1;
      });
  };

  postsObj.downvoteComment = function(post, comment) {
    return $http.put('/posts/' + post._id + '/comments/'+ comment._id + '/downvote', null, {
      headers: {Authorization: 'Bearer '+auth.getToken()}
    })
      .success(function(data){
        comment.upvotes -= 1;
      });
  };

  return postsObj;
}
