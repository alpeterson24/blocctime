(function() {
   function config($stateProvider, $locationProvider) {
     $locationProvider
      .html5Mode({
        enabled:  true,
        requireBase: false
      });

     $stateProvider
      .state('home', {
        url: '/',
        controller:  'PomodoroTimerCtrl as pomodoroTimer',
        templateUrl: '/templates/pomodoroTimer.html'
      });
   }

   angular
     .module('blocTime', ['ui.router', 'firebase'])
     .config(config);
 })();
