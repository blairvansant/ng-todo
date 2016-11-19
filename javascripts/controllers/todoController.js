"use strict"

app.controller("TodoCtrl", function($scope, ItemFactory){
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items = [];


	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems){
			$scope.items = fbItems;
		})
	}


	$scope.allItems = function(){
		console.log("you clicked all items")
			$scope.showListView = true;

	}
	$scope.newItem = function(){
		console.log("you clicked new items")
			$scope.showListView = false;

	}

	$scope.addNewItem = function(){
		$scope.newTask.isCompleted = false;
		ItemFactory.postNewItem($scope.newTask).then(function(itemId){
		getItems();
		$scope.newTask ={};
		$scope.showListView ="true";
		})
	};

	$scope.deleteItem = function(itemId){
		console.log("you deleted me", itemId);
		ItemFactory.deleteItem(itemId).then(function(response){
			getItems();
		})
	}

});

//angular things:

//Factory: ability to use other services (have dependencies), service initialization, delayed/lazy initialization

//$q:A service that helps you run functions asynchronously, and use their return values (or exceptions) when they are done 

//$q instead of promise

//$http instead of ajax request

//.success instead of .then