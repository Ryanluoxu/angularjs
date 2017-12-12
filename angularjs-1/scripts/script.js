//var myApp = angular.module("myModule",[]);	// 1. create module	

/**
var myController = function ($scope) {		// 2. create controller
	$scope.message = "Hello world..";
}
myApp.controller("myController", myController);		// 3. register controller with module
*/

/** combine 2 and 3 */

//myApp.controller("myController", function ($scope) {
//	
//	var customer = {		
//		firstName: "ryan",
//		lastName: "luo",
//		gender: "male"
//	};							// create object
//	
//	$scope.customer = customer;	// attach object to scope
//
//}); 

var myApp = angular
				.module("myModule",[])
				.controller("myController", function ($scope) {
					
					var customer = {
							name: "ryan",
							age: "29"
					};
					
					$scope.customer = customer;
				}); 












