angular.module('app').factory('intervalService', function ($interval) {
    // var self = this;
    var count = 0;
    var cancelCalc;
    function start() {
        cancelCalc = $interval(() => this.count++, 1000);
    }
    function stop() {
        $interval.cancel(cancelCalc);
    }

    return {
        start,
        stop,
        count
    }
})