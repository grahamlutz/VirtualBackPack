var app = angular.module( 'myVirtualPack');

app.controller( 'MainCtrl', ['$scope', 'posts', 'gear', 'auth', mainCtrl]);

function mainCtrl ($scope, posts, gear, auth) {
  $scope.posts = posts.posts;
  $scope.gear = gear.items;

  $scope.isLoggedIn = auth.isLoggedIn;

  $scope.addGear = addGear;
  $scope.deleteGear = deleteGear;
  $scope.addPost = addPost;
  $scope.incrementUpvotes = incrementUpvotes;
  $scope.decrementUpvotes = decrementUpvotes;

  function addGear() {
    console.log('addGear() fired!')
  	if(!$scope.manufacturer || $scope.manufacturer === '') { console.log('no manufacturer'); return; }
  	gear.create({
  		manufacturer: $scope.manufacturer,
  		name: $scope.name,
  		weight: $scope.weight,
  		units: $scope.units,
  		nickname: $scope.nickname,
  		price: $scope.price,
      owner: auth.currentUser()
  	});
  	$scope.manufacturer = '';
  	$scope.name = '';
  	$scope.weight = '';
  	$scope.units = 'oz';
  	$scope.nickname = '';
  	$scope.price = '';
  };

  function deleteGear(gearId) {
    gear.delete(gearId);
  }

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
