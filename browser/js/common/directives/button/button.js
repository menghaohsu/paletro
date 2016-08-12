
app.directive('newButton', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: 'BtnController',
        templateUrl: 'js/common/directives/button/button.html',
        link: function(scope, elem, attr) {

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
              theButton.removeClass(scope.currentColor);
              theButton.addClass(color);
              scope.currentColor = color;
            }
          });

          scope.currentShade = 'original'
          scope.$on('shadeChange', function(event, shade){
            if (scope.isSelected) {
              theButton.removeClass(scope.currentShade);
              theButton.addClass(shade);
              scope.currentShade = shade;
            }
          });
        }
    };
});

app.controller('BtnController', function ($scope) {
    $( function() {
      $('.draggable').draggable({
        cancel:false,
        stop: function(event, obj) {      
            $scope.$parent.elements[$scope.$index].left = obj.position.left;
            $scope.$parent.elements[$scope.$index].top = obj.position.top;
        }
    });
      $('.resizable').resizable({
            cancel:false,
            stop: function(event, obj) {
                $scope.$parent.elements[$scope.$index].width = obj.size.width;
                $scope.$parent.elements[$scope.$index].height = obj.size.height;
            }
        });
    });
});