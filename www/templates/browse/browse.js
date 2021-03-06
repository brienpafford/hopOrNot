angular.module('hopOrNot.browse', [])

		.controller('browseCtrl', function($scope, $http, $state, $ionicLoading, $cordovaToast, Browse, hopListAPI) {
			
		 $ionicLoading.show({
				template: '<ion-spinner icon="lines"/></p>'
		});

// Get Beer from Factory

	 		Browse.randomBrew(function(data) {
	 			$scope.randomBrew = data;
	 			$ionicLoading.hide();
	 			console.log(data)	
	 		});
	 		
// Save Beer to Database

 		$scope.saveBeertoHopList = function() {

 			var currentBrew = $scope.randomBrew;
 			var url = "https://heroku-bartender-node-api.herokuapp.com/createBeer";
 			var params = {
 				name: 				currentBrew.data.name,
 				brewery: 			currentBrew.data.name,
 				style: 				currentBrew.data.style.name,
 				abv: 					currentBrew.data.abv,
 				ibu:          currentBrew.data.ibu, 
 				description:  currentBrew.data.description,
 				availability: currentBrew.data.available.name,
 				icon: 				currentBrew.data.labels.icon,
 				image:        currentBrew.data.labels.medium 
 			}
 			$http.post(url, params)
 				.success(function(data, status, headers, config){console.log(currentBrew.data.name + 'saved!')})
 				.error(function(data, status, headers, config){})
 		}

// Show Toast on Successful Save

 		$scope.showToast = function(message, duration, location) {
        $cordovaToast.show(message, duration, location).then(function(success) {
        }, function (error) {
            console.log("The toast was not shown due to " + error);
        });
    }

// Reload Page with new Beer

 		$scope.pourBeer = function() {
 			$state.go($state.current, {}, {reload: true});
 		}
	});