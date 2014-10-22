(function () {
  'use strict';

  angular
    .module('app')
    .factory('pokedex', pokedex);

  pokedex.$inject = ['$http'];
  function pokedex($http) {
    var pokemons = [];
    var service = {
      getPokemons: getPokemons,
      addPokemon: addPokemon
    };
    return service;

    function getPokemons() {
      //return $http.get('api/pokedex.json')
      return $http.get('http://pokeapi.co/api/v1/pokedex/1/')
        .then(getPokemonsComplete)
        .catch(getPokemonsFailed);

      function getPokemonsComplete(response) {
        return response.data.pokemon.map(addIdToPokemon);
      }

      function getPokemonsFailed(error) {
        console.log('XHR Failed for getPokemons.' + error.data);
      }
    }

    function addPokemon(pokemon) {
      pokemons.push(pokemon)
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