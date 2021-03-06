var propertyDirective = angular.module("DatepickerDirective", []);
/**
 * Datepicker directive with possibility of picking multiple dates.
 */
propertyDirective.directive("myDatepicker",function(){
	return {
		restrict:"E",
		scope:{
			unavailableDates:"=",
			bookedDates:"=",
			updateUnDates:"&"
		},
		templateUrl:"shared/directives/partials/datepicker.html",
		link : function(scope){
			scope.$watchGroup(['unavailableDates','bookedDates'],function(newValues){
				var bookedDates = [];
				for (var i = 0; i < newValues[1].length; i++) {
					var start = moment(newValues[1][i].startDate);
					var end = moment(newValues[1][i].endDate);
					while(start.isBefore(end,'day') || start.isSame(end,'day')){
						bookedDates.push(start.format("DD/MM/YYYY"));
						start.add(1,'day');
					}
				}
				var unavailableDates = [];
				for(var i=0;i<newValues[0].length;i++){
					unavailableDates.push(new Date(newValues[0][i].when));
				}
				$('.datepicker').datepicker({
					orientation:"top auto",
				    startDate: '0d',
				    datesDisabled:bookedDates
				})
				.on("changeDate",function(e){
					scope.updateUnDates({dates:e.dates});
					$("#datepicker_data_input").val(
						$(".datepicker").datepicker("getFormattedDate")	
					);
				});
				$('.datepicker').datepicker("setDates",unavailableDates);
			});
		}
	};
});