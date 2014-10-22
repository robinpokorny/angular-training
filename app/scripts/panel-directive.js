(function () {
  'use strict';

  angular
    .module('app')
    .directive('panel', panel);

  function panel() {
    var directive = {
      restrict: 'E',
      transclude: true,
      templateUrl: 'templates/panel.html'
    };
    return directive;
  }
}());