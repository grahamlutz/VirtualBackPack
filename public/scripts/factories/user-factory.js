var app = angular.module('myVirtualPack');

app.factory('user', ['$http', 'auth', gearFactory]);

function gearFactory($http, auth) {
  var user = {
    user: []
  }

  user.get = get;

  function get(username) {
    console.log('get(id)');
    return $http.get('/user/' + username).then(function(res){
      return res.data;
    });
  };

  return user;
}
