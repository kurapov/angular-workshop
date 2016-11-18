angular.module('app').factory('taskService', function ($http, $resource) {
    // var Task = $resource('/task/:id');

    return {
        getTasks,
        getTaskByIndex,
        addTask,
        updateTask
    };

    function getTasks() {
        return $http.get('/task').then(extractResponse);
    }
    function addTask(task) {
        return $http.post('/task', task);
    }
    function updateTask(index, task) {
        return $http.put('/task/' + index, task);
    }
    function getTaskByIndex(index) {
        return $http.get('/task/' + index).then(extractResponse);
        // return Task.get({ id: index }).$promise;
    }

    function extractResponse(response) {
        return response.data;
    }
})