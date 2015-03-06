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