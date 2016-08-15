
app.config(function ($stateProvider) {
    $stateProvider.state('editor', {
        url: '/editor/:id',
        controller: 'EditorController',
        templateUrl: 'js/editor/editor.html',
        resolve: {
          theProject: function (ProjectFactory, $stateParams, $state) {
            return ProjectFactory.getAllElements($stateParams.id)
            .then(function(res){
              if (!res.length) return $state.go('home'); //redirect if the projectId does not belong to user
              res[0].elements.forEach(function (element) {
                delete element['id'];
              });
              return res[0];
            })
          }
        }
    });
});


app.controller('EditorController', function ($scope, $rootScope, EditorFactory, ProjectFactory, theProject) {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    var numElem = theProject.elements.size;
    $scope.elements = theProject.elements;
    $scope.projectName = theProject.name;

    $scope.colors = ['black', 'brown', 'red', 'deep-orange', 'yellow', 'light-green', 'light-blue', 'indigo', 'purple', 'white', 'grey', 'pink', 'orange', 'lime', 'green', 'teal', 'blue', 'deep-purple'];

    $scope.shades = ['darken-4', 'darken-3', 'darken-2', 'original', 'lighten-1', 'lighten-2', 'lighten-3', 'lighten-4', 'lighten-5']

    var duplicateNavbar = false;
    $scope.addComponent = function (type) {
      if(type==='button'){
        $scope.elements.push({type: type, projectId: theProject.id, color: 'blue', shade: 'original', top: 100, left: 400});
      }
      else if(type==='navbar' && duplicateNavbar===false) {
        $scope.elements.push({type: type, projectId: theProject.id, color: 'blue', shade: 'original', elemId: numElem++});
        duplicateNavbar=true;
      }
      else if(type==='navbar' && duplicateNavbar) alert('Navbar already exists!')
      else $scope.elements.push({type: type, projectId: theProject.id, top:100, left: 400, width: 200, height: 150});
      $('.button-collapse').sideNav('hide');
    }

    $scope.addImage = function () {
      $scope.elements.push({type: 'image', url: $scope.image.url, projectId: theProject.id, top: 0, left: 0});
      $('.button-collapse').sideNav('hide');
    }

    $scope.changeProjectName = function () {
      return ProjectFactory.updateName(theProject.id, $scope.projectName);
    }

    $scope.finished = function () {
      EditorFactory.deleteElements(theProject.id)
      .then(function(){
        $scope.elements.map(element => EditorFactory.createElement(element))
      })
      .then(function(){
        console.log('success!');
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

