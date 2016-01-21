
angular.module('module1', []);

angular.module('module1').controller('modcontroller', ['$scope', function($scope) {



		$scope.userClick = function() {

			$scope.userHide = true;
			$scope.inputHide = true;
		}


	}])