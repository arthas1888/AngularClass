var app = angular.module('AngularApp', ['ngMessages']);

app.filter('customFilter', function(){

    var reemplazarLetras = function(datosOriginales, arg){
        return datosOriginales.replace(RegExp("o", "g"), arg);
    };
    return reemplazarLetras;
    
});
