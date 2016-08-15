app.directive('userImage', function () {
    return {
        restrict: 'E',
        scope: {
            image: '='
        },
        templateUrl: 'js/components/user-image/user-image.html',
        link: function(scope, element){
            let ind = scope.$parent.$index;
            scope.initialWidth = scope.$parent.$parent.elements[ind].width;
            scope.initialHeight = scope.$parent.$parent.elements[ind].height;
            scope.initialTop = scope.$parent.$parent.elements[ind].top;
            scope.initialLeft = scope.$parent.$parent.elements[ind].left;

            $(element).draggable({
                stop: function(event, obj) {
                    scope.$parent.$parent.elements[ind].top = scope.initialTop + obj.position.top - 64;
                    scope.$parent.$parent.elements[ind].left = scope.initialLeft + obj.position.left;
                }
            });

            $(element).find('.image').on('load', function(event){
                $(element).find('.image').resizable({
                    stop: function(event, obj) {
                        console.log('Image resizing', ind)
                        scope.$parent.$parent.elements[ind].width = obj.size.width;
                        scope.$parent.$parent.elements[ind].height = obj.size.height;
                    }
                });
            })
        }
    };
});