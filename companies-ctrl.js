// Companies Controller



osvilApp.controller('CompaniesCtrl', ['$scope', '$location', function ($scope, $location) {
    'use strict';

	this.viewCompany = function (itemId) {
		//console.log('View item: ' + itemId);
		$location.url('/companies/' + itemId);
	};

	this.companiesList = [
		{
			"id": 11,
			"name": "Company With A Long Name",
			"logo": "/assets/images/placeholders/company.svg"
		},
		{
			"id": 12,
			"name": "Company 2",
			"logo": "/assets/images/placeholders/company.svg"
		},
		{
			"id": 13,
			"name": "Company 3",
			"logo": "/assets/images/placeholders/company.svg"
		},
		{
			"id": 14,
			"name": "Company 4",
			"logo": "/assets/images/placeholders/company.svg"
		},
		{
			"id": 15,
			"name": "Company 5",
			"logo": "/assets/images/placeholders/company.svg"
		},
		{
			"id": 16,
			"name": "Company 6",
			"logo": "/assets/images/placeholders/company.svg"
		},
		{
			"id": 17,
			"name": "Company 7",
			"logo": "/assets/images/placeholders/company.svg"
		},
		{
			"id": 18,
			"name": "Company 8",
			"logo": "/assets/images/placeholders/company.svg"
		},
		{
			"id": 19,
			"name": "Company 9",
			"logo": "/assets/images/placeholders/company.svg"
		}
	];
}]);

// Company Controller
osvilApp.controller('CompanyCtrl', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
    'use strict';


	this.isEditing = false;
	this.title = "New Company";

	// Company Object
	this.companyObject = {};

	// Company information by ID
	if ($routeParams.id) {

		this.companyId = $routeParams.id;
		this.isEditing = true;
		this.title = "Edit Company";

		this.companyObject =  {
			"status": "Some Status",
			"type": "Some Type",
			"parentCompany": "Some Company",
			"carrierScac": "Some SCAC",
			"broker": "Some Broker",
			"name": "Some Name",
			"country": "Some Country",
			"state": "Some State",
			"city": "Some City",
			"address": "Some Address",
			"zipCode": "12345",
			"phone": "123 1234567",
			"extra": "Some Extra Field"
		};+

         


	}

	this.usersList = [
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
		}
	];

	this.viewUser = function (userId) {
		// console.log(userId);
		$location.url('/companies/' + $routeParams.id + '/user/' + userId);
	};

}]);

// User Controller
osvilApp.controller('UserCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
	'use strict';

	this.isEditing = false;
	this.title = "New User";

	// User Object
	this.userObject = {};

	// User information by ID
	if ($routeParams.userId) {
		this.isEditing = true;
		this.title = "Edit User";

		this.userObject =  {
			"status": "Some Status",
			"username": "someusername",
			"password": "somepassword",
			"confirm": "somepassword",
			"firstName": "First Name",
			"lastName": "Last Name",
			"country": "Some Country",
			"state": "Some State",
			"city": "Some City",
			"address": "Some Address",
			"zipCode": "12345",
			"phone": "123 1234567",
			"email": "user@domain.com"
		};
	}

}]);

// Modal Comments Controller
osvilApp.controller('CommentCtrl', ['$uibModalInstance', 'title', function ($uibModalInstance, title) {
	this.title = title;

	this.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

	this.post = function () {
		console.log('Send comment');
	};
}]);

// Modal Upload Controller
osvilApp.controller('UploadCtrl', ['$uibModalInstance', 'title', function ($uibModalInstance, title) {
	this.title = title;

	this.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

	this.upload = function () {
		console.log('Upload file');
	};
}]);

// Modal Shipments Filter Controller
osvilApp.controller('ShipmentsFilterCtrl', ['$uibModalInstance', function ($uibModalInstance) {

	this.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

	this.apply = function () {
		console.log('Apply filters');
	};
}]);

osvilApp.controller('DatepickerPopupDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();	
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[3];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }




});


