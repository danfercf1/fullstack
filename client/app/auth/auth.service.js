'use strict';

class authService{
	constructor($http, $window){

		this.http = $http;
		this.window = $window;

	}

	login(authData){

		let that = this;

		return that.http({
			url: 'http://127.0.0.1:1337/users/login',
			method: "POST",
			data: JSON.stringify({username: authData.username, password: authData.password}),
			headers: {'Content-Type': 'application/json'}
			})
			.then(response=>{
				if(response.data.token)
					return response.data.token;
				return false;
			}).catch(err=>new Error(err));
	};

	logOut(token){
		return this.http({
			    url: 'http://127.0.0.1:1337/users/logout',
			    method: "POST",
			    headers: {
			    	'Content-Type': 'application/json',
			    	'Authorization': 'Bearer '+ token
		    }
		})
		.success(response=>{
			if(response.SUCCESS)
				this.deleteToken();
		})
		.catch(err=>{
			if(err.status == 401)
				if(this.deleteToken())
					return {err: 401}
			return {err: err.status}
		});
	}

	isAuthed(){
		if(this.getToken())
			return true;
		return false;
	}

	getToken(){
		if(this.window.localStorage.jwtToken)
			return this.window.localStorage.jwtToken;
		return false;
	}

	saveToken(token) {
  		this.window.localStorage.jwtToken = token;
  		if(this.window.localStorage.jwtToken)
  			return true;
  		return false;
	};
	
	deleteToken(){
		this.window.localStorage.removeItem('jwtToken');
		if(this.window.localStorage.jwtToken)
			return false;
		return true;
	}
}

authService.$inject = ['$http', '$window'];

angular.module('angularnewApp.authService', [])
  .service('authService', authService);
