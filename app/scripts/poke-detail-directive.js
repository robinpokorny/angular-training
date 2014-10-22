(function () {
  'use strict';

  angular
    .module('app')
    .directive('pokeDetail', pokeDetail);

  function pokeDetail() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'templates/poke-detail.html',
      scope: {
        'pokemon': '='
      },
      link: link
    };
    return directive;

    function link(scope, element, attrs) {
      element.on('click', function(event) {
        element.toggleClass(attrs.emphasizeClass);
      })
    }
  }

}());