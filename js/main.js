require.config({
  baseUrl: './js',
  paths: {
    angular: 'vendor/angularjs/1.5.8/angular.min',
    angularRoute: 'vendor/angularjs/1.5.8/angular-route.min',
    angularAnimate: 'vendor/angularjs/1.5.8/angular-animate.min',
    angularTouch: 'vendor/angularjs/1.5.8/angular-touch.min',
    uiBootStrap: 'vendor/ui-bootstrap/2.1.4/ui-bootstrap-tpls.min'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angularRoute': {
      deps: ['angular'],
      exports: 'angularRoute'
    },
    'angularAnimate': {
      deps: ['angular'],
      exports: 'angularAnimate'
    },
    'angularTouch': {
      deps: ['angular'],
      exports: 'angularTouch'
    },
    'uiBootStrap': {
      deps: ['angularAnimate', 'angularTouch', 'angular'],
      exports: 'uiBootStrap'
    }
  }
});

require(['angular', 'controller', 'routes', 'angularRoute', 'angularAnimate', 'angularTouch', 'uiBootStrap'],
  function(angular, controller, routes, angularRoute, angularAnimate, angularTouch, uiBootstrap) {
    'use strict';

    var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['myApp']);
    });

    routes.initRoutes(app);
    controller.controllerInit(app);
});
