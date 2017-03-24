osvilApp.controller('MenuCtrl', ['$scope','$location', '$log', function ($scope, $location, $log) {
    'use strict';

    var self = this;
    this.active = false;

    this.toggle = function () {
        this.active = !this.active;
    };

    $scope.$watch(function () {
        return location.hash
    }, function (value) {
		self.currentSection = '';
		var path = $location.path();
		//console.log(path);

		if (path.match(/^\/shipments/)) {
			self.currentSection = 'shipments';
		}

		if (path.match(/^\/companies/)) {
			self.currentSection = 'companies';
		}

		if (path.match(/^\/users/)) {
			self.currentSection = 'users';
		}

		if (path.match(/^\/reports/)) {
			self.currentSection = 'reports';
		}

		if (path.match(/^\/metrics/)) {
			self.currentSection = 'metrics';
		}

		if (path.match(/^\/account/)) {
			self.currentSection = 'account';
		}

        self.active = false;
    });

}]);

osvilApp.controller('SubmenuCtrl', ['$scope','$location', '$log', '$http', function ($scope, $location, $log, $http) {
    'use strict';

    var self = this;
    this.mobileSearchActive = false;

	this.toggleSearch = function () {
		self.mobileSearchActive = !self.mobileSearchActive;

		// if (self.mobileSearchActive) {
		// 	document.querySelector("#search-tf").focus();
		// }
		// else {
		// 	document.querySelector("#search-tf").blur();
		// }
	}

	this.goBack = function () {
		history.back();
	};

	this.delete = function (){
	$http.delete("/api/v1/shipment")
}


}]);
