app.controller('BooksController', BooksController);
app.controller('CustomController', CustomController);
app.controller('PanelController', PanelController);
app.controller('ReviewController', ReviewController);
app.controller('RegisterController', RegisterController);
app.controller('PlaylistController', PlaylistController);
app.controller('PlaylistUpdateController', PlaylistUpdateController);
app.controller('PromesaController', PromesaController);
app.controller('ManyPromesaController', ManyPromesaController);
app.controller('ScrollController', ScrollController);
app.controller('Cache1Controller', Cache1Controller);
app.controller('Cache2Controller', Cache2Controller);
app.controller('JokeController', JokeController);
app.controller('SongController', SongController);
app.controller('SongCreateController', SongCreateController);


BooksController.$inject = ['$scope', '$http'];
function BooksController($scope, $http) {
    //$scope.book = book;
    //$scope.books = books;
    $scope.msg = "Mensaje";
    $scope.fecha = 1288323623006;

    $scope.init = function () {
        $scope.tab = 1;
    };

    $scope.$watch('msg', function (newValue, oldValue) {
        console.log("entra", newValue, oldValue);
    });

    $scope.loadBooks = function () {
        /*$http({
            method: 'GET',
            url: 'json/books.json'
        }).success(function (data, status) {
            console.log(status, data);
            $scope.books = data;
        }).error(function (data, status) {
            console.log(status, data);
        });*/

        $http.get('json/books.json')
            .success(function (data, status) {
                console.log(status, data);
                $scope.books = data;
            }).error(function (data, status) {
                console.log(status, data);
            });
    };

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
    console.log("review: ", $scope.model);

    $scope.submit = function () {
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
        if (newValue === $scope.model.password && newValue.length > 0 && $scope.model.password.length > 0) {
            $scope.flag = true;
        } else {
            $scope.flag = false;
        }
    });
    $scope.submit = function () {
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
    $scope.borrar = function (id) {
        Playlist.borrar(id);
    };
    $scope.model = {};
    $scope.add = function () {
        var s = $scope.model.cancion;
        if (s !== "") {
            PlaylistService.agregar(s);
            s = null;
            $scope.model.cancion = "";
        }
    };

}

PromesaController.$inject = ['$scope', '$q', '$timeout'];
function PromesaController($scope, $q, $timeout) {



    $scope.server = "verificando...";
    $scope.http = "verificando...";

    var checkServer = function () {
        return $timeout(function (param1) {
            return param1;
        }, 2000, true, "Online");
    };

    /*var checkServer = function () {
        var def = $q.defer();
        setTimeout(function () {
            def.resolve('Online');
            def.notify('Online');
            //console.log("Online");
            $scope.server = "Online";
        }, 2000);
        return def.promise;
    };*/

    var checkHttp = function () {
        var def = $q.defer();
        setTimeout(function () {
            def.notify("en");
            if (Math.floor(Math.random() * 100) > 90) {
                def.notify('Las conexiones seguras están habilitadas');
                def.resolve('Online');
            } else {
                def.notify('Las conexiones seguras están deshabilitadas');
                def.reject('El servicio no esta disponible');
            }
        }, 3000);
        return def.promise;
    };

    checkServer().then(function (result) {
        $scope.server = result;
    });

    checkHttp().then(
        function (result) {
            $scope.http = result;
        }, function (error) {
            $scope.http = error;
        }, function (no) {
            console.log("notificacion", no);
        }
    );

}

ManyPromesaController.$inject = ['$scope', '$q'];
function ManyPromesaController($scope, $q) {

    var promesa1 = $q.defer();
    var promesa2 = $q.defer();
    var promesa3 = $q.defer();

    setTimeout(function () {
        promesa1.resolve('Promesa #1 resuelta');
    }, Math.random() * 1000);
    setTimeout(function () {
        promesa2.resolve('Promesa #2 resuelta');
    }, Math.random() * 1000);
    setTimeout(function () {
        promesa3.resolve('Promesa #3 resuelta');
    }, Math.random() * 1000);

    promesa1.promise.then(mostrar);
    promesa2.promise.then(mostrar);
    promesa3.promise.then(mostrar);

    function mostrar(info) {
        console.log(info);
    }

    var todas = $q.all([promesa1.promise, promesa2.promise, promesa3.promise]);
    todas.then(mostrar);

    /*var checkHttp = function (comprobar) {
        var def = $q.defer();
        setTimeout(function () {
            if (comprobar) {
                def.resolve('Online');
            } else {
                def.reject('El servicio no esta disponible');
            }
        }, 3000);
        return def.promise;
    };*/

    var checkHttp = function (comprobar) {
        return $q(function (reject, resolve) {
            setTimeout(function () {
                if (comprobar) {
                    resolve('Online');
                } else {
                    reject('El servicio no esta disponible');
                }
            }, 3000);
        });
    };


    $scope.accion = function (comprobar) {
        checkHttp(comprobar).then(function (data) {
            $scope.test = data;
        }, function (error) {
            $scope.test = error;
        });
    };

}


ScrollController.$inject = ['$scope', '$anchorScroll', '$location'];
function ScrollController($scope, $anchorScroll, $location) {
    $scope.ir = function (id) {
        $location.hash("container" + id);
        $anchorScroll();
    };
}

Cache1Controller.$inject = ['$scope', '$cacheFactory', '$log'];
function Cache1Controller($scope, $cacheFactory, $log) {
    var msg = $cacheFactory("micache");
    var vm = this;
    this.guardar = function () {
        $log.info(vm.texto);
        msg.put('mensaje', vm.texto);
        $log.error($cacheFactory.info());
    };
}

Cache2Controller.$inject = ['$scope', '$cacheFactory'];
function Cache2Controller($scope, $cacheFactory) {
    var msg = $cacheFactory.get("micache");
    this.capturar = function () {
        this.msg = msg.get('mensaje');
    };
}

JokeController.$inject = ['$scope', '$http'];
function JokeController($scope, $http) {

    var url = 'https://api.chucknorris.io/jokes/random';
    $scope.joke = null;

    $scope.updateJoke = function () {
        $http.get(url)
            .success(function (data, status) {
                console.log(status, data);
                $scope.joke = data;
            }).error(function (data, status) {
                console.log(status, data);
            });
    };

    $scope.loadJokes = function () {
        $http.get("http://api.icndb.com/jokes/random/20")
            .success(function (data, status) {
                console.log(status, data);
                $scope.jokes = data.value;
            }).error(function (data, status) {
                console.log(status, data);
            });
    };
}

SongController.$inject = ['$scope', '$location', 'SongFactory'];
function SongController($scope, $location, SongFactory) {

    $scope.songs = [];

    $scope.load = function () {
        SongFactory.listar().then(function (response) {
            console.log(response["data"]);
            $scope.songs = response["data"];
        });
    };

    $scope.delete = function (_id) {
        var r = confirm("Desea borrar esta canción?");
        if (r === true) {
            SongFactory.borrar(_id).then(function(response){
                $scope.load();
            });
        } 
    };

    $scope.create = function(){
        $location.path("/create");
    };

}

SongCreateController.$inject = ['$scope', '$location', 'SongFactory'];
function SongCreateController($scope, $location, SongFactory) {
    $scope.model = {};
    $scope.submit = function(){
         SongFactory.create($scope.model).then(function(response){
            $scope.back();
        });
    };

    $scope.back = function(){
        $location.path("/");
    };
}
