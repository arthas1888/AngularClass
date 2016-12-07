app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: "views/songs.html",
            controller: "SongController"
        })
        .when('/create',
        {
            templateUrl: "views/song-form.html",
            controller: "SongCreateController"
        })
        .otherwise("/");

}]);
