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

    console.log("aqui");
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


