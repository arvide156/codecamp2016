'use strict';

angular.module('starter.services', [])

.service("LoginService", function($q, $http){
	return {
		login: function(user, pass) {
			var deferred = $q.defer(); var promise = deferred.promise;
            var servicio = "http://damianvera93.esy.es/codecamp/login.php";
            $http.get(servicio, {params: {'user':user, 'password':pass}})
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(data){
                deferred.reject('Failure to connect');
            });
            promise.success = function(fn){
                promise.then(fn); return promise;
            }
            promise.error = function(fn){
                promise.then(null, fn); return promise;
            }
            return promise;
		}
	}
});