app.controller('BooksController', BooksController);

BooksController.$inject = ['$scope'];
function BooksController($scope) {
    //$scope.book = book;
    $scope.books = books;
}