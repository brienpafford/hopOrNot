angular.module('hopOrNot.browse.factories', [])
	
	.factory('Browse', function($http, brewdbKEY) {
		var randomBrew = {

			randomBrew : function getRandomBrew(cb) {
				$http
					.get('api/randomBrew?' +
					 		 'key=' +
					 		 brewdbKEY +
					 		 '&hasibu=Y' + 
					 		 '&hasDescription=Y' +
					 		 '&hasLabels=Y' +
					 		 '&format=json')
					.success(cb)
			}
		} 
		return randomBrew;
	})


