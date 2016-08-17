app.directive('userNavbar', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: 'UserNavbarController',
        templateUrl: 'js/components/user-navbar/navbar.html',
        link: function(scope, elem, attr) {
          let ind = scope.$parent.$index;
          let elemObj = scope.$parent.elements[ind];
          scope.currentColor = elemObj.color;
          scope.currentShade = elemObj.shade;

          let isSelected = false;
          scope.toggleSelected = function() {
            isSelected = !isSelected;
          }

          scope.$on('colorChange', function(event, color){
            if (isSelected) {
              elemObj.color = color;
              scope.currentColor = color;
            }
          });

          scope.$on('shadeChange', function(event, shade){
            if (isSelected) {
              elemObj.shade = shade;
              scope.currentShade = shade;
            }
          });

          scope.getClasses = function () {
            return `${scope.currentColor} ${scope.currentShade} ${isSelected ? 'selected' : ''}`;
          }
        }
    };
});

app.controller('UserNavbarController', function ($scope) {

});