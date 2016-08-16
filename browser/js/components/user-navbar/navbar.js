app.directive('userNavbar', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: 'UserNavbarController',
        templateUrl: 'js/components/user-navbar/navbar.html',
        link: function(scope, elem, attr) {

          var theNavbar = $(elem).find('nav');

          scope.isSelected = false;
          theNavbar.click(function() {
            scope.isSelected = !scope.isSelected;

            if (scope.isSelected) theNavbar.addClass("selected");
            else theNavbar.removeClass("selected");
          });

          scope.currentColor = 'blue'
          scope.$on('colorChange', function(event, color){
            if (scope.isSelected) {
              scope.$parent.elements[scope.$parent.$index].color = color;
              theNavbar.removeClass(scope.currentColor);
              theNavbar.addClass(color);
              scope.currentColor = color;
            }
          });

          scope.currentShade = 'original'
          scope.$on('shadeChange', function(event, shade){
            if (scope.isSelected) {
              scope.$parent.elements[scope.$parent.$index].shade = shade;
              theNavbar.removeClass(scope.currentShade);
              theNavbar.addClass(shade);
              scope.currentShade = shade;
            }
          });
        }
    };
});

app.controller('UserNavbarController', function ($scope) {

});