app.directive('fullstackLogo', function () {
    return {
        restrict: 'E',/*
        controller: 'LogoController',
*/      templateUrl: 'js/components/fullstack-logo/fullstack-logo.html',
        link: function (scope, elem, attr) {
          let ind = scope.$index;
          elem.draggable({
            stop: function(event, obj) {
              console.log('stopped dragging logo', ind);
              scope.$parent.elements[ind].left = obj.position.left;
              scope.$parent.elements[ind].top = obj.position.top;
            }
          });
          angular.element(elem.find('img')[0]).resizable({
            stop: function(event, obj) {
              console.log('stopped resizing logo', ind);
              scope.$parent.elements[ind].width = obj.size.width;
              scope.$parent.elements[ind].height = obj.size.height;
            }
          });
        }

    };
});

/*app.controller('LogoController', function ($scope) {
    $( function() {
      let ind = $scope.$index;
      $(".draggable.logo").draggable({
        stop: function(event, obj) {
          console.log('stopped dragging logo', ind);
          $scope.$parent.elements[ind].left = obj.position.left;
          $scope.$parent.elements[ind].top = obj.position.top;
        }
      });
      $(".logo").resizable({
        stop: function(event, obj) {
          console.log('stopped resizing logo', ind);
          $scope.$parent.elements[ind].width = obj.size.width;
          $scope.$parent.elements[ind].height = obj.size.height;
        }
      });
    } );
});*/