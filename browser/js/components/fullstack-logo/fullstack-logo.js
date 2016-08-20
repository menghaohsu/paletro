app.directive('fullstackLogo', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/components/fullstack-logo/fullstack-logo.html',
        link: function (scope, elem, attr) {
          let ind = scope.$index;
          let elemObj = scope.$parent.elements[ind];
          scope.initialWidth = elemObj.width;
          scope.initialHeight = elemObj.height;
          scope.initialTop = elemObj.top;
          scope.initialLeft = elemObj.left;
          scope.flameon= false

                                      function animatePoof() {
    var bgTop = 100,
        frame = 0,
        frames = 50,
        frameSize = 32,
        frameRate = 180,
        puff = $('#puff');
    var animate = function(){
        if(frame < frames){
            puff.css({
                backgroundPosition: "0 "+bgTop+"px"
            });
            bgTop = bgTop - frameSize;
            frame++;
            setTimeout(animate, frameRate);
        }
    };
    
    animate();
    setTimeout("$('#puff').hide()", frames * frameRate);
}
$(function() {
    $('img').mouseup(function(e) {
        var xOffset = 24;
        var yOffset = 24;
        
        var chemX= $('#puff').css({
            left: e.pageX - xOffset + 'px',
            top: e.pageY - yOffset + 'px'
        })
          animatePoof();
        chemX.show()
    });
});

          scope.$on('changeGrid', function(event, dimension){
            elem.draggable("option", "grid", [dimension,dimension]) 

          })

          elem.draggable({
            grid: [scope.$parent.dimension, scope.$parent.dimension],
            stop: function(event, obj) {
              elemObj.top = scope.initialTop + obj.position.top;
              elemObj.left = scope.initialLeft + obj.position.left;
              console.log(elemObj.top,elemObj.left)
              if(elemObj.top<-45&&elemObj.left>1070){
                if(confirm('Are you sure you want to delete this '+ elemObj.type+'?')) {

                  elemObj.type = 'deleted';
             
                }
              }
              scope.$apply();
            }
          });

          elem.find('img').on('load', function(event){
            elem.find('img').resizable({
              stop: function(event, obj) {
                console.log('Logo resizing', ind)
                elemObj.width = obj.size.width;
                elemObj.height = obj.size.height;
            
              }
            });
          });
        }
    };
});
