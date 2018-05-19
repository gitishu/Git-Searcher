
(function(){

		console.log("yo");
		var angular;
		var myapp = angular.module("myapp",["ngRoute"]);//its all depeendenciess...
			myapp.config([function ($routeProvider) {
				$routeProvider
					.when("/main", {
						templateUrl: 'main.html',
						controller: 'githubAPIController'
					})
					.otherwise({ redirectTo: '/main' });
			}]);


}());



//var app=angular.module('app',[]);