app.directive('newButton', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: 'BtnController',
        templateUrl: 'js/common/directives/button/button.html'
    };
});

app.controller('BtnController', function ($scope) {
   
});