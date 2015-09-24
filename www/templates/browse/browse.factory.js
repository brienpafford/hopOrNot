angular.module('hopOrNot.browse.factories', [])
	
	.factory('Browse', function($http, brewdbKEY, brewdb_DEVICE_PROD) {
		
		var  apiDev = '/api/randomBrew?' +
					 		 'key=' +
					 		 brewdbKEY +
					 		 '&hasibu=Y' + 
					 		 '&hasDescription=Y' +
					 		 '&hasLabels=Y' +
					 		 '&format=json';

		var apiProd = brewdb_DEVICE_PROD;

		var randomBrew = {
			randomBrew : function getRandomBrew(cb) {
				$http
					.get(apiProd)
					.success(cb)
			}
		} 
		return randomBrew;
	})


