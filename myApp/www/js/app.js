// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('create_event', {
        url: '/create_event',
        templateUrl: 'templates/create_event.html',
        controller: 'CreateEventCtrl'
    })

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('events', {
        url: '/events',
        templateUrl: 'templates/gallery.html',
        controller: 'EventsCtrl'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            }, 
            'fabContent' : {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-positive" ui-sref="create_event"><i class="icon ion-plus"></i></button>'
            }
        }
    })

    .state('app.other_profile', {
        url: '/other_profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/other_profile.html',
                controller: 'OtherProfileCtrl'
            }, 
            'fabContent' : {
                template: ''
            }
        }
    })

    .state('settings', {
        url: '/settings',
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            },
            'fabContent': {
                template: '<button id="fab-filter" class="button button-fab button-stable" style="float: right; margin: 5px 50px" ng-click="openFilter()"><i class="icon ion-chevron-down"></i></button>',
                controller: function ($scope, $timeout, $ionicModal) {
                    $ionicModal.fromTemplateUrl('templates/filter.html', {
                        scope: $scope,
                        animation: 'slide-in-up'
                    }).then(function(modal) {
                        $scope.modal = modal;
                    });
                    $scope.openFilter = function() {
                        $scope.modal.show();
                    };
                    $scope.closeFilter = function() {
                        $scope.modal.hide();
                    };

                    $timeout(function () {
                        document.getElementById('fab-filter').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })

    .state('app.event', {
        url: '/event',
        views: {
            'menuContent': {
                templateUrl: 'templates/event.html',
                controller: 'EventCtrl'
            }
        }
    })

    .state('app.my_event', {
        url: '/my_event',
        views: {
            'menuContent': {
                templateUrl: 'templates/my_event.html',
                controller: 'MyEventCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});
