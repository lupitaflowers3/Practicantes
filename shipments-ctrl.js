// Shipments Controller
osvilApp.controller('ShipmentsCtrl', ['$scope', '$location', '$uibModal', function ($scope, $location, $uibModal) {
    'use strict';

	this.viewShipment = function (itemId) {
		//console.log('View item: ' + itemId);
		$location.url('/shipments/' + itemId);
	};



	this.shipmentsList = [
		{
		    "id": 23,
		    "country": "MX",
		    "date": "10/25/2016",
		    "messages": 0,
		    "status": "fulfilled",
		    "time": "06:00 PM",
		    "truck": "0Q4L0",
		    "userName": "Claire Davis",
			"needsReview": true
		}, {
		    "id": 24,
		    "country": "MX",
		    "date": "09/09/2016",
		    "messages": 89,
		    "status": "processing",
		    "time": "07:00 PM",
		    "truck": "VB1NS",
		    "userName": "Anne-Marie Frederick"
		}, {
		    "id": 25,
		    "country": "US",
		    "date": "02/07/2016",
		    "messages": 34,
		    "status": "certified",
		    "time": "07:00 PM",
		    "truck": "LTCO6",
		    "userName": "Sandra Costa"
		}, {
		    "id": 26,
		    "country": "US",
		    "date": "10/19/2016",
		    "messages": 0,
		    "status": "certified",
		    "time": "07:00 PM",
		    "truck": "PZ410",
		    "userName": "Makda Gould"
		}, {
		    "id": 27,
		    "country": "MX",
		    "date": "07/17/2016",
		    "messages": 58,
		    "status": "submitted",
		    "time": "05:23 PM",
		    "truck": "EXR79",
		    "userName": "Arjen Clarke"
		}, {
		    "id": 28,
		    "country": "MX",
		    "date": "01/15/2016",
		    "messages": 60,
		    "status": "fulfilled",
		    "time": "06:00 PM",
		    "truck": "2V82W",
		    "userName": "Nathaniel Alexander",
			"needsReview": true
		}, {
		    "id": 29,
		    "country": "US",
		    "date": "10/06/2016",
		    "messages": 29,
		    "status": "crossed",
		    "time": "06:00 PM",
		    "truck": "1YLAM",
		    "userName": "Eoin Holland",
			"needsReview": true
		}, {
		    "id": 30,
		    "country": "MX",
		    "date": "05/30/2016",
		    "messages": 0,
		    "status": "processing",
		    "time": "07:00 PM",
		    "truck": "PIOV1",
		    "userName": "Carrie Stevens"
		}, {
		    "id": 31,
		    "country": "MX",
		    "date": "03/26/2016",
		    "messages": 0,
		    "status": "fulfilled",
		    "time": "06:00 PM",
		    "truck": "IN20R",
		    "userName": "Theo Murphy"
		}, {
		    "id": 32,
		    "country": "US",
		    "date": "03/24/2016",
		    "messages": 80,
		    "status": "certified",
		    "time": "06:00 PM",
		    "truck": "RZPYU",
		    "userName": "John Adkins"
		}, {
		    "id": 33,
		    "country": "US",
		    "date": "11/14/2016",
		    "messages": 99,
		    "status": "processing",
		    "time": "06:00 PM",
		    "truck": "3VY14",
		    "userName": "Leigh Whitaker"
		}, {
		    "id": 34,
		    "country": "MX",
		    "date": "06/10/2016",
		    "messages": 92,
		    "status": "submitted",
		    "time": "05:23 PM",
		    "truck": "SWSWV",
		    "userName": "Rekha Case"
		}, {
		    "id": 35,
		    "country": "MX",
		    "date": "12/06/2015",
		    "messages": 12,
		    "status": "crossed",
		    "time": "06:00 PM",
		    "truck": "MF6BQ",
		    "userName": "Bjorn Mercer"
		}, {
		    "id": 36,
		    "country": "US",
		    "date": "06/29/2016",
		    "messages": 62,
		    "status": "fulfilled",
		    "time": "06:00 PM",
		    "truck": "U521V",
		    "userName": "Connor O'Connell"
		}, {
		    "id": 37,
		    "country": "MX",
		    "date": "02/14/2016",
		    "messages": 0,
		    "status": "crossed",
		    "time": "06:00 PM",
		    "truck": "RXQWT",
		    "userName": "Toni Flores"
		}, {
		    "id": 38,
		    "country": "MX",
		    "date": "05/02/2016",
		    "messages": 37,
		    "status": "submitted",
		    "time": "06:00 PM",
		    "truck": "0HZBZ",
		    "userName": "Zac Burch",
			"needsReview": true
		}, {
		    "id": 39,
		    "country": "US",
		    "date": "07/07/2016",
		    "messages": 22,
		    "status": "certified",
		    "time": "05:23 PM",
		    "truck": "8T1C1",
		    "userName": "Sîan Hensley"
		}, {
		    "id": 40,
		    "country": "US",
		    "date": "10/15/2016",
		    "messages": 82,
		    "status": "fulfilled",
		    "time": "06:00 PM",
		    "truck": "UASIO",
		    "userName": "Ursula Holland"
		}, {
		    "id": 41,
		    "country": "US",
		    "date": "10/19/2016",
		    "messages": 41,
		    "status": "fulfilled",
		    "time": "06:00 PM",
		    "truck": "N69XO",
		    "userName": "Omar Frederick"
		}
	];

	this.showFilters = function () {
		var commentModalInstance = $uibModal.open({
			templateUrl: '../views/shipments-filters-tmpl.html',
			controller: 'ShipmentsFilterCtrl',
			controllerAs: 'shpFiltersCtrl',
			size: 'md'
		});
	};

}]);

// Shipment Controller
osvilApp.controller('ShipmentCtrl', ['$scope', '$routeParams', '$uibModal', '$http', function ($scope, $routeParams, $uibModal, $http) {
    'use strict';

    
	this.title = "New Shipment";

	// Shipment Object
	this.shipmentObject = {basicInfo:{}};

	// Shipment information by ID
	if ($routeParams.id) {

		this.title = "Edit Shipment";

		this.shipmentObject.basicInfo = {
			arrivalDate: "10/31/2016",
			broker: "?",
		    country: "MX",
		    date: "10/25/2016",
			entry: "?",
			invoice: "HDGS8398",
		    messages: 0,
			port: "Some Port",
			scac: "?",
		    status: "fulfilled",
		    time: "06:00 PM",
		    truck: "0Q4L0",
		    userName: "Claire Davis"
		};

		this.shipmentObject.comments = [
			{
				"author": "Ronnie Oliver",
				"date": "05/06/16 01:19 PM",
				"imageURL": "/assets/images/placeholders/user.svg",
				"text": "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor."
			},
			{
				"author": "Shaggy Rogers",
				"date": "05/06/16 12:48 PM",
				"imageURL": "/assets/images/placeholders/user.svg",
				"text": "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor."
			}
		];

		this.shipmentObject.files = [
			{
				filename: "Invoice.pdf",
				iconURL: "/assets/images/placeholders/document.svg",
				date: "05/06/16 01:19 PM",
				uploader: "Ronald Weasley"
			},
			{
				filename: "Receipt 33.pdf",
				iconURL: "/assets/images/placeholders/document.svg",
				date: "05/06/16 01:19 PM",
				uploader: "Severus Snape"
			},
			{
				filename: "Resume-24.pdf",
				iconURL: "/assets/images/placeholders/document.svg",
				date: "05/06/16 01:19 PM",
				uploader: "Albus Dumbledore"
			}
		];


	}

	// Open comment modal window
	this.openCommentModal = function () {
		var commentModalInstance = $uibModal.open({
			templateUrl: '../views/comment-form-tmpl.html',
			controller: 'CommentCtrl',
			controllerAs: 'cmCtrl',
			size: 'sm',
			resolve: {
				title: function () {
					return 'Comment';
				}
			}
		});
	};

	// Open file upload modal window
	this.openUploadModal = function () {
		var commentModalInstance = $uibModal.open({
			templateUrl: '../views/upload-form-tmpl.html',
			controller: 'UploadCtrl',
			controllerAs: 'upCtrl',
			size: 'sm',
			resolve: {
				title: function () {
					return 'Upload File';
				}
			}
		});
	};
///crear usuario
    this.create = function() {
    	console.log("loquesea");
    	console.log(this.shipmentObject);
    	if ($routeParams.id) {
    		$http.put("/api/v1/shipment",this.shipmentObject.basicInfo)
		}
		else{
			$http.post("/api/v1/shipment",this.shipmentObject.basicInfo)
    	.then(function(response)
    	{
    	$scope.shipment.shipmentObject.basicInfo.date = response.data;
    	});
		}

   		
     };


}]);

// Create user



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
//Controller de 


osvilApp.controller('TypeaheadCtrl', function($scope, $http) {

  var _selected;

  $scope.selected = undefined;
  $scope.states = ['Fullfilled','Processing','Certified','Crossed','Submitted'];
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function(val) {
    return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };

  $scope.ngModelOptionsSelected = function(value) {
    if (arguments.length) {
      _selected = value;
    } else {
      return _selected;
    }
  };

  $scope.modelOptions = {
    debounce: {
      default: 500,
      blur: 250
    },
    getterSetter: true
  };

  $scope.statesWithFlags = [{'name':'Fullfilled','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Processing','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Certified','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Crossed','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Submitted','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'}];
});


