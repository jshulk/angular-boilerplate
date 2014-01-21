define([
		"angular", 
		"app"
		], 
		function(angular, app){

	return app.controller("BasicController", ["$scope", function($scope){
		$scope.model = {message : "Hello world"};
	}]);
});