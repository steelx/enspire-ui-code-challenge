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

        this.setActivePane = function setActivePane(pane) {
            //
        };
    }

})();
