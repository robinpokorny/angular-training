(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['pokedex'];
  function MainController(pokedex) {
    var vm = this;
    vm.pokemons = [];
    vm.newPokemon = {};
    vm.addNewPokemon = addNewPokemon;

    loadPokemons();

    function loadPokemons() {
      return pokedex.getPokemons()
        .then(function(data) {
          vm.pokemons = data;
          return vm.pokemons;
        });
    }

    function addNewPokemon() {
      if (vm.newPokemon.name && vm.newPokemon.id) {
        vm.newPokemon.resource_uri = 'api/v1/pokemon/' + vm.newPokemon.id + '/';
        pokedex.addPokemon(vm.newPokemon);
        vm.newPokemon = {};
      }
    }
  }

}());