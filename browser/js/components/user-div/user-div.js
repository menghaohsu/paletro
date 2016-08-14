app.directive('userDiv', function () {
    return {
        restrict: 'E',
        controller: 'DivController',
        templateUrl: 'js/components/user-div/user-div.html'
    };
});

app.controller('DivController', function ($scope) {
    $( function() {
      let ind = $scope.$index;
      $('.draggable.div-1').draggable({
        stop: function(event, obj) {
          console.log("stopped dragging div", ind);
          $scope.$parent.elements[ind].left = obj.position.left;
          $scope.$parent.elements[ind].top = obj.position.top;
        }
      });
      $(".resizable.div-1").resizable({
        stop: function(event, obj) {
          console.log("stopped resizing div", ind);
          $scope.$parent.elements[ind].width = obj.size.width;
          $scope.$parent.elements[ind].height = obj.size.height;
        }
      });
    } );
});