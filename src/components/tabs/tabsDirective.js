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
     * @param {string=}      container          Defines name of container () that the tabs reside in.
     *
     */

    function TabsDirective() {
        return {
            restrict: 'E',
            controller: 'enTabsController',
            link: postLink
        };

        function postLink($scope, $element, $attrs) {
            /**
             *
             * YOUR CODE CAN GO HERE
             *
             * */
         }
    }
})();