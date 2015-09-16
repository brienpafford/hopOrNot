angular.module('hopOrNot.browse', [])

	.controller('browseCtrl', function($scope, $state, $stateParams, $ionicLoading, Browse) {

			$ionicLoading.show();

 		Browse.randomBrew(function(data) {
 			$scope.randomBrew = data;
 			console.log($scope.randomBrew)
 			$ionicLoading.hide();
 		})

 		

	});