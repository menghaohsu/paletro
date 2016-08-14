app.directive('textBox', function () {
    return {
        restrict: 'E',
        controller: 'BoxController',
        templateUrl: 'js/components/text-box/text.html'
    };
});

app.controller('BoxController', function ($scope) {
    $( function() {
      let ind = $scope.$index;
      $(".draggable.textbox").draggable({
      	stop: function (event, obj) {
          console.log('stopped dragging textbox', ind);
          $scope.$parent.elements[ind].left = obj.position.left;
          $scope.$parent.elements[ind].top = obj.position.top;
        }
      });
      $(".resizable.textbox").resizable({
      	stop: function (event, obj) {
          console.log('stopped resizing textbox', ind);
          $scope.$parent.elements[ind].width = obj.size.width;
          $scope.$parent.elements[ind].height = obj.size.height;
        }
      });
    } );
});