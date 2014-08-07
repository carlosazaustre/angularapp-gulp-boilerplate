(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.services', ['ngResource'])
    .constant('BaseUrl', 'http://jsonplaceholder.typicode.com')
    .factory('Post', Post)
    .factory('Comment', Comment)
    .factory('User', User);

  /* @ngInject */
  function Post ($resource, BaseUrl) {
    return $resource(BaseUrl + '/posts/:postId',
      { postId: '@_id' }
    );
  }

  /* @ngInject */
  function Comment ($resource, BaseUrl) {
    return $resource(BaseUrl + '/comments/:commentId',
      { commentId: '@_id' }
    );
  }

  /* @ngInject */
  function User ($resource, BaseUrl) {
    return $resource(BaseUrl + '/users/:userId',
      { userId: '@_id' }
    );
  }

})();
