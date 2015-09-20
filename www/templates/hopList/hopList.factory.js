angular.module('hopOrNot.hopList.factory', [])
	.factory('hopList', function ($http, hopListAPI) {
	    var allBeers = {

	    	allBeers : function getAllBeers(cb) {
	    		$http
	    			.get(hopListAPI +
	    			 'getAllBeers')
	    			.success(cb)
	      }
	    }
	   return allBeers;
	});