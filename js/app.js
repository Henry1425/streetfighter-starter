/*start document ready*/
$(document).ready(function () {


/*On page load---> display default state*/
$('.ryu-action').hide();
$('.ryu-still').show();

/* On mouse over display ryu-ready*/
/*-->mouseenter--> display ryu-ready (and hide everything else)*/
$('.ryu').mouseenter(function() {
alert('mouse entered .ryu div');
$('.ryu-action').hide();
$('.ryu-ready').show();

});
/*-->mouseleave --> display the default state --> ryu-still (and hide everything else)*/
$('.ryu').mouseleave(function() {
  $('.ryu-action').hide(); //(hides all 4 divs)*/
  $('.ryu-still').show();
});


/*On click display ryu-throwing (hide everything else)*/
/*--> mousedown --> display ryu-throwing (and hide everything else)*/
$('.ryu').mousedown(function() {
   playHadouken();
   $('ryu-action').hide();//(this line means hide all 4 divs)
   $('.ryu-action').show();
   $('.ryu-throwing').show();.animate({
     //this is end point for the animation
                'left': '300px'
  },
  //this is the speed of the animation in milliseconds (500ms = 0.5 sec)
     500,
     function () {
          $(this).stop();
          $(this).hide();
           //this is the start point for the animation
          $(this).css('left', '-212px');
       }
     );
  });
  /* --> mouseup --> displaythe default state --> ryu-still (and hide everything else)*/
 $('.ryu').mouseup(function () {
         $('.ryu-action').hide();//(this line means hide all 4 divs)
         $('.ryu-still').show();
     });

/* On key press
        -> keydown -> display ryu-cool (and hide everything else)*/
        $(document).keydown(function (key) {
                //keyCode == 88 is the X key
                if (key.keyCode == 88) {
                    $('.ryu-action').hide(); //(This line means hide all 4 divs)
                    $('.ryu-cool').show();
                    playCool()
                }
            });
/*-> keyup -> display the default state --> ryu-still (and hide everything else)*/
$(document).keyup(function (key) {
       if (key.keyCode == 88) {
           $('.ryu-action').hide(); //(this line means hide all 4 divs)
           $('.ryu-still').show();
           $('#cool')[0].pause();
       }
   });


  //close document ready
});
