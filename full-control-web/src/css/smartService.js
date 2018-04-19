


'use strict';
angular.module('myApp')
    .service('smartService', function ($q, $filter, smartFactory) {

        /** get ibc agreements  **/
        this.changeButtonState = function () {
            var d = $q.defer();
            smartFactory.changeButtonState().then(function (response) {
                d.resolve(response);
            });
            return d.promise;
        };
	});
