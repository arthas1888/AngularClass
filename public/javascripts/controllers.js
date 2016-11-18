app.controller('BooksController', BooksController);
app.controller('CustomController', CustomController);
app.controller('PanelController', PanelController);
app.controller('ReviewController', ReviewController);

BooksController.$inject = ['$scope'];
function BooksController($scope) {
    //$scope.book = book;
    $scope.books = books;
    $scope.msg = "Mensaje";
    $scope.fecha = 1288323623006;

    $scope.init = function () {
        $scope.tab = 1;
    };

    $scope.$watch('msg', function (newValue, oldValue) {
        console.log("entra", newValue, oldValue);
    });
}

CustomController.$inject = ['$scope'];
function CustomController($scope) {

}

PanelController.$inject = ['$scope'];
function PanelController($scope) {
    $scope.tab = 1;
    $scope.selecTab = function (tab) {
        $scope.tab = tab;
    };
    $scope.isSelected = function (tab) {
        return $scope.tab === tab;
    };

}

ReviewController.$inject = ['$scope'];
function ReviewController($scope) {
    $scope.model = {
        estrellas: "",
        cuerpo: "",
        autor: ""
    };
    console.log("review: ", $scope.model );

    $scope.submit = function(){
        console.log("entra aca", $scope.model);
        $scope.book.comentarios.push($scope.model);
        $scope.model = {};
    };
}