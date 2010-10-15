var slides,
    currentSlide;

$(document).ready(function() {
  document.onkeydown = keyDown
  slides = $('.slide')
  if (window.location.hash) {
    slides.hide();
    $(window.location.hash).show();
  } else {
    showSlide(0);
  }
})

/*
  keyDown is a pared down version of a method borrowed
  from Scott Chacon's Showoff
*/
function keyDown(event) {
    var key = event.keyCode;

    if (key == 32 || key == 39) {
      // Space bar or right arrow
      nextSlide();
    } else if (key == 37) {
      // Left arrow
      prevSlide()
    }

    return true
}

function nextSlide() {
  if (currentSlide >= slides.length - 1) {return false}
  showSlide(currentSlide + 1);
}

function prevSlide() {
  if (currentSlide <= 0) {return false}
  showSlide(currentSlide - 1);
}

function showSlide(index) {
  slides.hide();
  $(slides[index]).show();
  currentSlide = index;
}
