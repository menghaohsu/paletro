app.config(function ($stateProvider) {
    $stateProvider.state('projects', {
        url: '/projects',
        controller: 'ProjectController',
        templateUrl: 'js/project/projects.html',
        resolve: {
        	AllProjects: function(ProjectFactory){
        		return ProjectFactory.getProjects()
        		.then(function(projects){
        			return projects;
        		});
        	}
        }
    });
});

app.controller('ProjectController', function ($scope, AllProjects, ProjectFactory, $state) {

	$scope.projects = AllProjects;

  $scope.addProject = function(){
    ProjectFactory.create()
    .then(function(project){
      $scope.loadProject(project.id);
    });
  }

	$scope.deleteProject = function(id){
    if(confirm('Are you sure to delete this project?')){
      ProjectFactory.deleteAllElements(id)
      .then(function () {
        return ProjectFactory.deleteById(id);
      })
  		.then(function () {
  			$state.reload();
  		});
    }
	}

  $scope.loadProject = function(input) {
    $state.go('editor', { id: input });
  }

  $scope.exportCode = function(input) {
    $state.go('exportCode', { id: input });
  }
})