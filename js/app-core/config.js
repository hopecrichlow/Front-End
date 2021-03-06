let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    .state('root.pet-reg', {
      url: '/pet-reg',
      controller: 'PetRegController as vm',
      templateUrl: 'templates/app-user/pet-reg.tpl.html'
    })
    .state('root.profile', {
      url: '/profile',
      controller: 'ProfileController as vm',
      templateUrl: 'templates/app-user/profile.tpl.html'
    })
    .state('root.map', {
      url: '/map',
      controller: 'MapController as vm',
      templateUrl: 'templates/app-map/map.tpl.html'
    });
    

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;