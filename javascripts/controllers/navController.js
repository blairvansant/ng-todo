"use strict"

app.controller("NavCtrl", function($scope){
	$scope.navItems =[
		{
				name:"logout",
				url:"#/logout"
		},
		{
				name:"All Items",
				url:"#/items/list"
		},
		{
				name:"New Item",
				url:"#/items/new"
		}
	];
});

