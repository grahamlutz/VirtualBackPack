var app = angular.module('myVirtualPack');

app.factory('gear', ['$http', 'auth', gearFactory]);

function gearFactory($htto, auth) {
  var gear = {
    items: []
  }

  gear.getAll = getAll;
  gear.create = createGear;
  gear.delete = deleteGear;
  gear.get = get;

  function getAll() {};
  function createGear() {};
  function deleteGear() {};
  function get() {};

  return gear;
}
