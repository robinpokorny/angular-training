

angular
    .module('mojeapi', [])
    .factory('pokeapi', pokeapi)

pokeapi.$inject = ['$http']
function pokeapi ($http) {
  var service = {
    getPokemons: getPokemons
  }

  return service

  function getPokemons () {
    return $http
      .get('http://pokeapi.co/api/v2/pokedex/1/')
      .then(function (data) {
        if (data.status === 200) {
          return data.data.pokemon_entries
        } else {
          console.error('Něco nevyšlo…')
        }
      })
  }
}