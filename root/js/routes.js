define([
		"angular", 
		"app", 
		"text!partials/basic.html",
		"controllers/BasicController",
		"angularRoute"
		], function(angular, app, basicTemplate ){

	return app.config(['$routeProvider', function($routeProvider){

		$routeProvider.when("/", {
			controller : "BasicController",
			template : basicTemplate
		});
	}]);
});