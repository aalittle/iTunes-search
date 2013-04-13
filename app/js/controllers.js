'use strict';

/* Controllers */

function AlbumListCtrl($scope, $http) {

  $http.jsonp("https://itunes.apple.com/lookup", {
      params: {
          "callback": "JSON_CALLBACK",
          "id": "909253",
		  "entity": "album",
      }
  }).success(function(data, status, headers, config) {
      console.log("is scope : " + data);
	  $scope.albums = data.results.splice(1, data.results.length)
	  
  }).error(function(data, status, headers, config) {
      console.log("error" + data);
  });

  $scope.startSearch = function () {
          
	  // console.log("searchTerm " + searchTerm)
	  $http.jsonp("https://itunes.apple.com/search", {
	      params: {
	          "callback": "JSON_CALLBACK",
	          "term": "NIN",
			  "entity": "album",
	      }
	  }).success(function(data, status, headers, config) {
		  $scope.albums = data.results.splice(1, data.results.length)
	  
	  }).error(function(data, status, headers, config) {

	  });
  };

}