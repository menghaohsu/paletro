app.directive('userImage', function () {
    return {
        restrict: 'E',
        scope: {
            image: '='
        },
        templateUrl: 'js/common/directives/user-image/user-image.html',
        link: function(scope,element){
            $(element).draggable();
            $(element).find('.image').on('load', function(event){
                $(element).find('.image').resizable();
            })
        }
    };
});