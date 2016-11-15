"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
	$scope.navItems =[{name:"Logout"}, {name:"All Items"}, {name:"New Item"}];
})

app.controller("TodoCtrl", function($scope){
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.items = [
	{
		id:0,
		task:"mow the lawn",
		isCompleted: true,
		assignedTo: "Blair"
	},
	{
		id:1,
		task:"mow the lawn2",
		isCompleted: false,
		assignedTo: "Blair"
	},
	{
		id:2,
		task:"mow the lawn3",
		isCompleted: false,
		assignedTo: "Blair"
	}
	];


	$scope.allItems = function(){
		console.log("you clicked all items")
			$scope.showListView = true;

	}
	$scope.newItem = function(){
		console.log("you clicked new items")
			$scope.showListView = false;

	}
})
