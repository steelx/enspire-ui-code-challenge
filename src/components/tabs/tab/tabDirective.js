(function(){
    'use strict';

    angular.module('enspire.ui.components.tabs')
        .directive('enTab', TabDirective);

    /**
     * @ngdoc directive
     * @name enTab
     * @module enspire.ui.components.tabs
     * @restrict E
     *
     * @element en-tab
     *
     * @param {string=}      pane                 Pane content that should load into the tab if set.
     * @param {boolean=}     selected             Determines active tab.
     *
     * @description
     * `en-tab`...
     *
     */

    TabDirective.$inject = ["$enTabs"];
    function TabDirective($enTabs) {
        return {
            restrict: 'E',
            require: "^enTabs",
            link: postLink
        };

        function postLink($scope, $element, $attrs, tabsCtrl) {
            /**
             *
             * YOUR CODE GOES HERE
             *
             * */
        }
    }
})();