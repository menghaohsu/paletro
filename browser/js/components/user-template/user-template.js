app.directive('userTemplate', function ($sce) {
    return {
        restrict: 'E',
        scope: {
            template: '=',
            trustSrc = function (src) {
            	return $sce.trustAsResourceUrl(src)
            }
        },
        templateUrl: 'js/components/user-template/user-template.html'
        // link: function(scope, elem){
        //     let ind = scope.$parent.$index;
        //     let elemObj = scope.$parent.$parent.elements[ind];
        //     scope.initialWidth = elemObj.width;
        //     scope.initialHeight = elemObj.height;
        //     scope.initialTop = elemObj.top;
        //     scope.initialLeft = elemObj.left;

        //     elem.draggable({
        //         stop: function(event, obj) {
        //             console.log('Image dragging', ind);
        //             elemObj.top = scope.initialTop + obj.position.top - 64;
        //             elemObj.left = scope.initialLeft + obj.position.left;
        //         }
        //     });

        //     elem.find('img').on('load', function(event){
        //         elem.find('img').resizable({
        //             stop: function(event, obj) {
        //                 console.log('Image resizing', ind)
        //                 elemObj.width = obj.size.width;
        //                 elemObj.height = obj.size.height;
        //             }
        //         });
        //     })
        // }
    };
});
