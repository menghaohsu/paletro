app.directive('userNavbar', function () {
    return {
        restrict: 'E',
          scope: {
          index: '=',
          elements: '='
          },
        controller: 'UserNavbarController',
        templateUrl: 'js/components/user-navbar/navbar.html',
        link: function(scope, elem, attr) {
          let elemObj = scope.elements[scope.index];
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

          scope.$on('deleteNavbar', function(event, shade){
            if (isSelected&&confirm('Are you sure to delete the navbar?')) {
              elemObj.type = 'deleted';
            }
          });

          scope.getClasses = function () {
            return `${scope.currentColor} ${scope.currentShade} ${isSelected ? 'selected' : ''}`;
          }

          scope.delete = function(){
            if(confirm('Are you sure to delete navbar?')) {
              elemObj.type = 'deleted';
              scope.$parent.$parent.duplicateNavbar = false;
            }
          }
        }
    };
});

app.controller('UserNavbarController', function ($scope) {

});