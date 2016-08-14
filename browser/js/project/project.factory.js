app.factory('ProjectFactory', function($http) {

  var project = {};

  project.getProjects = function() {
    return $http.get('/api/projects')
    .then(function(res){
      console.log(res.data);
      return res.data;
    })
  }

  project.deleteById = function(id){
    return $http.delete('/api/projects/' + id)
    .then(function(res){
      return res.data;
    })
  }

  project.create = function(elements){
    return $http.post('/api/projects/create', elements)
    .then(function(res){
      return res.data;
    })
  }

  project.getAllElements = function (projectId) {
    return $http.get('/api/projects/' + projectId)
    .then(function(res){
      return res.data;
    })
  }

  return project;
})
