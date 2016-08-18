app.directive('userTemplate', function ($sce, EditorFactory) {
    return {
        restrict: 'E',
        scope: {
            template: '='
            },
        templateUrl: 'js/components/user-template/user-template.html',
        link: function(scope, elem, attr){
           

            let ind = scope.$parent.$index; //index of this element in parent
            let elemObj = scope.$parent.$parent.elements[ind]; //the actual userTemplate 
            // elemObj.chemX = elem.find('iframe').contents().each(function(){
            //     console.log("YAYYYYY")
            //     if(this.nodeType ==3 ){
            //         console.log(this.nodeValue)
            //     }
            //     else{
            //         console.log(this.outerHTML)
            //     }
            // })
            // console.log(elemObj.chemX)

            // EditorFactory.contents = "YO"
            
            EditorFactory.contents = (elem.find('iframe').contents())
            

        	scope.trustSrc = function (src) {
            	return $sce.trustAsResourceUrl(src)

            }
        }
       



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
