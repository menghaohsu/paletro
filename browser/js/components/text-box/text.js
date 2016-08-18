app.directive('textBox', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/components/text-box/text.html',
        link: function (scope, elem, attr) {
          let ind = scope.$index;
          let elemObj = scope.$parent.elements[ind];
          scope.initialWidth = elemObj.width;
          scope.initialHeight = elemObj.height;
          scope.initialTop = elemObj.top;
          scope.renderTop = scope.initialTop + 64;
          scope.initialLeft = elemObj.left;
          scope.content = elemObj.content;

          elem.bind('blur keyup change', function(){
            elemObj.content = elem[0].innerText;
          })

          let textDiv = angular.element(elem.find('div')[0]);

          textDiv.draggable({
            cancel: 'text',
            stop: function (event, obj) {
              console.log('stopped dragging textbox', ind);
              elemObj.top = obj.position.top - 64;
              elemObj.left = obj.position.left;
              if(elemObj.top<-45&&elemObj.left>1070){
                if(confirm('Are you sure to delete this '+ elemObj.type+'?')) elemObj.type = 'deleted';          
              }
              scope.$apply();

            }
          });
          textDiv.resizable({
            stop: function (event, obj) {
              console.log('stopped resizing textbox', ind);
              elemObj.width = obj.size.width;
              elemObj.height = obj.size.height;
            }
          });

          //this prevents the contenteditable bug
          let children = textDiv.children();
          for (var key in children) {
            if (children[key].contentEditable) children[key].contentEditable = false;
          }
          textDiv[0].contentEditable = true;
        }
    };
});
