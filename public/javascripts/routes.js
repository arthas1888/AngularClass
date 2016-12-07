app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/',
        {
            templateUrl: "views/songs.html",
            controller: "SongController"
        })
    .otherwise("/");

}]);
