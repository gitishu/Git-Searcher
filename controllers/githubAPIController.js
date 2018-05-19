//'use strict';
// (function(){
// var angular;
// var app = angular.module("githubViewer",[]);
// //var githubAPIController=function($scope,$http){
// app.controller('githubAPIController', ['$scope', function ($scope) {
	
	
// 	var onUserComplete=function(response){
// 		$scope.user = response.data; 
// 	};
// 	var onError = function(reason){
// 		$scope.error = "Could not fetch the user";


// 	};

// 	$http.get("https://api.github.com/users/odetocode")
// 	.then(onUserComplete,onError);

// 	$scope.message="Git Searcher";

// }])
// //app.controller("githubAPIController", githubAPIController);
// }());

// i dont know why this format is not working by initailising the base module in an IIFE 
// console.log('hy');
// (function(){


// 	var app = angular.module('githubViewer',[]);//its all depeendenciess...


// 	var githubAPIController=function($scope,$http){
		
// 		var onUserComplete=function(response){
// 			$scope.user = response.data; 
// 		};
// 		var onError = function(reason){
// 			$scope.error = "Could not fetch the user";


// 		};

// 		$http.get("https://api.github.com/users/odetocode")
// 		.then(onUserComplete,onError);

// 		$scope.message="Git Searcher";

// };
// app.controller('githubAPIController',[githubAPIController]);
// }());



// doing this without creating any base module...
//I AM MAKING THIS CONTROLLER WITH THE GITHUBAPI SERVICE..

/***
var MainController=function($scope,githubAPIService,$interval,$log,$anchorScroll,$location){
var onUserComplete=function(data){
$scope.user=data;
githubAPIService.getRepos($scope.user)
	.then(onRepos,onError);

};

var onRepos=function(data){
	$scope.repos=data;
	$location.hash("userDetails");
	$anchorScroll(); 	
};


var onError=function(reason){

	$scope.error = "Could not fetch the data of the user";


};

//making a game for the user of decrementing the 5 seconds


var decrementCountdown = function(){
	$scope.countdown -= 1;
	if($scope.countdown<1){
		$scope.search($scope.username);
	}
};


var countdownInterval=null;

var startCountdown=function(){
	countdownInterval=$interval(decrementCountdown, 1000, $scope.countdown);

};




// $http.get("https://api.github.com/users/angular")
// 	.then(onUserComplete,onError);




	$scope.search=function(username){

		$log.info("Searching for "  + username);


githubAPIService.getUser(useranme)
			.then(onUserComplete,onError);
		if(countdownInterval){
			$interval.cancel(countdownInterval);
			$scope.countdown = null;
		}	
	};

	$scope.username="angular";//default username 
	$scope.message="Git Searcher";
	$scope.repoSortOrder="-stargazers_count";
	$scope.countdown=5;
	startCountdown();//function called
};






/*** some another method is where we use the code like this
app.controller('githubAPIController',['$scope','$http','$routeParams',githubAPIController]); 

or an IIFE like this



(function(){
	var myCtrl=function($scope,$http){
		$http.gte("hhtps://api.github.com/users/robconery")
		.then(function(response)){
			$scope.user=response.data;
		}
	};

}());

**/





//I AM MAKING THIS CONTROLLER WITHOUT THE GITHUBAPI SERVICE.. 
var MainController=function($scope,$http,$interval,$log,$anchorScroll,$location){
var onUserComplete=function(response){
$scope.user=response.data;
$http.get($scope.user.repos_url)
	.then(onRepos,onError);

};

var onRepos=function(response){
	$scope.repos=response.data;
	$location.hash("userDetails");
	$anchorScroll(); 	
};


var onError=function(reason){

	$scope.error = "Could not fetch the data of the user";


};

//making a game for the user of decrementing the 5 seconds


var decrementCountdown = function(){
	$scope.countdown -= 1;
	if($scope.countdown<1){
		$scope.search($scope.username);
	}
};


var countdownInterval=null;

var startCountdown=function(){
	countdownInterval=$interval(decrementCountdown, 1000, $scope.countdown);

};




// $http.get("https://api.github.com/users/angular")
// 	.then(onUserComplete,onError);




	$scope.search=function(username){

		$log.info("Searching for "  + username);


		$http.get("https://api.github.com/users/" + username)
			.then(onUserComplete,onError);
		if(countdownInterval){
			$interval.cancel(countdownInterval);
			$scope.countdown = null;
		}	
	};

	$scope.username="angular";//default username 
	$scope.message="Git Searcher";
	$scope.repoSortOrder="-stargazers_count";
	$scope.countdown=5;
	startCountdown();//function called
};






/*** some another method is where we use the code like this
app.controller('githubAPIController',['$scope','$http','$routeParams',githubAPIController]); 

or an IIFE like this



(function(){
	var myCtrl=function($scope,$http){
		$http.gte("hhtps://api.github.com/users/robconery")
		.then(function(response)){
			$scope.user=response.data;
		}
	};

}());

**/

//for learning 



var  i = function(){


};

	




// till their 




