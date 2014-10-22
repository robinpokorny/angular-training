(function () {
  'use strict';

  angular
    .module('app')
    .factory('pokeApi', pokeApi);

  pokeApi.$inject = ['$http'];
  function pokeApi($http) {
    var service = {
      getPokemons: getPokemons
    };
    return service;

    function getPokemons() {
      return $http.get('api/pokedex.json')
      //return $http.get('http://pokeapi.co/api/v1/pokedex/1/')
        .then(getPokemonsComplete)
        .catch(getPokemonsFailed);

      function getPokemonsComplete(response) {
        return response.data.pokemon;
      }

      function getPokemonsFailed(error) {
        console.log('XHR Failed for getPokemons.' + error.data);
      }
    }
  }
}());