'use strict';
//$http is an object with the method which i can use
app.factory('$scope', [function ($scope) {
	

	return {

	};
}])

//now using the promise methods 
var personController  = function($scope,$http){
$scope.user=$http.get("/users/1783");


};
//same thing by using the promise ovbject
var personController=function($scope,$http){
	var promise=$http.get("/users/1783");
	promise.then(function(response){
		$scope.user=response.data;//it will pass to the data in to the function as an parameter 
		//data property of the response of the response object is the data that the web server has returned to you 
	});


};



//single series of chained functions to do this scenario

var personController = function($scope,$http){
	$http.get("/users/1783").then(function(response){
		$scope.user=response.data;
		//or//
		$scope.data=response.data;

	});
};


