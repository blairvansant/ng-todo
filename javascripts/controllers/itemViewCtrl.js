"use strict";

app.controller("itemViewCtrl", function($scope, ItemFactory, $routeParams){
	$scope.selectedItem = {};
	let itemId = $routeParams.id;
	console.log('$routeParams', $routeParams);

	ItemFactory.getSingleItem(itemId).then(function(oneItem){
		console.log("oneItem", oneItem)
		oneItem.id = itemId;
		$scope.selectedItem = oneItem;
	})
})