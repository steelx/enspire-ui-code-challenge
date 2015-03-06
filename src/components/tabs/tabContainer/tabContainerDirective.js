(function(){
    'use strict';

    angular.module('enspire.ui.components.tabs')
        .directive('enTabContainer', TabContainerDirective);

    /**
     * @ngdoc directive
     * @name enTabContainer
     * @module enspire.ui.components.tabs
     * @restrict E
     * @description
     * `en-tab-container`...
     *
     * @element en-tab-container
     *
     * @param {string=}      name                 Tab container name.
     *
     */

    TabContainerDirective.$inject = ["$enTabs"];
    function TabContainerDirective($enTabs) {
        return {
            restrict: 'E',
            controller: 'enTabContainerController',
            link: postLink
        };

        function postLink($scope, $element, $attrs) {
            /**
             *
             * YOUR CODE GOES HERE
             *
             * */
        }
    }
})();