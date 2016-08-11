app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        controller: 'HomeController',
        templateUrl: 'js/home/home.html'
    });
});

app.controller('HomeController', function ($scope) {
    $scope.elements = [];

    $scope.addButton = function () {
      $scope.elements.push({type: 'button'});
      console.log($scope.elements)
    }

    $scope.addLogo = function () {
      $scope.elements.push({type: 'logo'});
    }

    $scope.addDiv = function () {
      $scope.elements.push({type: 'div'});
    }

    $scope.finished = function () {
      console.log($('#home'));
      var p = document.getElementById("home");
      var pClone = p.cloneNode(true);
    }
});