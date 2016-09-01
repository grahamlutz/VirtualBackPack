var app = angular.module('myVirtualPack');

app.factory('gear', ['$http', 'auth', gearFactory]);

function gearFactory($http, auth) {
  var gear = {
    items: []
  }

  gear.getAll = getAll;
  gear.create = createGear;
  gear.delete = deleteGear;
  gear.get = get;

  function getAll() {
    return $http.get('/gear').success(function(data){
      angular.copy(data, gear.items);
    });
  };
  function createGear(item) {
    return $http.post('/gear', item, {
      headers: {Authorization: 'Bearer '+auth.getToken()}
    }).success(function(data){
      gear.items.push(data);
    });
  };
  function deleteGear() {};
  function get() {};

  return gear;
}
