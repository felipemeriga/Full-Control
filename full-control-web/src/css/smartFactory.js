
'use strict';

angular.module('myApp')
    .factory('smartFactory', function ($http, API_ENDPOINT) {
        return {
            changeButtonState: function() {
                return $http({
                    method: 'GET',
                    url: '/lampada'
                })
            }
            }
        });
