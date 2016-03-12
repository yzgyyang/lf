angular.module('portalApp')

// Widget controller - runs every time widget is shown
.controller('lfCtrl', ['$scope', '$http', '$q', 'lfFactory', function ($scope, $http, $q, lfFactory) {

    // Widget Configuration
    $scope.portalHelpers.config = {
        // make 'widgetMenu.html' the template for the top right menu
        "widgetMenu": "widgetMenu.html"
    };

    // Import variables and functions from service
    $scope.data = lfFactory.data;

    // initialize the service
    lfFactory.init($scope);

	// Show main view in the first column
	$scope.portalHelpers.showView('main.html', 1);
	
}])

    // Handle click on an item in the list and search example
    $scope.showDetails = function (item) {
        // Set which item to show in the details view
        $scope.item.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('details.html', 2);
    };

    // Handle "previous item" click from the details page
    $scope.prevItem = function () {
        // get previous items in the list
        var prevItem = $scope.portalHelpers.getPrevListItem();
        // refresh details view with the new item
        $scope.showDetails(prevItem);
    }

    $scope.nextItem = function () {
        var nextItem = $scope.portalHelpers.getNextListItem();
        $scope.showDetails(nextItem);
    }

}])

// Factory maintains the state of the widget
.factory('lfFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
		
	var initialized = {value: false};

	// Your variable declarations
	var data = {value: null};

	var init = function ($scope) {
		if (initialized.value)
			return;
		
		initialized.value = true;

		// Place your init code here:
		data.value={message:"Welcome to Portal SDK!"};
	}


	// Expose init(), and variables
	return {
		init: init,
		data: data
	};

}])
// Custom directive example
.directive('lfDirectiveName', ['$http', function ($http) {
	return {
		link: function (scope, el, attrs) {

		}
	};
}])
// Custom filter example
.filter('lfFilterName', function () {
	return function (input, arg1, arg2) {
		// Filter your output here by iterating over input elements
		var output = input;
		return output;
	}
});