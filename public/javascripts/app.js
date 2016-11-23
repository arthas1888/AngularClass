var app = angular.module('AngularApp', ['ngMessages']);

app.filter('customFilter', function(){

    var reemplazarLetras = function(datosOriginales, arg){
        return datosOriginales.replace(RegExp("o", "g"), arg);
    };
    return reemplazarLetras;
    
});

app.directive("bookTitle", function(){
    return{
        restrict: 'A',
        templateUrl: 'views/book-title.html'
    };
});

app.directive("bookPanel", function(){
    return{
        restrict: 'E',
        templateUrl: 'views/book-panel.html'
    };
});