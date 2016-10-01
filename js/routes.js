define(function(){
  function initRoutes(app){
    app.config(['$routeProvider','$httpProvider',
        function($routeProvider,$httpProvider){
          $httpProvider.defaults.withCredentials = true;
          $routeProvider.when('/',{
              templateUrl:'partials/main.html',
              controller:'mapApp'
            });
        }]);
  }
  return {
    initRoutes:initRoutes
  };
});
