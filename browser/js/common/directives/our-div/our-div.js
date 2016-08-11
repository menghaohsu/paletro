app.directive('ourDiv', function () {
    return {
        restrict: 'E',
        controller: 'DivController',
        templateUrl: 'js/common/directives/our-div/our-div.html'
    };
});

app.controller('DivController', function ($scope) {
    $( function() {
      $('.draggable').draggable();
      $('.resizable').resizable();
    } );
});