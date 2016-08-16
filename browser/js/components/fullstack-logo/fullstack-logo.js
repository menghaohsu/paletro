app.directive('fullstackLogo', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/components/fullstack-logo/fullstack-logo.html',
        link: function (scope, elem, attr) {
          let ind = scope.$index;
          scope.initialWidth = scope.$parent.elements[ind].width;
          scope.initialHeight = scope.$parent.elements[ind].height;
          scope.initialTop = scope.$parent.elements[ind].top;
          scope.initialLeft = scope.$parent.elements[ind].left;
          elem.draggable({
            stop: function(event, obj) {
              console.log('stopped dragging logo', ind);
              scope.$parent.elements[ind].top = scope.initialTop + obj.position.top;
              scope.$parent.elements[ind].left = scope.initialLeft + obj.position.left;
              console.log('initial', scope.initialTop, scope.initialLeft)
              console.log('position', obj.position);
              console.log(scope.$parent.elements[ind]);
            }
          });
          elem.find('img').on('load', function(event){
            elem.find('img').resizable({
              stop: function(event, obj) {
                console.log('Logo resizing', ind)
                scope.$parent.elements[ind].width = obj.size.width;
                scope.$parent.elements[ind].height = obj.size.height;
              }
            });
          });
        }

    };
});
