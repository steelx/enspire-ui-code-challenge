(function(){
    'use strict';

    angular.module('enspire.ui.components.tabs')
        .directive('enTabs', TabsDirective);

    /**
     * @ngdoc directive
     * @name enTabs
     * @module enspire.ui.components.tabs
     * @restrict E
     * @description
     * `en-tabs`...
     *
     * @element en-tabs
     *
     * @param {string=}      container Defines name of container () that the tabs reside in.
     *
     */

    function TabsDirective($timeout) {
        return {
            restrict: 'E',
            controller: 'enTabsController',
            link: postLink
        };

        function postLink($scope, $element, $attrs) {
            var tabs = $element[0].children;
            $scope.$on('removeActive', removeActive);

            function removeActive() {
                angular.forEach(tabs, function functionName(el) {
                    angular.element(el).removeClass('active');
                });
            }
        }
    }
})();
