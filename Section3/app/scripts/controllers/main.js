'use strict';

/**
 * @ngdoc function
 * @name firstangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstangularApp
 */
app.controller('MainCtrl', function ($scope, api) {
  $scope.firmaara = function () {
    api.searchVenue($scope.ara, function (response) {
      console.log(response);
    });
  };
});
