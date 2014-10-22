(function () {
  'use strict';

  angular
    .module('app')
    .factory('pokedex', pokedex);

  function pokedex() {
    var pokemons = pokemonsRaw.map(addIdToPokemon);
    var service = {
      getPokemons: getPokemons,
      addPokemon: addPokemon
    };
    return service;

    function getPokemons() {
      return pokemons;
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

  var pokemonsRaw = [
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