var app = angular.module( 'myVirtualPack');

app.controller( 'MainCtrl', ['$scope', 'posts', 'gear', 'auth', mainCtrl]);

function mainCtrl ($scope, posts, gear, auth) {
  $scope.posts = posts.posts;
  $scope.gear = gear.items;
  $scope.isLoggedIn = auth.isLoggedIn;

  $scope.addGear = addGear;
  $scope.addPost = addPost;
  $scope.incrementUpvotes = incrementUpvotes;
  $scope.decrementUpvotes = decrementUpvotes;

  function addGear() {
    console.log('addGear fired');
    var g = $scope.gear;
  	if(!g.manufacturer || g.manufacturer === '') { return; }
  	$scope.gear.push({
  		manufacturer: $scope.gear.manufacturer,
  		name: g.name,
  		weight: g.weight,
  		units: g.units,
  		nickname: $scope.gear.nickname,
  		price: g.price
  	});
  	console.log(g[0].manufacturer);
  	g.manufacturer = '';
  	g.name = '';
  	g.weight = '';
  	g.units = 'oz';
  	g.nickname = '';
  	g.price = '';
  };

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
