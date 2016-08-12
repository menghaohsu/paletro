app.directive('userNavbar', function () {
    return {
        restrict: 'E',
        controller: 'UserNavbarController',
        templateUrl: 'js/common/directives/our-navbar/navbar.html'
    };
});

app.controller('UserNavbarController', function ($scope) {

});