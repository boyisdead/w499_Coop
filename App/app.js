
var app = angular.module('w499', [
	//core module
	'ui.router',
	//my app
	'w499.home',
	'w499.signin',
	//add-on
    'ngFx',
    'mgcrea.ngStrap'
    // 'ngMessages'
]);

var homeModule = angular.module('w499.home',[]);
var signinModule = angular.module('w499.signin',[]);

app.config(function($stateProvider, $urlRouterProvider) {

	//unmatch url will return to this
	$urlRouterProvider.otherwise("home");

	$stateProvider
	.state('home',{
		url:"/home",
		templateUrl:"home/home.html",
		controller:"homeCtrl"
	})
	.state('signin',{
		url:"/signin",
		templateUrl:"signin/signin.html",
		controller:"signinCtrl"
	});

});

app.controller('mainCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

