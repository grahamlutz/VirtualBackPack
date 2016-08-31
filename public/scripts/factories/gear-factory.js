var app = angular.module('myVirtualPack');

app.factory('gear', ['$http', 'auth', gearFactory]);

function gearFactory($htto, auth) {
  var gear = {
    items: []
  }

  gear.getAll = function() {};
  gear.create = function() {};
  gear.delete = function() {};
  gear.get = function() {};

  return gear;
}
