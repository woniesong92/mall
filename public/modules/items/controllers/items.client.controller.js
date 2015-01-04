'use strict';

angular.module('items').controller('ItemsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Items',
	function($scope, $stateParams, $location, Authentication, Items) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var item = new Items({
				brand: this.brand,
				category1: this.category1,
				category2: this.category2,
				short_description: this.short_description,
				long_description: this.long_description,
				price: this.price
			});
			item.$save(function(response) {
				$location.path('items/' + response._id);
				$scope.brand = '';
				$scope.category1 = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// $scope.remove = function(item) {
		// 	if (item) {
		// 		item.$remove();

		// 		for (var i in $scope.items) {
		// 			if ($scope.items[i] === item) {
		// 				$scope.items.splice(i, 1);
		// 			}
		// 		}
		// 	} else {
		// 		$scope.item.$remove(function() {
		// 			$location.path('items');
		// 		});
		// 	}
		// };

		// $scope.update = function() {
		// 	var item = $scope.item;

		// 	item.$update(function() {
		// 		$location.path('items/' + item._id);
		// 	}, function(errorResponse) {
		// 		$scope.error = errorResponse.data.message;
		// 	});
		// };

		$scope.find = function() {
			$scope.items = Items.query();
		};

		$scope.findOne = function() {
			$scope.item = Items.get({
				itemId: $stateParams.itemId
			});
		};
	}
]);