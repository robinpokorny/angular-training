

angular
    .module('pokedex')
    .directive('pokeDetail', pokeDetail)


function pokeDetail () {
  var directive = {
    restrict: 'E',
    template: '<h1>{{ prefix }} {{ pokemon.name }}</h1>',
    scope: {
      'pokemon': '=data',
      'alterative': '=',
      'prefix': '@'
    },
    link: link
  }
  return directive
}

function link (scope, element, attribute) {
  element.on('click', function () {
    element.toggleClass('alt')
  })
}