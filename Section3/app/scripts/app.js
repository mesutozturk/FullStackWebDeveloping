'use strict';

/**
 * @ngdoc overview
 * @name firstangularApp
 * @description
 * # firstangularApp
 *
 * Main module of the application.
 */
var app = angular.module('firstangularApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]);
app.factory("api", function ($http) {
  var apiUrl = 'https://api.foursquare.com/v2/',
    clientId = 'W5SVVWFXISFW0UL1SA2RZ14ONK05PKUZWCT3N4O0X5J54X2G',
    clientSecret = 'JV1BXFE1EZNMUCHJP0UCB0CVJ2GXIYBSX20S31PCOSZ3CZ4Z',
    v = '20170816';

  return {
    searchVenue: function (searchText, success) {
      $http({
        url: apiUrl + 'venues/search?',
        method: 'GET',
        params: {
          client_id: clientId,
          client_secret: clientSecret,
          v: v,
          near: 'Istanbul,tr',
          query: searchText
        }
      }).then(function (response) {
        success(response.data);
      })
    },
    getVenue: function (id, success) {
      $http({
        url: apiUrl + 'venues/' + id,
        method: 'GET',
        params: {
          client_id: clientId,
          client_secret: clientSecret,
          v: v
        }
      }).then(function (response) {
        success(response.data);
      })
    },
    getphotos:function(id,success){
      //https://api.foursquare.com/v2/venues/VENUE_ID/photos
      $http({
        url: apiUrl + 'venues/' + id+"/photos",
        method: 'GET',
        params: {
          client_id: clientId,
          client_secret: clientSecret,
          v: v
        }
      }).then(function (response) {
        success(response.data);
      })
    }
  }
});
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/detay/:id', {
      templateUrl: 'views/detay.html',
      controller: 'DetayCtrl',
      controllerAs: 'detay'
    })
    .otherwise({
      redirectTo: '/'
    });
});
