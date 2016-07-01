'use strict';
(function(){

class UsersComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('angularnewApp')
  .component('users', {
    templateUrl: 'app/users/users.html',
    controller: UsersComponent
  });

})();
