define(function () {
  function controllerInit(app) {
    console.log('inside func cont');
    app.controller('mapApp',['$scope','$http','$location', function ($scope, $http, $location) {
      console.log('inside map,testing r.js optimizer');

      $scope.singleModel = 1;
    }]);
  }
  return {
    controllerInit: controllerInit
  };
});
