angular.module('hopOrNot.hopList', [])
    
    .controller('hopListCtrl', function($scope, $http, $ionicLoading, $state, hopList) {

      $ionicLoading.show({
        template: '<p><ion-spinner icon="lines"/></p>'
        });

//  Return All Beers

       hopList.allBeers(function(allBrews) {
          $ionicLoading.hide();
          $scope.hops = allBrews.Beer_Details;
          console.log($scope.hops)
        })
      

      $scope.removeBeer = function(hop) {
        var hopID = hop;
        console.log(hopID);
        var url = 'https://heroku-bartender-node-api.herokuapp.com/removeBeer';
        var params = {_id: hopID}
        $http.put(url, params)
        .success(function(data, status, headers, config){})
        .error(function(data, status, headers, config){})
        $state.go($state.current, {}, {reload: true});
    }
  });