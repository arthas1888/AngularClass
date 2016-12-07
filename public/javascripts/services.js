app.factory("PlaylistFactory", [function () {
    var playlist = [
        "If I Ever Lose My Faith In You",
        "Love Is Stronger Than Justice",
        "Fields Of Gold",
        "Heavy Cloud No Rain",
        "She's Too Good For Me",
        "Seven Days",
        "Saint Augustine In Hell",
        "It's Probably Me",
        "Shape Of My Heart",
        "Something The Boy Said",
        "Epilogue (Nothing 'Bout Me)",
    ];
    var listar = function () {
        return playlist;
    };
    var borrar = function (id) {
        playlist.splice(id, 1);
    };
    return {
        listar: listar,
        borrar: borrar
    };
}]);


app.service("PlaylistService", [function () {
    var playlist = [
        "If I Ever Lose My Faith In You",
        "Love Is Stronger Than Justice",
        "Fields Of Gold",
        "Heavy Cloud No Rain",
        "She's Too Good For Me",
        "Seven Days",
        "Saint Augustine In Hell",
        "It's Probably Me",
        "Shape Of My Heart",
        "Something The Boy Said",
        "Epilogue (Nothing 'Bout Me)",
    ];
    this.listar = function () {
        return playlist;
    };
    this.borrar = function (id) {
        playlist.splice(id, 1);
    };

    this.agregar = function (cancion) {
        if (playlist.indexOf(cancion) == -1)
            playlist.push(cancion);
        else { console.log("se encuentra"); }
    };
}]);

app.provider("Playlist", [function () {
    var playlist = [
        "If I Ever Lose My Faith In You",
        "Love Is Stronger Than Justice",
        "Fields Of Gold",
        "Heavy Cloud No Rain",
        "She's Too Good For Me"
    ];
    var listar = function () {
        return playlist;
    };
    var borrar = function (id) {
        playlist.splice(id, 1);
    };
    var concatenar = function (data) {
        console.log("entra aca");
        playlist = playlist.concat(data);
    };
    return {
        concatenar: concatenar,
        $get: function () {
            return {
                listar: listar,
                borrar: borrar
            };
        }
    };

}]);


app.factory("SongFactory", ['$http', '$log',
    function ($http, $log) {
        var url = "https://vesta.sersoluciones.com:9050/song/";

        var listar = function () {
            return $http.get(url)
                .success(function (data, status) {
                    $log.debug(status, data);
                }).error(function (data, status) {
                    $log.error(status, data);
                });
        };

        var borrar = function (_id) {
            return $http.delete(url + _id + "/")
                .success(function (data, status) {
                    $log.debug(status, data);
                }).error(function (data, status) {
                    $log.error(status, data);
                });
        };

        var create = function (model) {
            return $http.post(url, model)
                .success(function (data, status) {
                    $log.debug(status, data);
                }).error(function (data, status) {
                    $log.error(status, data);
                });
        };

        return {
            listar: listar,
            borrar: borrar,
            create: create
        };
    }]);