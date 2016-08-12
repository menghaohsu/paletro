app.directive('textBox', function () {
    return {
        restrict: 'E',
        controller: 'BoxController',
        templateUrl: 'js/common/directives/text-box/text.html'
    };
});

app.controller('BoxController', function ($scope) {
    $( function() {
      $(".draggable.textbox").draggable({
      	stop: function (event, obj) {
          console.log('stopped dragging textbox', $scope.$index);
          $scope.$parent.elements[$scope.$index].left = obj.position.left;
          $scope.$parent.elements[$scope.$index].top = obj.position.top;
        }
      });
      $(".resizable.textbox").resizable({
      	stop: function (event, obj) {
          console.log('stopped resizing textbox', $scope.$index);
          console.log($scope.$parent);
          $scope.$parent.elements[$scope.$index].width = obj.size.width;
          $scope.$parent.elements[$scope.$index].height = obj.size.height;
        }
      });
    } );
});