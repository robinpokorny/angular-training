(function () {
  'use strict';

  angular
    .module('app')
    .factory('pokedex', pokedex);

  pokedex.$inject = ['pokeApi'];
  function pokedex(pokeApi) {

    var pokemons = [];
    var service = {
      getPokemons: getPokemons,
      addPokemon: addPokemon
    };
    loadPokemons();
    return service;

    function loadPokemons() {
      return pokeApi.getPokemons()
        .then(function(data) {
          data.map(addIdToPokemon).forEach(addPokemon);
          return pokemons;
        });
    }

    function getPokemons() {
      return pokemons;
    }
    function addPokemon(pokemon) {
      pokemons.push(pokemon);
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
}());