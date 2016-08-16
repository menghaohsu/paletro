app.directive('userDiv', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/components/user-div/user-div.html',
        link: function (scope, elem, attr) {
          let ind = scope.$index;
          scope.initialWidth = scope.$parent.elements[ind].width;
          scope.initialHeight = scope.$parent.elements[ind].height;
          scope.initialTop = scope.$parent.elements[ind].top;
          scope.initialLeft = scope.$parent.elements[ind].left;

          elem.draggable({
            stop: function(event, obj) {
              console.log("stopped dragging div", ind);
              scope.$parent.elements[ind].top = scope.initialTop + obj.position.top;
              scope.$parent.elements[ind].left = scope.initialLeft + obj.position.left;
            }
          });
          angular.element(elem.find('div')[0]).resizable({
            stop: function(event, obj) {
              console.log("stopped resizing div", ind);
              scope.$parent.elements[ind].width = obj.size.width;
              scope.$parent.elements[ind].height = obj.size.height;
            }
          });
        }
    };
});
