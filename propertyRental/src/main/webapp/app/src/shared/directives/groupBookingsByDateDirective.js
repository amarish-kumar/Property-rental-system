var propertyDirective = angular.module("GroupBookingsByDateDirective", []);
propertyDirective.directive("groupBookingsByDate",["$filter",function($filter){
	return {
		restrict:"E",
		scope:{
			bookings:"=",
			currentBooking:"=",
			startFrom:"=",
			limitTo:"=",
			orderBy:"@"
		},
		templateUrl:"shared/directives/partials/groupBookingsByDate.html",
		link : function(scope){
			scope.bookings = $filter('startFrom')(scope.bookings,scope.startFrom);
			scope.bookings = $filter('limitTo')(scope.bookings,scope.limitTo);
			scope.bookings = $filter('orderBy')(scope.bookings,scope.orderBy);
			for(var i=0;i<scope.bookings.length;i++){
				if(scope.bookings[i].bookedDate == scope.currentBooking.bookedDate){
					var showDate = true;
					var currentMoment = moment(scope.currentBooking.bookedDate);
					for(var j=0;j<i;j++){
						var compareMoment = moment(scope.bookings[j].bookedDate);
						if(currentMoment.isSame(compareMoment,'month')){
							showDate = false;
							break;
						}
					}
					if(showDate){
						scope.dateToShow = scope.currentBooking.bookedDate;
						break;
					}
				}
			}
		}
	};
}]);