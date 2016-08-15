
app.directive('newButton', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: 'BtnController',
        templateUrl: 'js/components/button/button.html',
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

app.controller('BtnController', function ($scope) {
    $( function() {
      let ind = $scope.$parent.$index;
      console.log("BUTTON SCOPE", $scope);
      $scope.initialWidth = $scope.$parent.elements[ind].width;
      $scope.initialHeight = $scope.$parent.elements[ind].height;
      $scope.initialTop = $scope.$parent.elements[ind].top;
      $scope.initialLeft = $scope.$parent.elements[ind].left;

      $('.draggable.btn-1').draggable({
        cancel: false,
        stop: function (event, obj) {
          console.log('stopped dragging button', ind, obj.position);
          $scope.$parent.elements[ind].top = $scope.initialTop + obj.position.top;
          $scope.$parent.elements[ind].left = $scope.initialLeft + obj.position.left;
          console.log($scope.$parent.elements[ind])
        }
      });
      $('.resizable.btn').resizable({
        cancel:false,
        stop: function (event, obj) {
          console.log(obj.element.context.clientHeight, obj.element.context.clientWidth);
          console.log('resizing btn', ind);
          $scope.$parent.elements[ind].width = obj.element.context.clientWidth;
          $scope.$parent.elements[ind].height = obj.element.context.clientHeight;
          console.log($scope.$parent.elements[ind])
        }
      });
    });
});