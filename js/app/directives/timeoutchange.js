/**
 * Copyright (c) 2013, Bernhard Posselt <nukeawhale@gmail.com>
 * This file is licensed under the Affero General Public License version 3 or later.
 * See the COPYING file.
 */

/**
 * Like ng-change only that it does not fire when you type faster than
 * 300 ms
 */
app.directive('notesTimeoutChange', ['$timeout', function ($timeout) {
	return {
		restrict: 'A',
		link: function (scope, element, attributes) {
			var interval = 300;  // 300 miliseconds timeout after typing
			var timeout;

			$(element).keyup(function () {
				var now = new Date().getTime();
				$timeout.cancel(timeout);

				timeout = $timeout(function () {
					scope.$apply(attributes.notesTimeoutChange);
				}, interval);

				lastChange = now;
			});
		}
	};
}]);