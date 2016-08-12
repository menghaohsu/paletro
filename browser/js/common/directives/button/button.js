app.directive('newButton', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: 'BtnController',
        templateUrl: 'js/common/directives/button/button.html'
    };
});

app.controller('BtnController', function ($scope) {
    $( function() {
      $('.draggable').draggable({
        cancel:false,
        stop: function(event, obj) {      
            $scope.$parent.elements[$scope.$index].left = obj.position.left;
            $scope.$parent.elements[$scope.$index].top = obj.position.top;
        }
    });
      $('.resizable').resizable({
            cancel:false,
            stop: function(event, obj) {
                $scope.$parent.elements[$scope.$index].width = obj.size.width;
                $scope.$parent.elements[$scope.$index].height = obj.size.height;
            }
        });
    });
});