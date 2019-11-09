$(document).ready(function(){
  $('.carousel').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
	arrows: true
  });
});


function preview(index){
	var element = document.getElementsByClassName('m')[index];
	element.classList.add('display');
}

function out(index){
	var elementEl = document.getElementsByClassName('overlay')[index];
	elementEl.classList.remove('display');
}

/*Overlay*/


/*Takes given overlay and opens it*/
function openOverlay(project) {
  document.getElementsByClassName(project)[0].style.width = "100%";
}

/*Takes given overlay and closes it*/
function closeOverlay(project) {
  document.getElementsByClassName(project)[0].style.width = "0%";
}



function slideRight(shouldGoTo){
	var currentSlideNumber = projectOrder.indexOf(shouldGoTo) - 1;
	var currentSlide = projectOrder[currentSlideNumber];
	closeOverlay(currentSlide);
	openOverlay(shouldGoTo);
}

function slideLeft(shouldGoTo){
	//previous slide. opposite of slideright
	var currentSlideNumber = projectOrder.indexOf(shouldGoTo) +1 ;
	var currentSlide = projectOrder[currentSlideNumber]; 
	closeOverlay(currentSlide);
	openOverlay(shouldGoTo);
}