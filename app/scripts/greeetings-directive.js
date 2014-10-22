(function () {
  'use strict';

  angular
    .module('app')
    .directive('greetings', greetings);

  function greetings() {
    var directive = {
      restrict: 'EA',
      template: '<h2>Hello, {{vm.name}}!</h2>',
      controller: GreetingsController,
      controllerAs: 'vm'
    };
    return directive;

    function GreetingsController() {
      var vm = this;

      vm.name = 'Angular'
    }
  }

}());