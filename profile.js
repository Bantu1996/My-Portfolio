var mySlides = 0;
slides();

function slides() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  mySlides++;
  if (mySlides > x.length) { mySlides = 1 }
  x[mySlides - 1].style.display = "block";
  setTimeout(slides, 3000);
}
