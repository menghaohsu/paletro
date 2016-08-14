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

	$scope.projects = AllProjects; //the AllProjects gives us the name of the project

	/*var arr = [];	//decode the stringified AllProjects so we can access orginal content
	for (var i = 0; i<AllProjects.length; i++) {
		arr.push(JSON.parse(AllProjects[i].contents))
	}
	$scope.contents = arr;*/
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
})