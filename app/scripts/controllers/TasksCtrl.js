(function() {
   function TasksCtrl(Tasks, $scope) {
     $scope.allTasks = Tasks.all;

     $scope.addTask = function() {
       $scope.allTasks.$add($scope.newTask);
     }
   }

   angular
       .module('bloctime')
       .controller('TasksCtrl', ['Tasks', '$scope', TasksCtrl]);
 })();
