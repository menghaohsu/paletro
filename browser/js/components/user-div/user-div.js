app.directive('userDiv', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/components/user-div/user-div.html',
        link: function (scope, elem, attr) {
          let ind = scope.$index;
          let elemObj = scope.$parent.elements[ind];
          scope.initialWidth = elemObj.width;
          scope.initialHeight = elemObj.height;
          scope.initialTop = elemObj.top;
          scope.initialLeft = elemObj.left;

          scope.$on('changeGrid', function(event, dimention){
            elem.draggable("option", "grid", [dimention,dimention])
          })
         
          elem.draggable({
            
            grid: [scope.$parent.dimention, scope.$parent.dimention],
            stop: function(event, obj) {
              console.log("stopped dragging div", ind);
              elemObj.top = scope.initialTop + obj.position.top;
              elemObj.left = scope.initialLeft + obj.position.left;
            }
          });
          angular.element(elem.find('div')[0]).resizable({
            stop: function(event, obj) {
              console.log("stopped resizing div", ind);
              elemObj.width = obj.size.width;
              elemObj.height = obj.size.height;
            }
          });
        }
    };
});
