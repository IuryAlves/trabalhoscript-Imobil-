
//cria um app no angular
angular.module("app", []);

//pega o app do angular que ja tenha sido criado
var app = angular.module("app");


//cria um controller no app
app.controller("sidebarController", function($scope){
	$scope.selected_item = '';
	$scope.setItem = function(item){
		$scope.selected_item = item;
	};
});
