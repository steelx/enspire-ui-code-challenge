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
            var tabHeadEl = angular.element($element),
            pane = $attrs.pane,
            selected = $attrs.selected;

            tabHeadEl.on('click', function tabHeadElClick(evt) {
                tabsCtrl.removeSelected();
                tabsCtrl.setActivePane(pane);
                selected = true;
                setSelected();
            });

            setSelected();
            function setSelected() {
                if(selected){
                    tabHeadEl.addClass('active');
                }
            }
        }
    }
})();
