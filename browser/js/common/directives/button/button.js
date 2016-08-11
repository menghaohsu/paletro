app.directive('newButton', function () {
    return {
        restrict: 'E',
        controller: 'BtnController',
        templateUrl: 'js/common/directives/button/button.html'
    };
});

app.controller('BtnController', function ($scope) {
    $( function() {
      $('.draggable').draggable({cancel: false});
      $('.resizable').resizable({cancel:false});
    } );
});