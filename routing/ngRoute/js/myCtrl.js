angular.module('myApp')

.controller('myCtrl', function() {
  var vm = this;

  // Test input
  vm.test = 'hi there';
  vm.home = 'this is the home page';
  vm.page1 = 'this is page 1';
  vm.page2 = 'this is page 2';

  $('#myNav > li').click(function() {
    // console.log(this);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

})
