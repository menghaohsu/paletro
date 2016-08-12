app.config(function ($stateProvider) {
    $stateProvider.state('Projects', {
        url: '/projects',
        controller: 'ProjectController',
        templateUrl: 'js/project/projects.html',
        resolve: {
        	AllProjects: function(ProjectFactory){
        		return ProjectFactory.getProjects()
        		.then(function(projects){
        			return projects
        		})

        	}
        }
    });
});

app.controller('ProjectController', function ($scope, Home, AllProjects, ProjectFactory) {
	$scope.projects = AllProjects;

	$scope.deleter = function(id){
		ProjectFactory.deleteById(id)
		.then(function(){
			$state.reload()
		})
	}

	$scope.add = function(){
		ProjectFactory.addProject()
		.then(function(){
			$state.reload()
		})
	}

})