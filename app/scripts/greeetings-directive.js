(function () {
  'use strict';

  angular
    .module('app')
    .directive('greetings', greetings);

  greetings.$inject = ['pokedex'];
  function greetings(pokedex) {
    var directive = {
      restrict: 'EA',
      template: '<h2>Hello, {{vm.pokemons.length}} pokémons in {{::vm.name}}!</h2>',
      controller: GreetingsController,
      controllerAs: 'vm'
    };
    return directive;

    function GreetingsController() {
      var vm = this;

      vm.name = 'Angular';
      vm.pokemons = [];

      loadPokemons();

      function loadPokemons() {
        return pokedex.getPokemons()
          .then(function(data) {
            vm.pokemons = data;
            return vm.pokemons;
          });
      }
    }
  }

}());