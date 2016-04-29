/*start document ready*/
$(document).ready(function () {
// TODO: 1) when mouse is clicked, show .ryu-throwing .ryu-action 2) when mouse is clicked play sound(hadouken.mp3) 3) When x is pressed do .ryu-cool & play cool music..

/*On page load---> display default state*/
$('.ryu-action').hide();
$('.ryu-still').show();

/* On mouse over display ryu-ready*/
/*-->mouseenter--> display ryu-ready (and hide everything else)*/
$('.ryu').mouseenter(function() {
$('.ryu-action').hide();
$('.ryu-ready').show();

});
/*-->mouseleave --> display the default state --> ryu-still (and hide everything else)*/
$('.ryu').mouseleave(function() {
  $('.ryu-action').hide(); //(hides all 4 divs)*/
  $('.ryu-still').show();
});
  /*function playHadouken() {
    alert('Max is a cool cat!');
  }*/

/*On click display ryu-throwing (hide everything else)*/
/*--> mousedown --> display ryu-throwing (and hide everything else)*/
$('.ryu').mousedown(function() {
   playHadouken();
   $('.ryu-action').hide();//(this line means hide all 4 divs)
   $('.ryu-throwing').show();
   $('.hadouken').finish().show().animate({
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
                    playCool();
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

/*How to play a sound */
var hadoukenSound = false;

function playHadouken() {
     // if the sound was playing before, make sure it stops before starting a new one
    hadoukenSound = !hadoukenSound;
    if (hadoukenSound) {
        $('#hadouken-sound')[0].volume = 0.5; //set the volume ( 1 = 100% ; so 0.5 = 50%)
        $('#hadouken-sound')[0].load(); //Load the sound into memory
        $('#hadouken-sound')[0].play(); //play it
    }
}

var coolSound = false;

function playCool() {
    //if the sound was playing before make sure it stops before starting a new one
    coolSound = !coolSound;
    if (coolSound) {
        $('#cool')[0].play();
    }
}
