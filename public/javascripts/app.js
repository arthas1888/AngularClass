var app = angular.module('AngularApp', ['ngMessages', 'ngRoute']);

app.run(['$anchorScroll',function ($anchorScroll) {
    $anchorScroll.yOffset = 64;
}]);

app.config(['PlaylistProvider', function (PlaylistProvider) {

    var playlist2 = [
        "Seven Days",
        "Saint Augustine In Hell",
        "It's Probably Me",
        "Shape Of My Heart",
        "Something The Boy Said",
        "Epilogue (Nothing 'Bout Me)",
    ];
    PlaylistProvider.concatenar(playlist2);

}]).config(['$logProvider', '$compileProvider', function ($logProvider, $compileProvider) {
        //$logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
    }]);

app.filter('customFilter', function () {

    var reemplazarLetras = function (datosOriginales, arg) {
        return datosOriginales.replace(RegExp("o", "g"), arg);
    };
    return reemplazarLetras;

});

app.directive("bookTitle", function () {
    return {
        restrict: 'A',
        templateUrl: 'views/book-title.html'
    };
});

app.directive("bookPanel", function () {
    return {
        restrict: 'E',
        templateUrl: 'views/book-panel.html'
    };
});