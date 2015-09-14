angular.module('hopOrNot.browse.factory', [])
	
	.factory('Browse', function ($http, apiKey) {
		var randomBrew = {

			randomBrew : function getRandomBrew(cb) {

				var API_KEY = apiKey;

				$http
					.get('api/randomBrew?' +
					 		 'key=' +
					 		 apiKey +
					 		 '&hasibu=Y' + 
					 		 '&hasDescription=Y' +
					 		 '&hasLabels=Y' +
					 		 '&format=json'
					 		 )
						.success(cb);
		}
	} 
	return randomBrew;
})
