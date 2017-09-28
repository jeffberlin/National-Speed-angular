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

       $scope.OpenDynojetTab = function () {
       		$window.open("http://www.dynojet.com/");
       }
   	})

var map;

// Map location code

function initMap() {
	var shopLocation = {lat: 34.264266, lng: -77.831065};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: shopLocation,
		mapTypeId: 'hybrid'
	});
	
	var contentString = '<div>' + '<h5>National Speed</h5>' + '</div>' + '<a href="#">Get Directions</a>'; 

	var infowindow = new google.maps.InfoWindow({
    	content: contentString
  	});

	var marker = new google.maps.Marker({
		position: shopLocation,
		map: map,
		title: 'National Speed'
	});
  

	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});

	google.maps.event.addDomListener(window, 'resize', function() {
      map.fitBounds(bounds);
    });
}