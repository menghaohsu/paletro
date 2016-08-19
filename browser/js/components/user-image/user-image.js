app.directive('userImage', function () {
    return {
        restrict: 'E',
        scope: {
            image: '='
        },
        templateUrl: 'js/components/user-image/user-image.html',
        link: function(scope, elem){
            let ind = scope.$parent.$index;
            let elemObj = scope.$parent.$parent.elements[ind];
            scope.initialWidth = elemObj.width;
            scope.initialHeight = elemObj.height;
            scope.initialTop = elemObj.top;
            scope.initialLeft = elemObj.left;
            scope.$on('changeGrid', function(event, dimention){
            elem.draggable("option", "grid", [dimention,dimention])
          })
         
          elem.draggable({
            
            grid: [scope.$parent.dimention, scope.$parent.dimention],
                stop: function(event, obj) {
                    console.log('Image dragging', ind);
                    elemObj.top = scope.initialTop + obj.position.top - 64;
                    elemObj.left = scope.initialLeft + obj.position.left;
                    console.log(elemObj.top,elemObj.left)
                    if(elemObj.top<-130&&elemObj.left>600){
                        if(confirm('Are you sure to delete this '+ elemObj.type+'?')) elemObj.type = 'deleted';          
                    }
                    scope.$apply();
                }
            });

            elem.find('img').on('load', function(event){
                elem.find('img').resizable({
                    stop: function(event, obj) {
                        console.log('Image resizing', ind)
                        elemObj.width = obj.size.width;
                        elemObj.height = obj.size.height;
                    }
                });
            })
        }
    };
});
