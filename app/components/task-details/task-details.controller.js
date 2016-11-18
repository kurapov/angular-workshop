angular.module('app').controller('TaskDetailsController',
    function ($window, $routeParams, taskService) {
        var vm = this;
        
        vm.myvar = $routeParams.myvar;
        vm.goBack = goBack;

        vm.$onInit = function () {
            taskService.getTaskByIndex($routeParams.id).then(task => vm.task = task);
            // vm.task = taskService.getTaskByIndex($routeParams.id);
        }

        function goBack() {
            $window.history.back();
        }
    });