"use strict";

app.controller('ItemNewCtrl', function($scope, $location, ItemFactory){
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items = [];

	$scope.addNewItem = function(){
		$scope.newTask.isCompleted = false;
		ItemFactory.postNewItem($scope.newTask).then(function(itemId){
		$location.url("/items/list");
		$scope.newTask ={};
		});
	


	};

});