'use strict';

/* Controllers */

function AlbumListCtrl($scope, $http) {
	
  var timeout

  $scope.updateSearchTerm = function () {
	  console.log("update searchTerm " + $scope.searchTerm);
	  clearTimeout(timeout)
	  timeout = setTimeout($scope.startSearch, 1000)
  };

  $scope.startSearch = function () {
     
	  console.log("searchTerm executing... " + $scope.searchTerm)
	  $http.jsonp("https://itunes.apple.com/search", {
	      params: {
	          "callback": "JSON_CALLBACK",
	          "term": $scope.searchTerm,
			  "entity": "album",
			  "limit": "10",
	      }
	  }).success(function(data, status, headers, config) {
		  $scope.albums = data.results.splice(1, data.results.length)
	 
	  }).error(function(data, status, headers, config) {
		  
	  });
  };

}