app.directive('fullstackLogo', function () {
    return {
        restrict: 'E',
        controller: 'LogoController',
        templateUrl: 'js/common/directives/fullstack-logo/fullstack-logo.html'
    };
});

app.controller('LogoController', function ($scope) {
    $( function() {
      $( ".draggable" ).draggable({
        stop: function(event, obj) {      
          $scope.$parent.elements[$scope.$index].left = obj.position.left;
          $scope.$parent.elements[$scope.$index].top = obj.position.top;
        }
      });
      $(".logo").resizable({
        stop: function(event, obj) {
          $scope.$parent.elements[$scope.$index].width = obj.size.width;
          $scope.$parent.elements[$scope.$index].height = obj.size.height;
        }
      });
    } );
});