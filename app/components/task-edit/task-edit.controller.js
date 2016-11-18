angular.module('app').controller('TaskEditController', function($window, $routeParams, taskService) {
    var vm = this;

    vm.update = update;
    
    vm.$onInit = function() {
        taskService.getTaskByIndex($routeParams.id).then(data => vm.task = data);
    }

    function update() {
        taskService.updateTask($routeParams.id, vm.task).then(() => $window.history.back());
    }
});