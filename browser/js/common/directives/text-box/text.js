app.directive('textBox', function () {
    return {
        restrict: 'E',
        controller: 'BoxController',
        templateUrl: 'js/common/directives/text-box/text.html'
    };
});

app.controller('BoxController', function ($scope) {
    $( function() {
      $(".draggable textarea").click(function(){
          $(this).closest(".draggable").draggable('disable');
      }).blur(function(){
          $(this).closest(".draggable").draggable('enable');
      });
      $(".resizable textarea").click(function(){
          $(this).closest(".resizable").resizable('disable');
      }).blur(function(){
          $(this).closest(".resizable").resizable('enable');
      });
      // $(".resizable").resizable({
      //   cancel: "text",
      //     start: function (){
      //         $('#textarea').focus();
      //     },
      //     stop: function (){
      //         $('#textarea').focus();
      //     } 
      // });
    });

    $scope.user = {
      name: 'enter text here'
    }
});