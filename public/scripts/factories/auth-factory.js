var app = angular.module('myVirtualPack');

app.factory('auth', ['$http', '$window', authFactory])

function authFactory($http, $window) {
    var auth = {};

    auth.saveToken = saveToken;

    auth.getToken = getToken;

    auth.isLoggedIn = isLoggedIn;

    auth.currentUser = function(){
      if(auth.isLoggedIn()){
        var token = auth.getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.username;
      }
    };

    auth.register = function(user){
      return $http.post('/register', user).success(function(data){
        auth.saveToken(data.token);
      });
    };

    auth.logIn = function(user){
      return $http.post('/login', user).success(function(data){
        auth.saveToken(data.token);
      });
    };

    auth.logOut = function(){
      $window.localStorage.removeItem('flapper-news-token');
    };

    function saveToken(token){
      $window.localStorage['flapper-news-token'] = token;
    };
    function getToken(){
      return $window.localStorage['flapper-news-token'];
    }
    function isLoggedIn(){
      var token = auth.getToken();

      if(token){
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    return auth;
}
