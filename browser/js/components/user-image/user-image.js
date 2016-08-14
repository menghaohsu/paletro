app.directive('userImage', function () {
    return {
        restrict: 'E',
        scope: {
            image: '='
        },
        templateUrl: 'js/components/user-image/user-image.html',
        link: function(scope, element){
            let ind = scope.$parent.$index;
            $(element).draggable({
                stop: function(event, obj) {
                    console.log("image dragging", ind);
                    scope.$parent.$parent.elements[ind].left = obj.position.left;
                    scope.$parent.$parent.elements[ind].top = obj.position.top;
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