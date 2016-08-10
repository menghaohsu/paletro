app.directive('fullstackLogo', function () {
    return {
        restrict: 'E',
        controller: 'ImgController',
        templateUrl: 'js/common/directives/fullstack-logo/fullstack-logo.html'
    };
});

app.controller('ImgController', function ($scope) {
    $( function() {
      $( ".draggable" ).draggable();
      $(".resizable").resizable({
        stop: function(event, ui) {
          //
        }
      });
    } );
});