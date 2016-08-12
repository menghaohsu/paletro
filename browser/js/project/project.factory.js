app.factory('ProjectFactory', function($http) { 

  var project = {};


  project.getProjects = function() {
    return $http.get('/projects')
    .then(function(res){
      return res.data
    })
  }

  project.deleteById = function(id){
    return $http.delete('/projects/' + id)
      .then(function(response){
        return response.data
      })
  }


  project.addProject = function(){
    return $http.create('/projects')
    .then(function(response){
      return response.data
    })
  }
return project;
})
