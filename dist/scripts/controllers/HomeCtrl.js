(function() {
   function HomeCtrl(Timer) {
    this.timer = Timer;
   }

   angular
       .module('bloctime')
       .controller('HomeCtrl', ['Timer', HomeCtrl]);
 })();
