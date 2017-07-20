var app = angular.module('myApp', ['ngMaterial']);

app.controller('myCtrl',function($scope, $http) {
	$scope.name = "Akhil";
	$scope.is_loading = true;
	$http.get("https://api.github.com/users/akhilnareshkumar/repos")
	.then(function(response) {
		$scope.fetched_repos = response.data;
		console.log($scope.fetched_repos);
		$scope.is_loading = false;
	});
});

app.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
	.primaryPalette('deep-purple')
	.accentPalette('cyan');
});