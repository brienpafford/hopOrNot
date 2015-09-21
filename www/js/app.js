angular.module('hopOrNot', [
               'ionic', 
               'ngCordova',
               'hopOrNot.controllers',
               'hopOrNot.menu',
               'hopOrNot.browse',
               'hopOrNot.browse.factories',
               'hopOrNot.search',
               'hopOrNot.settings',
               'hopOrNot.services',
               'hopOrNot.hopList',
               'hopOrNot.hopList.factory'
               ])

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
    // auth
    .state('auth', {
        url: "/auth",
        abstract: true,
        templateUrl: "templates/auth/auth.html"
    })
    // .state('auth.signin', {
    //     url: '/signin',
    //     views: {
    //         'auth-signin': {
    //             templateUrl: 'templates/auth/auth-signin.html',
    //             controller: 'SignInCtrl'
    //         }
    //     }
    // })
    // .state('auth.signup', {
    //     url: '/signup',
    //     views: {
    //         'auth-signup': {
    //             templateUrl: 'templates/auth/auth-signup.html',
    //             controller: 'SignUpCtrl'
    //         }
    //     }
    // })
  // auth
    .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse/browse.html',
            controller: 'browseCtrl'
          }
        }
      })

      .state('app.hopList', {
        url:'/hopList',
        views: {
          'menuContent': {
            templateUrl: 'templates/hopList/hopList.html',
            controller: 'hopListCtrl'
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

