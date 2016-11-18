angular.module('app').controller('HomeController', function(taskService) {
    var vm = this;

    vm.$onInit = function() {
        taskService.getTasks().then(tasks => vm.tasks = tasks);
    }
    
    vm.message = 'Hello Angular';
});