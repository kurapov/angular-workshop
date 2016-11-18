angular.module('app').factory('logInterceptor', function ($log) {
    return {
        request: function (config) {
            $log.log('Request start:');
            // $log.log(config);

            return config;
        },
        requestError: function () { },
        response: function (response) {
            $log.log('Request end:');
            // $log.log(response);
            

            return response;
        },
        responseError: function () { }
    }
});