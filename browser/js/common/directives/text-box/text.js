app.directive('textBox', function () {
    return {
        restrict: 'E',
        controller: 'BoxController',
        templateUrl: 'js/common/directives/text-box/text.html'
    };
});

app.controller('BoxController', function ($scope) {
   
});