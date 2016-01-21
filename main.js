
angular.module('module1', []);

angular.module('module1').controller('modcontroller', ['$scope', function($scope) {


	$scope.UserInfo = ['First name', 'Email address', 'City and State'];

		$scope.nameClick = function() {

			$scope.nameHide = true;
			$scope.nameInputHide = true;

		}

			$scope.descriptionClick = function() {

			$scope.descriptionHide = true;
			$scope.descriptionInputHide = true;

		}

			$scope.addressClick = function() {

			$scope.addressHide = true;
			$scope.addressInputHide = true;

		}

		$scope.blurClick = function(event) {

			$scope.nameHide = false;
			$scope.nameInputHide = false;
			
		}

		$scope.blurClick1 = function(event) {

			$scope.descriptionHide = false;
			$scope.descriptionInputHide = false;
			
		}

		$scope.blurClick2 = function(event) {

			$scope.addressHide = false;
			$scope.addressInputHide = false;
			
		}


	}])