/*Takes given overlay and opens it*/
function openOverlay(project) {
  document.getElementsByClassName(project)[0].style.width = "100%";
}

/*Takes given overlay and closes it*/
function closeOverlay(project) {
  document.getElementsByClassName(project)[0].style.width = "0%";
}

var themcomp = document.getElementsByClassName("overlay-themcomp")[0];
var fontdatabase = document.getElementsByClassName("overlay-fontdatabase")[0];
var vanish = document.getElementsByClassName("overlay-vanish")[0];
var solemedia = document.getElementsByClassName("overlay-solemedia")[0];
var spur = document.getElementsByClassName("overlay-spur")[0];
var mtl = document.getElementsByClassName("overlay-mtl")[0];
var inkdrink = document.getElementsByClassName("overlay-inkdrink")[0];
var other = document.getElementsByClassName("overlay-other")[0];

/*var projectOrder = [themcomp,fontdatabase,vanish,solemedia,spur,mtl,inkdrink,other];*/

var projectOrder = ["overlay-themcomp",
"overlay-fontdatabase",
"overlay-vanish",
"overlay-solemedia",
"overlay-spur",
"overlay-mtl",
"overlay-inkdrink",
"overlay-other"]

function slideRight(shouldGoTo){
	var currentSlideNumber = projectOrder.indexOf(shouldGoTo) - 1;
	//console.log(currentSlideNumber);
	var currentSlide = projectOrder[currentSlideNumber];
	//console.log(currentSlide);
	closeOverlay(currentSlide);
	//closeOverlay('overlay-themcomp');
	openOverlay(shouldGoTo);
	//openOverlay('overlay-fontdatabase');
}

function slideLeft(shouldGoTo){
	//previous slide. opposite of slideright
}


/*ño
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.width = "100%";
  slides[slideIndex-2].style.width = "0%";
}*/