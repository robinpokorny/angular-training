(function () {

  angular
      .module('pokedex')
      .controller('MainController', MainController)

  MainController.$inject = ['pokedex']
  function MainController (pokedex) {
    var vm = this

    vm.newName = ''
    vm.pokedex
    vm.list2
    vm.addPokemon = addPokemon

    activate()

    /************/

    function activate () {
      vm.pokedex = pokedex.list
      vm.list2 = pokedex.list2
    }

    function addPokemon () {
      vm.pokedex.push({
        name: vm.newName,
        id: vm.pokedex.length
      })
      vm.newName = ''
    }
  }
})()