var propertyService = angular.module("PropertyServiceModule", []);
propertyService.factory("PropertyService", [ "$resource", "API_URL", function($resource,API_URL) {
	//earlier was: {id : "@id"}
	var propertyService = {
		property: $resource(API_URL+'properties/:id', {}, {
				find:{
					method:"POST",
					isArray:true,//API_URL+"apartments/search/:country/:city/:admArea/:checkIn/:checkOut"
					url:API_URL+"properties/search"/*,
					params:{
						country:"@country",
						city:"@locality",
						admArea:"@administrative_area_level_1",
						checkIn:"@checkIn",
						checkOut:"@checkOut"
					}*/
				},
				findMyProperties:{
					method:"GET",
					isArray:true,
					url:API_URL+"properties/myProperties/:ownerId"
				},
				update:{method:"PUT"}
		}),
		propertyTypes: $resource(API_URL+'properties/propertyTypes', {}),
		propertyFacilities : $resource(API_URL+'properties/propertyFacilities',{}),
		unavailableDates : $resource(API_URL+'properties/unavailableDates/:id', {}),
		onlyBookedDays : $resource(API_URL+"properties/onlyBookedDates/:id"),
		onlyUnavailableDays : $resource(API_URL+"properties/onlyUnavailableDates/:id",{},{
			update:{method:"PUT"}
		}),
		reviews : $resource(API_URL+"properties/reviews/:id",{},{
			canSendReviews:{
				method:"GET",
				url:API_URL+"bookings/canSendReviews/:propertyId"
			}
		})
	};
	return propertyService;
}]);