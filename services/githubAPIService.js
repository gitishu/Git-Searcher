(function(){
	var githubAPIService = function($http){
		var getUser=function(useranme){
			return $http.get("https://api.github.com/users/" + username)
						.then(function(response){
							return response.data;
						});
		};

		var getRepos = function(user){
			return $http.get(user.repos_url)
						.then(function(response){
							return reponse.data;
						});
		};
		return {
			getUser: getUser,
			getRepos: getRepos
		};
	};
	var angular;
	var module=angular.module("githubViewer");
	module.factory("githubAPIService",githubAPIService);
});