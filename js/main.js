var app = angular.module('myApp', [])
       app.controller('myCtrl', function ($scope, $window) {
           $scope.OpenFacebookTab = function () {
               $window.open("https://www.facebook.com/NationalSpeed/");
           }

           $scope.OpenInstagramTab = function () {
           		$window.open("https://www.instagram.com/nationalspeed/");
           }

           $scope.OpenYoutubeTab = function () {
           		$window.open("https://www.youtube.com/channel/UCaMdP7NP5nnoMyokjMd089Q/");
           }
       })