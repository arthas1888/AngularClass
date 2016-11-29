app.controller('BooksController', BooksController);
app.controller('CustomController', CustomController);
app.controller('PanelController', PanelController);
app.controller('ReviewController', ReviewController);
app.controller('RegisterController', RegisterController);
app.controller('PlaylistController', PlaylistController);
app.controller('PlaylistUpdateController', PlaylistUpdateController);

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

RegisterController.$inject = ['$scope', '$window', '$location'];
function RegisterController($scope, $window, $location) {
    $scope.model = {};
    $scope.model.password = "";
    $scope.flag = false;

    $scope.$watch('model.confirm_password', function (newValue, oldValue) {        
        if (newValue === $scope.model.password && newValue.length > 0 && $scope.model.password.length > 0){
            $scope.flag = true;            
        }else{
            $scope.flag = false;
        }
    });
    $scope.submit = function(){
        console.log("entra");
        $window.open("/", "_self");
        //$location.path('/someNewPath')
        //$location.href = "/";
    };
}

PlaylistController.$inject = ['$scope', 'PlaylistFactory', 'PlaylistService', 'Playlist'];
function PlaylistController($scope, PlaylistFactory, PlaylistService, Playlist) {
    $scope.playlist = Playlist.listar();
}

PlaylistUpdateController.$inject = ['$scope', 'PlaylistFactory', 'PlaylistService', 'Playlist'];
function PlaylistUpdateController($scope, PlaylistFactory, PlaylistService, Playlist) {
    $scope.playlist = Playlist.listar();
    $scope.borrar = function(id){
        Playlist.borrar(id);
    };
    $scope.model = {};
    $scope.add = function(){
        var s = $scope.model.cancion;
        if (s !== ""){
            PlaylistService.agregar(s);
            s = null;
            $scope.model.cancion = "";
        }
    };
    
}