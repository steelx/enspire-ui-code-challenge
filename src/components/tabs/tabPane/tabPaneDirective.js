(function() {
    'use strict';

    angular.module('enspire.ui.components.tabs')
        .directive('enTabPane', TabPaneDirective);

    /**
     * @ngdoc directive
     * @name enTabPane
     * @module enspire.ui.components.tabs
     * @restrict E
     * @description
     * `en-tab-pane`...
     *
     * @element en-tab-pane
     *
     * @param {string=}      name   Tab pane name to associate appropriate tab.
     *
     */

    TabPaneDirective.$inject = ["$enTabs"];
    function TabPaneDirective($enTabs) {
        return {
            restrict: 'E',
            require: "^enTabContainer",
            link: postLink
        };

        function postLink($scope, $element, $attrs, tabContainerCtrl) {
            /**
             *
             * YOUR CODE GOES HERE
             *
             * */
        }
    }
})();