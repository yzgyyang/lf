angular.module('portalApp')

// Widget controller - runs every time widget is shown
.controller('lfCtrl', ['$scope', '$http', '$q', 'lfFactory', function ($scope, $http, $q, lfFactory) {

        // Model for the search and list example
    $scope.model = [{
        title: "Watcard",
        details: "item 1 details",
        category: '1'
    }, {
        title: "pen",
        details: "item 2 details",
        category: '2'
    }, {
        title: "item 3",
        details: "item 3 details",
        category: '1'
    }, {
        title: "item 4",
        details: "item 4 details",
        category: '2'
    }, {
        title: "item 5",
        details: "item 5 details",
        category: '1'
    }, {
        title: "item 6",
        details: "item 6 details",
        category: '2'
    }];
    
    // Widget Configuration
    $scope.portalHelpers.config = {
        // make 'widgetMenu.html' the template for the top right menu
        "widgetMenu": "widgetMenu.html"
    };

    $scope.item = {value:''};

    // Import variables and functions from service
    $scope.data = lfFactory.data;
    $scope.lostInputDetails=lfFactory.lostInputDetails;
    $scope.lostInputTitle=lfFactory.lostInputTitle;

    // initialize the service
    lfFactory.init($scope);

	// Show main view in the first column
	$scope.portalHelpers.showView('main.html', 1);

    // Handle click on an item in the list and search example
    $scope.showDetails = function (item) {
        // Set which item to show in the details view
        $scope.item.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('details.html', 2);
    };
    
    // Handle click on delete button
     // $scope.removeItem = function($index) {
     //     $scope.model.splice(index.1);
     // }
        
    
    // Handle "previous item" click from the details page
    $scope.prevItem = function () {
        // get previous items in the list
        var prevItem = $scope.portalHelpers.getPrevListItem();
        // refresh details view with the new item
        $scope.showDetails(prevItem);
    }

        // Handle click to display a view
    $scope.showInColumnOne = function (viewname) {
        // Show view in column one
        $scope.portalHelpers.showView(viewname, 2)
    };
    
    $scope.nextItem = function () {
        var nextItem = $scope.portalHelpers.getNextListItem();
        $scope.showDetails(nextItem);
    }
    // INSERTS ITEM INTO SQL TABLE
   $scope.insertInput = function(){
        $scope.portalHelpers.invokeServerFunction('addLost',{
            title : $scope.lostInputTitle.value,
            details : $scope.lostInputDetails.value            
    })}
    
   
    Item = function (index) {
    	console.log("123", index);
    }
    
    // watch for changes in the loading variable
    $scope.$watch('loading.value', function () {
        // if loading
        if ($scope.loading.value) {
            // show loading screen in the first column, and don't append it to browser history
            $scope.portalHelpers.showView('loading.html', 1, false);
            // show loading animation in place of menu button
            $scope.portalHelpers.toggleLoading(true);
        } else {
            $scope.portalHelpers.showView('main.html', 1);
            $scope.portalHelpers.toggleLoading(false);
        }
    });

}])

// Factory maintains the state of the widget
.factory('lfFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
		
		var initialized = {
            value: false
        };

        // Your variable declarations
        var loading = {
            value: true
        };

    	var lostInputDetails = {
            value: null
        };
   		var lostInputTitle = {
            value: null
        };
    	var foundInput = {
            value: null
        };

        var sourcesLoaded = 0;

        var init = function ($scope) {
            if (initialized.value)
                return;
            initialized.value = true;
            // Place your init code here:
            sourceLoaded();
        }

        function sourceLoaded() {
            sourcesLoaded++;
            if (sourcesLoaded > 0)
                loading.value = false;
        }

        return {
            init: init,
            loading: loading,
            lostInputTitle: lostInputTitle,
            lostInputDetails: lostInputDetails
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