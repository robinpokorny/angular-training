(function () {
  'use strict';

  angular
    .module('app', [])
    .controller('MainController', MainController);

  function MainController() {
    var vm = this;

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
