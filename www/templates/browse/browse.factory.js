angular.module('hopOrNot.browse.factory', [])
	
	.factory('Browse', function ($http, brewdbKEY) {
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
