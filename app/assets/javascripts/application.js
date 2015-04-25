// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jQueryRotate
//= require_tree .

$(function(){

// // this makes the dog image rotate continuously
//   var angle = 0;
//   setInterval(function(){
//         angle+=.5;
//        $("#no_idea_dog").rotate(angle);
//   },50);


  function fadeIn() {
      jQuery("#no_idea_dog").fadeIn(5000);
      fadeOut();
  }

  function fadeOut() {
      jQuery("#no_idea_dog").fadeOut(5000);
      fadeIn();
  }

  fadeOut();

});
