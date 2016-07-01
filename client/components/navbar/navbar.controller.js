'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard
  constructor(authService, $window, $location) {
    this.authService = authService;
    this.window = $window;
    this.location = $location;
  }

  logOut(){
    this.authService.logOut(this.authService.getToken())
    .then(response=>{
      if(response)
         this.location.path('/');
    })
    .catch(err=>console.log(err));
  }
}

NavbarController.$inject = ['authService', '$window', '$location'];

angular.module('angularnewApp')
  .controller('NavbarController', NavbarController);
