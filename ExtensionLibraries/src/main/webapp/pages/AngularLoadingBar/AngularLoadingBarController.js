angular.module('extensionLibraries.controllers')

.controller('AngularLoadingBarController', [ '$scope','$http','cfpLoadingBar', function($scope,$http,cfpLoadingBar) {


	$scope.chiamaServizio  = function(){
		
		// FACENDO UNA REQUEST VIENE PUBBLICATA LA BARRA
		$http.get('http://swapi.co/api/people/').success(function(data) {
	        $scope.posts = data.results;
	      });
		
		
	}

} ]);