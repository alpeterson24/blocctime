(function() {
  function PomodoroTimerCtrl($scope, $interval) {
    const WORK_TIME = 25 * 60;
    const BREAK_TIME = 5 * 60;

    var timer;

    var timerTick = function() {
      if ($scope.currentState != 'work-paused') {
        $scope.currentTime -= 1;
      }
      if ($scope.currentTime <= 0) {
        $interval.cancel(timer);
        if ($scope.currentState === 'working') {
          startBreak();
        } else if ($scope.currentState === 'on-break') {
          initializeTimer();
        }
      }
    };

    var startTimer = function(timeInSeconds) {
      $scope.currentTime |= timeInSeconds;
      timer = $interval(timerTick, 1000);
    };

    var initializeTimer = function() {
      $interval.cancel(timer);
      $scope.currentState = 'initial';
      $scope.buttonText = 'Start';
      $scope.currentTime = WORK_TIME;
    };
    var pauseWork = function() {
      $scope.currentState = 'work-paused';
      $scope.buttonText = 'Resume';
    };

    var resumeWork = function() {
      $scope.currentState = 'working';
      $scope.buttonText = 'Pause';
    }

    var startWork = function() {
      startTimer (WORK_TIME);
      $scope.currentState = 'working';+      $scope.buttonText = 'Pause';
    };

    var startBreak = function () {
      startTimer (BREAK_TIME);
      $scope.currentState = 'on-break';
      $scope.buttonText = 'Continue';
    };

    $scope.currentState = 'initial';
    $scope.currentTime  = WORK_TIME;
    $scope.buttonText   = 'Start';

    $scope.timerStateChange = function() {
      switch($scope.currentState) {
        case 'initial':
          startWork();
          break;
        case 'working':
          pauseWork();
          break;
        case 'work-paused':
          resumeWork();
          break;
        case 'on-break':
          initializeTimer();
          break;
        default:
          $scope.currentState = 'initial';
      };
    };

    $scope.resetTimer = function () {
      initializeTimer();
    };
  }

  angular
    .module('blocTime')
    .controller('PomodoroTimerCtrl', ['$scope', '$interval', PomodoroTimerCtrl]);
})();
