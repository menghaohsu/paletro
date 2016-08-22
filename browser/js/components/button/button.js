
app.directive('newButton', function () {
    return {
        restrict: 'E',
        scope: {
          index: '=',
          elements: '=',
          dimension: '='
        },
        templateUrl: 'js/components/button/button.html',
        link: function(scope, elem, attr) {
          let idx = scope.index
          let elemObj = scope.elements[idx];
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
            grid: [scope.dimension, scope.dimension],
            stop: function(event, obj) {
              elemObj.top = scope.initialTop + obj.position.top;
              elemObj.left = scope.initialLeft + obj.position.left;

              $("#trash-can").unbind("mouseenter").bind("mouseenter", function(){

                if(confirm('Are you sure you want to delete this '+ elemObj.type+'?')){
                  elemObj.type = 'deleted';
                  scope.$apply();
                }
              })

            }
          });

          angular.element(elem.find('div')[0]).resizable({
            stop: function(event, obj) {
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