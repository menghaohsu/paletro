
app.config(function ($stateProvider) {
    $stateProvider.state('editor', {
        url: '/editor/:id',
        controller: 'EditorController',
        templateUrl: 'js/editor/editor.html',
        resolve: {
          theProject: function (ProjectFactory, $stateParams) {
            return ProjectFactory.getAllElements($stateParams.id)
            .then(function(res){
              return res[0];
            })
          }
        }
    });
});


app.controller('EditorController', function ($scope, $rootScope, EditorFactory, ProjectFactory, theProject) {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $scope.elements = theProject.elements;
    var obj = {}

    $scope.addNavbar = function () {
      $scope.elements.push({type: 'navbar'});
      $('.button-collapse').sideNav('hide');
    }

    $scope.addLogo = function () {
      $scope.elements.push({type: 'logo'});
      $('.button-collapse').sideNav('hide');
    }

    $scope.addButton = function () {
      $scope.elements.push({type: 'button'});
      $('.button-collapse').sideNav('hide');
    }

    $scope.addDiv = function () {
      $scope.elements.push({type: 'div'});
      $('.button-collapse').sideNav('hide');
    }

    $scope.addImage = function () {
      $scope.elements.push({type: 'image', url: $scope.image.url});
      $('.button-collapse').sideNav('hide');
    }

    $scope.addText = function () {
      $scope.elements.push({type: 'textbox'});
      $('.button-collapse').sideNav('hide');
    }

    $scope.addProjectName = function () {
      obj.name = $scope.projectName;
    }

    $scope.finished = function () {

      var stringedElements =JSON.stringify($scope.elements)

      obj.contents = stringedElements

      // var p = document.getElementById("canvas");
      // var pClone = p.cloneNode(true);
      // console.log(pClone);
      // console.log(p.innerHTML);
      EditorFactory.delete(1)
      .then(function(){
        $scope.elements.map(element => EditorFactory.createElement(element))
      })
      .then(function(){
        ProjectFactory.create(obj)
      })
    }

    $scope.selectedColor = 'blue';
    $scope.setColor = function (color) {
      $scope.selectedColor = color;
      $rootScope.$broadcast('colorChange', $scope.selectedColor)
    }

    $scope.setShade = function (shade) {
      $scope.selectedShade = shade;
      $rootScope.$broadcast('shadeChange', $scope.selectedShade)
    }

});

