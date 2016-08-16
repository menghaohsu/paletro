app.directive('textBox', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/components/text-box/text.html',
        link: function (scope, elem, attr) {
          let ind = scope.$index;
          scope.initialWidth = scope.$parent.elements[ind].width;
          scope.initialHeight = scope.$parent.elements[ind].height;
          scope.initialTop = scope.$parent.elements[ind].top;
          scope.renderTop = scope.initialTop + 64
          scope.initialLeft = scope.$parent.elements[ind].left;

          angular.element(elem.find('div')[0]).draggable({
            cancel: 'text',
            stop: function (event, obj) {
              console.log('stopped dragging textbox', ind);
              scope.$parent.elements[ind].top = obj.position.top - 64;
              scope.$parent.elements[ind].left = obj.position.left;
            }
          });
          angular.element(elem.find('div')[0]).resizable({
            stop: function (event, obj) {
              console.log('stopped resizing textbox', ind);
              scope.$parent.elements[ind].width = obj.size.width;
              scope.$parent.elements[ind].height = obj.size.height;
            }
          });
        }
    };
});
