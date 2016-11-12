/* global angular, document, window */
'use strict';

var service_url = "http://damianvera93.esy.es/codecamp/";

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout, $state) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;
    $scope.show_config = "hide";
    $scope.show_edit = "hide";

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };

    $scope.showConfig = function() {
        $scope.show_config = "";
    }
    $scope.hideConfig = function() {
        $scope.show_config = "hide";
    }
    $scope.goToSettings = function() {
        $state.go("settings");
    }

    $scope.showEdit = function() {
        $scope.show_edit = "";
    }
    $scope.hideEdit = function() {
        $scope.show_edit = "hide";
    }
    $scope.editEvent = function() {
        $state.go("create_event");
    }
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, $http, $state) {
    $scope.user = {};
    $scope.login = function(){
        var data = {
            'username' : $scope.user.username,
            'password' : $scope.user.password
        };

        $http.post(service_url + 'login.php', data)
        .success(function(data, status, headers, config) {
            if(data != null){
                $state.go("app.home");
            }
        })
        .error(function(data, status, headers, config) {
            console.log('error');
        });
    }
    ionicMaterialInk.displayEffect();
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');
    $scope.$parent.hideConfig();
    $scope.$parent.hideEdit();

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $scope.hideButton = 'none';
    $scope.$parent.showConfig();
    $scope.$parent.hideEdit();

    $scope.events = [
        {nombre: "Evento 1", personas: "5", estrellas:"4", horario:"5:00pm"},
        {nombre: "Evento 2", personas: "10", estrellas:"5", horario:"10:00pm"},
        {nombre: "Evento 3", personas: "15", estrellas:"5", horario:"Tomorrow"}
    ]

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('SettingsCtrl', function($scope, $state){
    $scope.goBack = function() {
        $state.go("app.profile");
    }
})

.controller('OtherProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $scope.hideButton = 'none';
    $scope.$parent.hideConfig();
    $scope.$parent.hideEdit();

    $scope.events = [
        {nombre: "Evento 4", personas: "5", estrellas:"4", horario:"5:00pm"},
        {nombre: "Evento 5", personas: "10", estrellas:"5", horario:"10:00pm"},
        {nombre: "Evento 6", personas: "15", estrellas:"5", horario:"Tomorrow"}
    ]

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('SettingsCtrl', function($scope, $state){
    $scope.goBack = function() {
        $state.go("app.profile");
    }
})

.controller('CreateEventCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('EventsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $ionicPopup) {
    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

    $scope.showPopup = function() {
        $scope.data = {};
        $ionicPopup.show({
            template: '<div style="text-align:center"><h2>Event Title</h2><p>Event Organizer</p><button class="icon ion-android-star-outline"></button><button class="icon ion-android-star-outline"></button><button class="icon ion-android-star-outline"></button><button class="icon ion-android-star-outline"></button><button class="icon ion-android-star-outline"></button></div>',
            title: 'How was the event?',
            subTitle: '',
            scope: $scope,
            buttons: [
            {
                text: '<b>Submit</b>',
                type: 'button-positive',
                onTap: function(e) {
                    // add your action
                }
            }
            ]
        });
    }

})

.controller('HomeCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab('right');
    $scope.$parent.hideConfig();
    $scope.$parent.hideEdit();

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('EventCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab('right');
    $scope.$parent.hideConfig();
    $scope.$parent.hideEdit();

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('MyEventCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab('right');
    $scope.$parent.hideConfig();
    $scope.$parent.showEdit();

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

;
