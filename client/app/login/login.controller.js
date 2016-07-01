'use strict';
(function(){

class LoginComponent {
	constructor(authService) {
		this.username = '';
		this.password = '';
		this.users = {};
		this.error = '';
		this.authService = authService;
	}

	login(){
		this.authService.login({username: this.username, password: this.password})
		.then(response=>{
			if(response)
				this.authService.saveToken(response)
			this.error = 'Incorrect credentials';
		})
		.catch(err=>{console.log(err)});
	}
}

LoginComponent.$inject = ['authService'];

angular.module('angularnewApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'lg'
  });

})();
