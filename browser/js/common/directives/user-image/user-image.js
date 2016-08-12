app.directive('userImage', function () {
    return {
        restrict: 'E',
        scope: {
            image: '='
        },
        templateUrl: 'js/common/directives/user-image/user-image.html',
        link: function(scope,element){
            $(element).draggable({
                stop: function(event, obj) {      
                    $scope.$parent.elements[$scope.$index].left = obj.position.left;
                    $scope.$parent.elements[$scope.$index].top = obj.position.top;
                }
            });
            $(element).find('.image').on('load', function(event){
                $(element).find('.image').resizable({
                    stop: function(event, obj) {
                        $scope.$parent.elements[$scope.$index].width = obj.size.width;
                        $scope.$parent.elements[$scope.$index].height = obj.size.height;
                    }
                });
            })
        }
    };
});