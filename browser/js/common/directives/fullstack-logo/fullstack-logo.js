app.directive('fullstackLogo', function () {
    return {
        restrict: 'E',
        controller: 'LogoController',
        templateUrl: 'js/common/directives/fullstack-logo/fullstack-logo.html'
    };
});

app.controller('LogoController', function ($scope) {
    $( function() {
      $( ".draggable.logo" ).draggable({
        stop: function(event, obj) {
          console.log('stopped dragging logo');
          let ind = $scope.$index;
          $scope.$parent.elements[ind].left = obj.position.left;
          $scope.$parent.elements[ind].top = obj.position.top;
        }
      });
      $(".logo").resizable({
        stop: function(event, obj) {
          console.log('stopped resizing logo');
          let ind = $scope.$index;
          $scope.$parent.elements[ind].width = obj.size.width;
          $scope.$parent.elements[ind].height = obj.size.height;
        }
      });
    } );
});