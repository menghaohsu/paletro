
app.directive('header', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/components/header/header.html',
        link: function (scope, elem, attr) {
          let ind = scope.$index;
          let elemObj = scope.$parent.elements[ind];
          scope.initialWidth = elemObj.width;
          scope.initialHeight = elemObj.height;
          scope.initialTop = elemObj.top;
          scope.initialLeft = elemObj.left;
          scope.initialFont = (elemObj.height/1.2) + 'px';
          scope.initialLineHeight = elemObj.height + 'px';

          elem.draggable({
            stop: function (event, obj) {
              elemObj.top = scope.initialTop + obj.position.top;
              elemObj.left = scope.initialLeft + obj.position.left;
             }
          });

          angular.element(elem.find('div')[0]).resizable({
            ghost: true,
            stop: function (event, obj) {

              var header = elem.find('h1');
              var size = elem.css("height");

              (header).css("font-size",size.toString()) //to make it bigger on the screen
              elemObj.fontsize = size
              elemObj.width = obj.size.width;
              elemObj.height = obj.size.height;

            }
          });

        }
    };
});


