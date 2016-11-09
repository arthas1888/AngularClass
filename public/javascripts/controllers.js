app.controller('BooksController', BooksController);
app.controller('CustomController', CustomController);

BooksController.$inject = ['$scope'];
function BooksController($scope) {
    //$scope.book = book;
    $scope.books = books;
    $scope.msg = "Mensaje";
    $scope.fecha = 1288323623006 ;

    $scope.$watch('msg', function(newValue, oldValue) {
        console.log("entra", newValue, oldValue);
    });
}

CustomController.$inject = ['$scope'];
function CustomController($scope) {

}