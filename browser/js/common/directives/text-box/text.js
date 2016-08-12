app.directive('textBox', function () {
    return {
        restrict: 'E',
        controller: 'BoxController',
        templateUrl: 'js/common/directives/text-box/text.html'
    };
});

app.controller('BoxController', function ($scope) {
    $( function() {
      $(".draggable").draggable({
      	stop: function(event, obj) {      
            $scope.$parent.elements[$scope.$index].left = obj.position.left;
            $scope.$parent.elements[$scope.$index].top = obj.position.top;
        }
      });
      $(".resizable").resizable({
      	stop: function(event, obj) {
            $scope.$parent.elements[$scope.$index].width = obj.size.width;
            $scope.$parent.elements[$scope.$index].height = obj.size.height;
        }
      });
    } );
});