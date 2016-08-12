app.directive('ourDiv', function () {
    return {
        restrict: 'E',
        controller: 'DivController',
        templateUrl: 'js/common/directives/our-div/our-div.html'
    };
});

app.controller('DivController', function ($scope) {
    $( function() {
      $('.draggable.div-1').draggable({
        stop: function(event, obj) {
            console.log("stopped dragging div");
            let ind = $scope.$index;
            $scope.$parent.elements[ind].left = obj.position.left;
            $scope.$parent.elements[ind].top = obj.position.top;
        }
      });
      $(".resizable.div-1").resizable({
        stop: function(event, obj) {
            console.log("stopped resizing div");
            let ind = $scope.$index;
            $scope.$parent.elements[ind].width = obj.size.width;
            $scope.$parent.elements[ind].height = obj.size.height;
        }
      });
    } );
});