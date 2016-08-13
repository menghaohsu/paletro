app.factory('Home', function($http){
	var HomeFactory = {};

	HomeFactory.create = function(element){
		return 	$http.post('/api/elements', element)
		.then(function(res){
			return res.data;
		})
	}

	HomeFactory.getWebpage = function(id){
		return $http.get('/api/elements/'+ id)
		.then(function(res){
			return res.data;
		})
	}

	HomeFactory.update = function(id,element){
		return $http.put('/api/elements/' + id, element)
		.then(function(res){
			return res.data;
		})
	}

	HomeFactory.delete = function(id){
		return $http.delete('/api/elements/'+id)
	}
	return HomeFactory;
})