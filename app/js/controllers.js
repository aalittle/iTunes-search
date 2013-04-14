'use strict';
angular.module('itunes', ['ui.bootstrap']);

/* Controllers */

function TypeaheadCtrl($scope, $http, limitToFilter) {

	$scope.radioMedia = 'album' //set a default for the radio button

	//trigger a call to the iTunes Search API with the current albumName in the search box	
    $scope.albums = function(searchTerm) {
	
	return $http.jsonp("https://itunes.apple.com/search?callback=JSON_CALLBACK&entity=" + $scope.radioMedia + "&limit=10&term="+searchTerm).then(function(response){
      return limitToFilter(response.data.results, 10);
    });
	
  };
}
