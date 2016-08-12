app.factory('Home', function($http){
	var HomeFactory = {};

	HomeFactory.create = function(element){
		return $http.post('/elements', element)
		.then(function(res){
			return res.data;
		})
	}

	HomeFactory.getWebpage = function(id){
		return $http.get('/elements/'+ id)
		.then(function(res){
			return res.data;
		})
	}

	HomeFactory.update = function(id,element){
		return $http.put('/elements/' + id, element)
		.then(function(res){
			return res.data;
		})
	}
	return HomeFactory;
})