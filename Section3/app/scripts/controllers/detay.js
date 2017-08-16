'use strict';

app.controller("DetayCtrl", function ($scope, $routeParams, api) {
    $scope.id = $routeParams.id;
    $scope.firma = {};
    $scope.firmafoto = null;
    function getvenue() {
        api.getVenue($routeParams.id, function (data) {
            console.log(data.response.venue);
            $scope.firma = data.response.venue;
            if ($scope.firma.bestPhoto != null) {
                var foto = $scope.firma.bestPhoto;
                var yol = foto.prefix;
                yol += foto.height + "x" + foto.width;
                yol += foto.suffix;
                $scope.firmafoto = yol;
            } else {
                $scope.firmafoto = "../images/yeoman.png";
            }
            haritadagoster();
        });
        api.getphotos($routeParams.id,function(data){
            console.log(data);
        });
    }
    function haritadagoster() {
        var enboy = {
            lat: $scope.firma.location.lat,
            lng: $scope.firma.location.lng
        }
        console.log(enboy);
        var mapdiv = document.getElementById('harita');
        var settings = {
            center: enboy,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            }
        };
        var map = new google.maps.Map(mapdiv, settings);
        var marker = new google.maps.Marker({
            position: enboy,
            map: map,
            title: $scope.firma.name,
            animation: google.maps.Animation.DROP
        });
    }
    getvenue();
});