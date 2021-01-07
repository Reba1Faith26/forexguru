function menuButton(){
  $(document).ready(function(){
    $(".menu-button").click(function(){
      $(".navigation-list").slideToggle(350);
    })
  })
}



var i = 0;
var welcome = " Welcome To Forex Guru trading institute"; 
/* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < welcome.length) {
    document.getElementById("type-writer-caption").innerHTML += welcome.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function midCaptionAnimation(){
  $(".mid-caption").animate({
    marginRight : "0px"
  },2200)
}
menuButton();

typeWriter();