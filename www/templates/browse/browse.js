angular.module('hopOrNot.browse', [])

		.controller('browseCtrl', function($scope, $state, $stateParams, $ionicLoading, Browse) {
			
		 $ionicLoading.show({
				template: '<ion-spinner icon="lines"/></p>'
		});

	 		Browse.randomBrew(function(data) {
	 			$scope.randomBrew = data;
	 			$ionicLoading.hide();
	 			console.log($scope.randomBrew) 			
	 		})

 		

	});