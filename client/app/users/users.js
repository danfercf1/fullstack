'use strict';

angular.module('angularnewApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        template: '<users></users>'
      });
  });
