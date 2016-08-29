var app = angular.module('myVirtualPack');

app.factory('posts', [function postFactory() {
  var postsObj = {
    posts: [
      {title:'post 1', upvotes: 5, comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]},
      {title:'post 2', upvotes: 2, comments: []},
      {title:'post 3', upvotes: 15, comments: []},
      {title:'post 4', upvotes: 4, comments: []},
      {title:'post 5', upvotes: 9, comments: []}
    ]
  }
  return postsObj;
}])

// var postFactory = function postFactory() {
//   var postsObj = {
//     posts: []
//   }
//   return postsObj;
// }
