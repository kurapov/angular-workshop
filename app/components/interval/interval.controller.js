angular.module('app').controller('IntervalController', function (intervalService) {
    var vm = this;

    vm.count = () => intervalService.count;
    vm.start = () => intervalService.start();
    vm.stop = () => intervalService.stop();
});