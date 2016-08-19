app.directive('fullstackLogo', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/components/fullstack-logo/fullstack-logo.html',
        
        link: function (scope, elem, attr) {

          console.log(scope, "scopee")
    
          let ind = scope.$index;
          let elemObj = scope.$parent.elements[ind];
          scope.initialWidth = elemObj.width;
          scope.initialHeight = elemObj.height;
          scope.initialTop = elemObj.top;
          scope.initialLeft = elemObj.left;
          scope.dimens = scope.$parent.size
          scope.$on('changeGrid', function(event, dimention){
          console.log(dimention, "THEDIMEN")
            elem.draggable("option", "grid", [dimention,dimention])
          })
         
          elem.draggable({
            
            grid: [scope.$parent.dimention, scope.$parent.dimention],
            stop: function(event, obj) {
              console.log(scope.$parent.dimention, "parent")
              console.log('stopped dragging logo', ind);
              elemObj.top = scope.initialTop + obj.position.top;
              elemObj.left = scope.initialLeft + obj.position.left;
            }
          });
          elem.find('img').on('load', function(event){
            elem.find('img').resizable({
              stop: function(event, obj) {
                console.log('Logo resizing', ind)
                elemObj.width = obj.size.width;
                elemObj.height = obj.size.height;
              }
            });
          });
        }
    };
});
