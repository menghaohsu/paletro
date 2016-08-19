app.directive('fullstackLogo', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/components/fullstack-logo/fullstack-logo.html',
        link: function (scope, elem, attr) {
          let ind = scope.$index;
          let elemObj = scope.$parent.elements[ind];
          scope.initialWidth = elemObj.width;
          scope.initialHeight = elemObj.height;
          scope.initialTop = elemObj.top;
          scope.initialLeft = elemObj.left;
          elem.draggable({
            snap: true,
            stop: function(event, obj) {
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
