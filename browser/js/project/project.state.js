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
    .then(function(){
      $state.reload()
    });
  }

	$scope.deleteProject = function(id){
		ProjectFactory.deleteById(id)
		.then(function(){
			$state.reload()
		});
	}

  $scope.loadProject = function(input) {
    $state.go('editor', { id: input });
  }

  $scope.renderCode = function(id) {
    ProjectFactory.getAllElements(id)
    .then(function(allElements){
      $state.go('renderCode', { elements: allElements[0].elements})
    })
  }
})