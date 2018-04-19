

angular.module('myApp',[]).controller('smartController', function($scope,$q,smartService,$q, $filter) {
	
   $scope.changeButtonState = function () {
                var d = $q.defer();
                smartService.changeButtonState().then(function (response) {
                    d.resolve(response);
                });
                return d.promise;
            };
  
	$scope.ae = function() {
	
		console.log('AEEE');
	};

  
  
});
