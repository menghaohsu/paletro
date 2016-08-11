
app.directive('newButton', function () {
    return {
        restrict: 'E',
        controller: 'BtnController',
        templateUrl: 'js/common/directives/button/button.html',
        scope: {},
        link: function(scope, elem, attr) {
        	var cur;
        	
        	var theButton = $(elem.find('button')[0])
        

        	scope.isSelected = false;
        	theButton.click(function() {
        		cur =  $( event.target );
        		
        		
	        	scope.isSelected = !scope.isSelected;
	       
	        	if (scope.isSelected) angular.element(cur).addClass("selected")
	        	else angular.element(cur).removeClass("selected")
	        	
	        	

			})
        	scope.currentColor = 'light-blue'
			scope.$on('colorChange', function(event, color){
				if (scope.isSelected) {
					angular.element(cur).removeClass(scope.currentColor)
					angular.element(cur).addClass(color)
				}
			})
        }

    };
});

app.controller('BtnController', function ($scope) {
    $( function() {
      $('.draggable').draggable({cancel: false});
      $('.resizable').resizable({cancel:false});
    } );
});