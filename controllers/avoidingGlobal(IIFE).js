'use strict';
(function(){
var createWorker = function(){
	// return{
	// 	job1: function(){

	// 	},
	// 	job2: function(){


	// 	}
	// 	//here we define the functions inline by using this approach

	//2 way
	var workCount=0;
	var task1 = function(){
		workCount+=1;
		console.log("task1 " + workCount);
	};
	var task2 = function(){
		workCount+=1;
		console.log("task2 " + workCount);
	};
	
	return {
		job1: task1,
		job2: task2
	};


	};
    


var worker = createWorker();
//worker.task1();
worker.job1();
worker.job2();//worker is the object which is created by invoking the createWorker fucntion. 
//object ke saath associated methods are defined inside the fucntion by either of the way (inline or external)
worker.job2();
worker.job2();
//createWorker and worker are the global variables since are defined outside of any of the code..

}());//extra opening closing parenthesis in IIFE
  

