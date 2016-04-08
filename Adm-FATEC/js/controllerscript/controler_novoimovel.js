
//cria um app no angular
angular.module("app", []);

//pega o app do angular que ja tenha sido criado
app.angular.module("app");


//cria um controller no app
app.controller("Sildebar_novoImovel_menuInterno",function($scope)){

	$scope.tab_map{

		dados: true,
	  valores: false,
	 exibicao: false, 

	}


	$scope.activate_tab = function(tab){
    for (var key in $scope.tab_map){
    		if (key === tab){
     				$scope.tab_map[key] = true;   
        }
        else{
        	$scope.tab_map[key] = false;
        }
    }
  }
});


app.controller("Nav_Menu_imobiliaria",function ($scope) {


	$scope.tab_map{

		novo_imovel: true,

	}



});




}