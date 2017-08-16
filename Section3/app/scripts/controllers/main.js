'use strict';

/**
 * @ngdoc function
 * @name firstangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstangularApp
 */
app.controller('MainCtrl', function ($scope, api) {
  $scope.firmalar = [];

  $scope.firmaara = function () {
    api.searchVenue($scope.ara, function (data) {
      console.log(data.response.venues);
      $scope.firmalar=data.response.venues;
    });
  };
});
