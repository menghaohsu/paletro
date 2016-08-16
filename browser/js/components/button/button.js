
app.directive('newButton', function () {
    return {
        restrict: 'E',
        scope: {},/*
        controller: 'BtnController',*/
        templateUrl: 'js/components/button/button.html',
        link: function(scope, elem, attr) {
          let ind = scope.$parent.$index;
          scope.initialWidth = scope.$parent.$parent.elements[ind].width;
          scope.initialHeight = scope.$parent.$parent.elements[ind].height;
          scope.initialTop = scope.$parent.$parent.elements[ind].top;
          scope.initialLeft = scope.$parent.$parent.elements[ind].left;

          elem.draggable({
            cancel:false,
            stop: function (event, obj) {
              console.log('stopped dragging button', ind);
              scope.$parent.$parent.elements[ind].left = obj.position.left;
              scope.$parent.$parent.elements[ind].top = obj.position.top;

            }
          });
          elem.find('button').on('load', function(event){
            elem.find('button')[0].resizable({
              stop: function(event, obj) {
                console.log('stopped resizing button', ind);
                scope.$parent.$parent.elements[ind].width = obj.size.width;
                scope.$parent.$parent.elements[ind].height = obj.size.height;
              }
            });
          })

          angular.element(elem.find('button')[0]).resizable({
            cancel:false,
            stop: function (event, obj) {
              console.log('stopped resizing button', ind);
              scope.$parent.$parent.elements[ind].width = obj.size.width;
              scope.$parent.$parent.elements[ind].height = obj.size.height;
            }
          });


        	var theButton = $(elem.find('button')[0]);

        	scope.isSelected = false;
        	theButton.click(function() {
	        	scope.isSelected = !scope.isSelected;

	        	if (scope.isSelected) theButton.addClass("selected");
	        	else theButton.removeClass("selected");
          });

        	scope.currentColor = 'blue'
          scope.$on('colorChange', function(event, color){
            if (scope.isSelected) {
              scope.$parent.elements[scope.$parent.$index].color = color;
              theButton.removeClass(scope.currentColor);
              theButton.addClass(color);
              scope.currentColor = color;
            }
          });

          scope.currentShade = 'original'
          scope.$on('shadeChange', function(event, shade){
            if (scope.isSelected) {
              scope.$parent.elements[scope.$parent.$index].shade = shade;
              theButton.removeClass(scope.currentShade);
              theButton.addClass(shade);
              scope.currentShade = shade;
            }
          });
        }
    };
});