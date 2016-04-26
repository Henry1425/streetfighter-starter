/*starting document ready*/
$(document).ready(function () {


/*On page load--> display default state*/
$('.ryu-action').hide();
$('.ryu-still').show();

/*on mouse over display ryu-ready*/
/*—> mouseenter—> display ryu-ready (and hide everything else)*/
$('.ryu').mouseenter(function() {
console.log('enter');
$('.ryu-action').hide();
$('.ryu-ready').show();

});
/*—> mouseleave —> display the default state --> ryu-still (and hide everything else)*/
$('.ryu')..mouseleave(function() {
  $('.ryu-action').hide();//(hides all 4 dives)
  $('.ryu-still').show();
});


/*on click display ryu-throwing(hide everything else)*/
/*—> mousedown —> display ryu-throwing (and hide everything else)*/
$('.ryu').mousedown(function() {
   playHadouken();
   $('.ryu-action').show();
   $('.ryu-throwing').show();.animate({
     //this is end point for the animation
                'left': '300px'
  },
     //this is speed of the animation in milliseconds (500ms = 05 sec)
     500,
     function () {
          $(this).stop();
          $(this).hide();
           //this is start point for the animation
          $(this).css('left', '-212px');
       }
     );
  });
 /*    —> mouseup —> display the default state --> ryu-still (and hide everything else)*/
 $('.ryu').mouseup(function () {
         $('.ryu-action').hide(); //(this line means hide all 4 divs)
         $('.ryu-still').show();
     });

/*on key press
        —> keydown —> display ryu-cool (and hide everything else)*/
        $(document).keydown(function (key) {
                //keyCode == 88 is the X key
                if (key.keyCode == 88) {
                    $('.ryu-action').hide(); //(this line means hide all 4 divs)
                    $('.ryu-cool').show();
                    playCool()
                }
            });
/*—> keyup —> display the default state --> ryu-still (and hide everything else)*/
$(document).keyup(function (key) {
       if (key.keyCode == 88) {
           $('.ryu-action').hide(); //(this line means hide all 4 divs)
           $('.ryu-still').show();
           $('#cool')[0].pause();
       }
   });


   //close document ready
});
