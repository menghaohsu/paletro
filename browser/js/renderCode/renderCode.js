app.config(function ($compileProvider,$stateProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
    $stateProvider.state('renderCode', {
        url: '/renderCode/:id',
        // params: {elements: []},
        controller: 'renderCodeController',
        templateUrl: 'js/renderCode/renderCode.html',
        resolve: {
            templateCode: function(ProjectFactory,$stateParams){
                var template = `<!DOCTYPE html>
                                    <html lang="en">
                                    <head>
                                        <base href="/" />
                                        <title>Testing</title>
                                        <!-- Materialize.css-->
                                        <link href="http://fonts.googleapis.com/icon?family=MaterialIcons" rel="stylesheet">
                                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
                                        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                                        <script type="text/javascript" src="/materialize-css/dist/js/materialize.min.js"></script>
                                    </head>
                                    <body>`;
                return ProjectFactory.getAllElements($stateParams.id)
                .then(function(res){
                    res[0].elements.forEach(function(element){
                        renderCode(element);
                    })
                })
                .then(function(){
                    template+=`</body>
                    </html>`;
                    return template
                })              
                function renderCode(element){ 
                    if(element.type==='button'){
                        template+=`<${element.type} class=\"btn ${element.color} ${element.shade}\" style=\"height:
                                    ${element.heiht}px; width:${element.width}px; position: absolute; left: 
                                    ${element.left}px; top: ${element.top}px;\">button</${element.type}>`;
                    }else if(element.type==='texbox'){
                        template+=`<textarea class=\"absolute\" contenteditable=\"false\" style=\"height:
                                    ${element.height}px; width:${element.width}px; position: absolute; left: 
                                    ${element.left}px; top: ${element.top}px;\">Enter Text Here</textarea>`;
                    }else if(element.type==='div'){
                        template+=`<div class=\"absolute\" style=\"height:
                                    ${element.height}px; width:${element.width}px; position: absolute; left: 
                                    ${element.left}px; top: ${element.top}px; border: 1px solid black\"></div>`;
                    }else if(element.type==='image'){
                        template+=`<img src=\"${element.url}\" class=\"image\" style=\"height:
                                    ${element.height}px; width:${element.width}px; position: absolute; left: 
                                    ${element.left}px; top: ${element.top}px;\">`;
                    }else if(element.type==='logo'){
                        template+=`<img src=\"https://jlau-bucket-1.s3.amazonaws.com/uploads/topic/image/42/fullstack.png\" class=\"logo\" style=\"height:
                                    ${element.height}px; width:${element.width}px; position: absolute; left: 
                                    ${element.left}px; top: ${element.top}px;\">`;
                    }else if(element.type==='navbar'){
                        template+=`<nav class=\"${element.color} ${element.shade}\"><div class=\"nav-wrapper container\"><a class=\"brand-logo\">Sample Navbar</a>
                                    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">
                                    <li><a href=\"#\">Home</a></li>
                                    <li><a href=\"#\">About</a></li>
                                    <li><a href=\"#\">Contact</a></li>
                                    <li><a href=\"#\">Login</li></a></li>
                                    </ul></div></nav>`;
                    }    
                }
            }
        }
    });
});

app.controller('renderCodeController', function($scope,$stateParams,$window,templateCode){
    $scope.template = templateCode;

    //generate html file
    var blob = new Blob([ templateCode ], { type : 'html/HTML' });
    var url = $window.URL || $window.webkitURL;
    $scope.fileUrl = url.createObjectURL(blob);
})

