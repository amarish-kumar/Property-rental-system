var httpInterceptor = angular.module('httpInterceptorModule',[]);
//to intercept both 401 and 403 errors
httpInterceptor.factory('httpErrorResponseInterceptor', [ '$q', '$location', function($q, $location) {
	return {
		response : function(responseData) {
			return responseData;
		},
		responseError : function error(response) {
			switch (response.status) {
			case 401:
				localStorage.removeItem("currentUsername");
				localStorage.removeItem("authority");
				$location.path('/login');
				break;
			case 403:
				$location.path('/accessDenied');
				break;
			default:
				//$location.path('/error');
				console.log("ERROR");
			}
			return $q.reject(response);
		}
	};
}]);