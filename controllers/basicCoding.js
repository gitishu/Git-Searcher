'use strict';
//console.log("hello javascript");
//some basic code of scott allen of JAVASCRIPT PATTERNS
// console.log('fhjsfhjfsdhfjh');
// //here we do the javascript coding by using the javascript codin gpatterns..
// var work =function(){
// 	console.log("working hard!");

// };//since work equals to the immediate function calling expression

// var doWork = function(f){
// 	console.log("starting");
// 	try {
// 	    f();
// 	}
// 	catch(ex){
// 		console.log(ex);
// 	}//if some sort of error comes
// 	console.log("ending");
	
// };
// doWork(work);


//functions to simulate modules or models 

/****
(2) part from the client perspective

***/
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
worker.job1();
worker.job2();//worker is the object which is created by invoking the createWorker fucntion. 
//object ke saath associated methods are defined inside the fucntion by wither of the way (inline or external)
worker.job2();
worker.job2();




