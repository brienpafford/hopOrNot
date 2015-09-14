angular.module('hopOrNot', [
               'ionic', 
               'hopOrNot.controllers',
               'hopOrNot.menu',
               'hopOrNot.browse',
               'hopOrNot.search',
               'hopOrNot.settings'
               ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse/browse.html',
          controller: 'browseCtrl'
        }
      }
    })

    .state('app.myBrews', {
      url:'/myList',
      views: {
        'menuContent': {
          templateUrl: 'templates/myBrews/myBrews.html',
          controller: 'myBrewsCtrl'
        }
      }
    })

    .state('app.settings', {
      url:'/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings/settings.html',
          controller: 'settingsCtrl'
        }
      }
    })
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/browse');
});
