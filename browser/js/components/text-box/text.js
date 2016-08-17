app.directive('textBox', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/components/text-box/text.html',
        link: function (scope, elem, attr) {
          let ind = scope.$index;
          let elemObj = scope.$parent.elements[ind];
          scope.initialWidth = elemObj.width;
          scope.initialHeight = elemObj.height;
          scope.initialTop = elemObj.top;
          scope.renderTop = scope.initialTop + 64;
          scope.initialLeft = elemObj.left;

          elem.bind('blur keyup change', function(){
            elemObj.content = elem[0].innerText;
          })

          angular.element(elem.find('div')[0]).draggable({
            cancel: 'text',
            stop: function (event, obj) {
              console.log('stopped dragging textbox', ind);
              elemObj.top = obj.position.top - 64;
              elemObj.left = obj.position.left;
              
            }
          });
          angular.element(elem.find('div')[0]).resizable({
            stop: function (event, obj) {
              console.log('stopped resizing textbox', ind);
              elemObj.width = obj.size.width;
              elemObj.height = obj.size.height;
            }
          });
        }
    };
});
