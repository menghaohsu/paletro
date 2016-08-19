
app.directive('newButton', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/components/button/button.html',
        link: function(scope, elem, attr) {
          let ind = scope.$parent.$index;
          let elemObj = scope.$parent.$parent.elements[ind];
          scope.initialWidth = elemObj.width;
          scope.initialHeight = elemObj.height;
          scope.initialTop = elemObj.top;
          scope.initialLeft = elemObj.left;
          scope.currentColor = elemObj.color;
          scope.currentShade = elemObj.shade;

          scope.$on('changeGrid', function(event, dimension){
            elem.draggable("option", "grid", [dimension,dimension])
          })

          elem.draggable({

            grid: [scope.$parent.dimension, scope.$parent.dimension],
            stop: function (event, obj) {
              console.log('stopped dragging button', ind);
              elemObj.top = scope.initialTop + obj.position.top;
              elemObj.left = scope.initialLeft + obj.position.left;
              if(elemObj.top<-45&&elemObj.left>1070){
                if(confirm('Are you sure to delete this '+ elemObj.type+'?')) elemObj.type = 'deleted';
              }
              scope.$apply();
            }
          });

          angular.element(elem.find('div')[0]).resizable({
            stop: function(event, obj) {
              console.log('stopped resizing button', scope.$parent.$index);
              elemObj.width = obj.size.width;
              elemObj.height = obj.size.height;
            }
          });

          let isSelected = false;
          scope.toggleSelected = function () {
            isSelected = !isSelected;
          }

          scope.$on('colorChange', function(event, color){
            if (isSelected) {
              elemObj.color = color;
              scope.currentColor = color;
            }
          });

          scope.$on('shadeChange', function(event, shade){
            if (isSelected) {
              elemObj.shade = shade;
              scope.currentShade = shade;
            }
          });

          scope.getClasses = function () {
            return `btn absolute ${scope.currentColor} ${scope.currentShade} ${isSelected ? 'selected' : ''}`;
          }
        }
    };
});