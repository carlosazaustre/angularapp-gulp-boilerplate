(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app', ['ngRoute', 'app.controllers', 'app.services', 'blog.templates'])
    .config(config);

  /* @ngInject */
  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/post-list.tpl.html',
        controller: 'PostListCtrl',
        controllerAs: 'postlist'
      })
      .when('/:postId', {
        templateUrl: 'views/post-detail.tpl.html',
        controller: 'PostDetailCtrl',
        controllerAs: 'postdetail'
      });
  }

})();
