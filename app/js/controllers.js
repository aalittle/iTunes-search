'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

	  $http({method: 'GET', url: '/itunes.apple.com/lookup?id=909253&entity=album'}).
	    success(function(data, status, headers, config) {
	      // this callback will be called asynchronously
	      // when the response is available
		  $scope.app = data
	    }).
	    error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });
		
  }])
  .controller('MyCtrl2', [function() {

  }]);