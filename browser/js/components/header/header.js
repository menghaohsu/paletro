

app.directive('header', function () {
    return {
        restrict: 'E',/*
        controller: 'BoxController',*/
        templateUrl: 'js/components/header/header.html',
        link: function (scope, elem, attr) {
          let ind = scope.$index;
           scope.initialWidth = scope.$parent.elements[ind].width;
           scope.initialHeight = scope.$parent.elements[ind].height;
           scope.initialTop = scope.$parent.elements[ind].top;
           scope.initialLeft = scope.$parent.elements[ind].left;
 
          elem.draggable({
            stop: function (event, obj) {
              scope.$parent.elements[ind].top = scope.initialTop + obj.position.top;
              scope.$parent.elements[ind].left = scope.initialLeft + obj.position.left;
              
            }
          });
          angular.element(elem.find('h1')[0]).resizable({
            stop: function (event, obj) {
              console.log('stopped resizing header', ind);
              var element = elem.find('h1');
              var size = elem.css("height");
              (element).css("font-size", size.toString())
            }
          });
          elem.find('h1').on('load', function(event){
          elem.find('h1').resizable({
            stop: function(event, obj) {
              console.log('header resizing', ind)
              scope.$parent.$parent.elements[ind].width = obj.size.width;
              scope.$parent.$parent.elements[ind].height = obj.size.height;
                    }
                });
            })

        }
    };
});


