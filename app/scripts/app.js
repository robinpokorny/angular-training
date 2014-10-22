(function () {
  'use strict';

  angular
    .module('app', [])
    .controller('MainController', MainController);

  function MainController() {
    var vm = this;
    vm.pokemons = pokemons.map(addIdToPokemon);
    vm.newPokemon = {};
    vm.addNewPokemon = addNewPokemon;

    function addNewPokemon() {
      if (vm.newPokemon.name && vm.newPokemon.id) {
        vm.newPokemon.resource_uri = 'api/v1/pokemon/' + vm.newPokemon.id + '/';
        vm.pokemons.push(vm.newPokemon);
        vm.newPokemon = {};
      }
    }

    function getIdFromUri(uri) {
      var re = /(\d+)\/$/,
        id = uri.match(re)[1];

      return parseInt(id, 10);
    }

    function addIdToPokemon(pokemon) {
      pokemon.id = getIdFromUri(pokemon.resource_uri);
      return pokemon;
    }
  }

  var pokemons = [
    {
      "name": "rattata",
      "resource_uri": "api/v1/pokemon/19/"
    },
    {
      "name": "charmander",
      "resource_uri": "api/v1/pokemon/4/"
    },
    {
      "name": "charmeleon",
      "resource_uri": "api/v1/pokemon/5/"
    },
    {
      "name": "wartortle",
      "resource_uri": "api/v1/pokemon/8/"
    },
    {
      "name": "blastoise",
      "resource_uri": "api/v1/pokemon/9/"
    },
    {
      "name": "caterpie",
      "resource_uri": "api/v1/pokemon/10/"
    },
    {
      "name": "metapod",
      "resource_uri": "api/v1/pokemon/11/"
    },
    {
      "name": "butterfree",
      "resource_uri": "api/v1/pokemon/12/"
    },
    {
      "name": "spearow",
      "resource_uri": "api/v1/pokemon/21/"
    },
    {
      "name": "kakuna",
      "resource_uri": "api/v1/pokemon/14/"
    },
    {
      "name": "beedrill",
      "resource_uri": "api/v1/pokemon/15/"
    }
  ]

}());
