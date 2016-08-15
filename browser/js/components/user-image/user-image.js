app.directive('userImage', function () {
    return {
        restrict: 'E',
        scope: {
            image: '='
        },
        templateUrl: 'js/components/user-image/user-image.html',
        link: function(scope, elem){
            let ind = scope.$parent.$index;
            elem.draggable({
                stop: function(event, obj) {
                    console.log("image dragging", ind);
                    scope.$parent.$parent.elements[ind].left = obj.position.left;
                    scope.$parent.$parent.elements[ind].top = obj.position.top;
                }
            });

            elem.find('img').on('load', function(event){
                elem.find('img').resizable({
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