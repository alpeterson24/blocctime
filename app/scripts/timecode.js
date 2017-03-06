(function() {
  function timecode() {
    return function(seconds) {

      if (Number.isNaN(seconds)) {
        return '--:--';
      }

      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;
      var output = minutes + ':';

      if (remainingSeconds < 10) {
        output += '0';
      }

      output += remainingSeconds;

      return output;
    };
  }

  angular
    .module('blocTime')
    .filter('timecode', timecode);
})();
