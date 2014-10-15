(function () {
  'use strict';

  angular
    .module('app', [])
    .controller('MainController', MainController);

  function MainController() {
    var vm = this,
      counter = 0;
    vm.titleList = ['Kurzy', 'Školení', 'Přednášky', 'Wokshopy'];
    vm.next = next;

    next();

    function next() {
      vm.title = vm.titleList[counter % vm.titleList.length];
      counter++;
    }
  }

}());
