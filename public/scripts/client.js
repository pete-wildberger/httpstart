//declare our intention to use and Angular module app
var app = angular.module('myApp',[]);

app.controller('HttpIntro', HttpIntroController);


function HttpIntroController($http) {
  var vm = this;
  console.log('controller is loaded');
}//end controller function
