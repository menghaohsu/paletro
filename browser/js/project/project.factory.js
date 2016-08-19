app.factory('ProjectFactory', function($http) {

  var project = {};

  project.getProjects = function() {
    return $http.get('/api/projects')
    .then(function(res){
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

  project.getAllPages = function (projectId) {
    return $http.get('/api/projects/' + projectId)
    .then(function(res){
      return res.data;
    })
  }

  project.deleteAllElements = function(projectId) {
    return $http.delete('/api/elements/' + projectId)
  }

  project.updateName = function (projectId, name) {
    return $http.put('/api/projects/' + projectId, {name: name})
    .then(function (res) {
      return res.data;
    })
  }

  project.updateBgColor = function (projectId, color, shade) {
    return $http.put('/api/projects/' + projectId, {bgcolor: color, bgshade: shade})
    .then(function (res) {
      return res.data;
    })
  }

  return project;
})
