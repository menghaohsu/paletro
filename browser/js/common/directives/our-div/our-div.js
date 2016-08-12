app.directive('ourDiv', function () {
    return {
        restrict: 'E',
        controller: 'DivController',
        templateUrl: 'js/common/directives/our-div/our-div.html'
    };
});

app.controller('DivController', function ($scope) {
    $( function() {
      $('.draggable').draggable({
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