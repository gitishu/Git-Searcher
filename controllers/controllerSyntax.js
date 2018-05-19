//'use strict';
// var app = angular.module('mainapp',[]);
// app.controller('mainCtrl', ['$scope', function ($scope) {
// 	$scope.message="hello ctrl";	
// }]) 
// var angular;
// var app=angular.module('app',[]);
// app.controller('mainCtrl', ['$scope', function ($scope) {
// 	$scope.message="hey";
// }])
console.log("syntax");
var controllerSyntax=function($scope){


	var person={
		firstName: 'scott',
		lastName: 'allen',
		imageSrc: "http://odetocode.com/Images/scott_allen_2.jpg" 

	};

var person1={
	firstName: "watson",
	lastName: "singh",
	imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvH7AgG2P_aQ1qJvbRi0uGcYm2HPrLtoke9B-DoESjwVMVyPrmg"

};
$scope.person=person;

$scope.person1=person1;

$scope.message="hye";

//failed to use the ng-repeat directive here ...
};


