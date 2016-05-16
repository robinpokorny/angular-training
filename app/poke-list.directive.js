
angular
  .module('pokedex')
  .directive('pokeList', pokeList)

function pokeList (pokedex) {
  var directive = {
    restrict: 'E',
    templateUrl: 'templates/poke-list.html',
    transclude: true
  }
  return directive
}