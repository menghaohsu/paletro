app.directive('fullstackLogo', function () {
    return {
        restrict: 'E',
        controller: 'LogoController',
        templateUrl: 'js/common/directives/fullstack-logo/fullstack-logo.html'
    };
});

app.controller('LogoController', function ($scope) {
    $( function() {
      $( ".draggable" ).draggable();
      $(".logo").resizable({
        stop: function(event, ui) {
          //
        }
      });
    } );
});