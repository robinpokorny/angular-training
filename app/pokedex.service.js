angular
    .module('pokedex')
    .factory('pokedex', pokedex)

pokedex.$inject = ['pokeapi', '$scope']
function pokedex (pokeapi, $scope) {
  var service = {
    list: []
  }

  pokeapi.getPokemons().then(function (data) {
    data
      .map(function (pokemon) {
        return pokemon.pokemon_species
      })
      .map(function (pokemon) {
        pokemon.id = urlToId(pokemon.url)
        return pokemon
      })
      .forEach(addPokemon)
  })
  
  return service

  function addPokemon (pokemon) {
    service.list.push(pokemon)
  }
}

var urlToId = function (url) {
  var re = /(\d+)\/$/
  var id = url.match(re)[1]
  return parseInt(id, 10)
}