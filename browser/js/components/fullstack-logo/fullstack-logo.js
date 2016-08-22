app.directive('fullstackLogo', function () {
    return {
        restrict: 'E',
         scope: {
          index: '=',
          elements: '=',
          dimension: '='
          },
        templateUrl: 'js/components/fullstack-logo/fullstack-logo.html',
        link: function (scope, elem, attr) {
          let idx = scope.index
          let elemObj = scope.elements[idx];
         
          scope.initialWidth = elemObj.width;
          scope.initialHeight = elemObj.height;
          scope.initialTop = elemObj.top;
          scope.initialLeft = elemObj.left;

          scope.$on('changeGrid', function(event, dimension){
            elem.draggable("option", "grid", [dimension,dimension]) 

          })

          elem.draggable({
            grid: [scope.dimension, scope.dimension],
            stop: function(event, obj) {
              elemObj.top = scope.initialTop + obj.position.top;
              elemObj.left = scope.initialLeft + obj.position.left;
              
              if(elemObj.top>-45&&elemObj.left>1070){
                if(confirm('Are you sure you want to delete this '+ elemObj.type+'?'))elemObj.type = 'deleted';
                }
              $("#trash-can").one("hover", function(){
                if(confirm('Are you sure you want to delete this '+ elemObj.type+'?'))elemObj.type = 'deleted';

              })
                scope.$apply();
            }
            });

          elem.find('img').on('load', function(event){
            elem.find('img').resizable({
              stop: function(event, obj) {
    
                elemObj.width = obj.size.width;
                elemObj.height = obj.size.height;
              }
            });
          });
        }
    };
});