app.directive('userImage', function () {
    return {
        restrict: 'E',
        controller: 'ImgController',
        templateUrl: 'js/common/directives/user-image/user-image.html'
    };
});

app.controller('ImgController', function ($scope) {
    $( function() {
      $( ".draggable" ).draggable();
      $("img").resizable();
    } );

    $scope.url = 'https://pbs.twimg.com/profile_images/555533496676925440/9GmtXem_.jpeg'
});