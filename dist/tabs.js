(function() {
    'use strict';

    /**
     * @ngdoc module
     * @name enspire.ui.components.tabs
     * @description
     *
     *  Tabs Component Module..
     *
     */
    angular.module('enspire.ui.components.tabs', []);
})();
;
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
;
(function(){
    'use strict';

    angular.module('enspire.ui.components.tabs')
        .controller('enTabContainerController', TabContainerController);

    /**
     * @private
     * @ngdoc controller
     * @name TabContainerController
     * @module enspire.ui.components.tabs
     *
     */

    TabContainerController.$inject = ["$scope","$element","$attrs","$enTabs"];
    function TabContainerController($scope, $element, $attrs, $enTabs) {

    }

})();
;
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
})();;
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
})();;
(function(){
    'use strict';

    angular.module('enspire.ui.components.tabs')
        .controller('enTabsController', TabsController);

    /*
     * @private
     * @ngdoc controller
     * @name TabsController
     * @module enspire.ui.components.tabs
     *
     */

    TabsController.$inject = ["$scope","$attrs","$enTabs","$timeout"];
    function TabsController($scope,$attrs, $enTabs,$timeout) {
        var self = this;

        self.containerName = $attrs.container;

        this.removeSelected = function removeSelectedFromAll() {
            $scope.$broadcast('removeActive');
        };
    }

})();
;
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
;
(function() {
    'use strict';

    angular.module('enspire.ui.components.tabs')
        .provider('$enTabs', TabsProvider);

    function TabsProvider() {
        var self = this;

        //HINT: This holds all the containers
        var containers = {};

        self.$get = [function tabsFactory() {
            return {
                /**
                 *
                 * YOUR CODE GOES HERE
                 *
                 * */
             };

        }];
    }
})();