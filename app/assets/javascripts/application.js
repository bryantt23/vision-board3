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
//= require jquery.turbolinks
//= require turbolinks
//= require jQueryRotate
//= require_tree .



$(function(){

  // var interval;
  //     var minutes = 25;
  //     var seconds = 0;

  // function countdown(element) {
  //     interval = setInterval(function() {
  //         var el = document.getElementById(element);
  //         if(seconds == 0) {
  //             if(minutes == 0) {
  //                 alert(el.innerHTML = "countdown's over!");
  //                 clearInterval(interval);
  //                 return;
  //             } else {
  //                 minutes--;
  //                 seconds = 60;
  //             }
  //         }
  //         if(minutes > 0) {
  //             var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
  //         } else {
  //             var minute_text = '';
  //         }
  //         var second_text = seconds > 1 ? 'seconds' : 'second';
  //         el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
  //         seconds--;
  //     }, 1000);
  // }
  //
  //
  //
  // var reset = document.getElementById('reset');
  // reset.onclick = function() {
  //     minutes = 25;
  //     seconds = 0;
  //     clearInterval(interval);
  //     interval = null;
  // }
  // var start = document.getElementById('start');
  //
  // start.onclick = function() {
  //     if (!interval) {
  //         countdown('countdown');
  //     }
  // }




  // code for the about page dog image
  function fadeIn() {
    jQuery("#no_idea_dog").fadeIn(5000);
    fadeOut();
  }

  function fadeOut() {
    jQuery("#no_idea_dog").fadeOut(5000);
    fadeIn();
  }

  // calls orginal method so it loops endlessly
  fadeOut();




});
