var app = angular.module('myVirtualPack');

app.factory('auth', ['$http', '$window', authFactory])

function authFactory ($http, $window) {
    var auth = {};

    auth.saveToken = saveToken;
    auth.getToken = getToken;
    auth.isLoggedIn = isLoggedIn;
    auth.currentUser = currentUser;
    auth.register = register;
    auth.logIn = logIn;
    auth.logOut = logOut;

    function saveToken(token){
      $window.localStorage['mvp-token'] = token;
    };

    function getToken(){
      return $window.localStorage['mvp-token'];
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

    function currentUser(){
      if(auth.isLoggedIn()){
        var token = auth.getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.username;
      }
    };

    function register(user){
      return $http.post('/register', user).success(function(data){
        auth.saveToken(data.token);
      });
    };

    function logIn(user){
      return $http.post('/user/login', user).success(function(data){
        auth.saveToken(data.token);
      });
    };

    function logOut(){
      $window.localStorage.removeItem('mvp-token');
    };

    return auth;
}
