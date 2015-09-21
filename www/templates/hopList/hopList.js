angular.module('hopOrNot.hopList', [])
	
    .controller('hopListCtrl', function($scope, $ionicLoading, $state, hopList) {

    

      $ionicLoading.show({
        template: '<ion-spinner icon="lines"/></p>'
        });

     //  Return All Beers

     hopList.allBeers(function(allBrews) {
        $ionicLoading.hide();
        $scope.hops = allBrews.Beer_Details;
        })
	});
	