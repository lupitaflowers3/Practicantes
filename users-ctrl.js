// Users Controller
osvilApp.controller('UsersCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
    'use strict';

	var self = this;

	this.viewUser = function (itemId) {
    
    var app=angular.module("app",[]);






   


		// Current User Data
		self.userData = {
			"picture": "/assets/images/placeholders/user.svg",
			"status": "Some Status",
			"firstName": "Albus",
			"lastName": "Dumbledore",
			"country": "Some Country",
			"state": "Some State",
			"city": "Some City",
			"address": "Some Address",
			"zipCode": "12345",
			"phone": "123 1234567",
			"email": "user@domain.com",
			"permissions": "Create Shipments, Upload Documents, Download Documents, Add Comments."
		};

		var commentModalInstance = $uibModal.open({
			templateUrl: '../views/user-view-tmpl.html',
			controller: 'ViewUserCtrl',
			controllerAs: 'uvCtrl',
			size: 'md',
			resolve: {
				title: function () {
					return 'User Details';
				},
				user: function () {
					return self.userData;
				}
			}
		});
	};

	this.enviar=function() {
 alert("hola");
 console.log("any");
};

	this.usersList = [
		{
			"id": 11,
			"name": "User Name 1",
			"picture": "/assets/images/placeholders/user.svg"
		},
		{
			"id": 12,
			"name": "User Name 2",
			"picture": "/assets/images/placeholders/user.svg"
		},
		{
			"id": 13,
			"name": "User Name 3",
			"picture": "/assets/images/placeholders/user.svg"
		},
		{
			"id": 14,
			"name": "User Name 4",
			"picture": "/assets/images/placeholders/user.svg"
		},
		{
			"id": 15,
			"name": "User Name 5",
			"picture": "/assets/images/placeholders/user.svg"
		},
		{
			"id": 16,
			"name": "User Name 6",
			"picture": "/assets/images/placeholders/user.svg"
		},
		{
			"id": 17,
			"name": "User Name 7",
			"picture": "/assets/images/placeholders/user.svg"
		},
		{
			"id": 18,
			"name": "User Name 8",
			"picture": "/assets/images/placeholders/user.svg"
		},
		{
			"id": 19,
			"name": "User Name 9",
			"picture": "/assets/images/placeholders/user.svg"
		}
		
	];
}]);

// Modal View User Controller
osvilApp.controller('ViewUserCtrl', ['$uibModalInstance', 'title', 'user', function ($uibModalInstance, title, user) {
	this.title = title;
	this.user = user;

	this.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}]);

// Invite User Controller
osvilApp.controller('InviteCtrl', ['$scope', function ($scope) {

	this.userObject = {};

}]);