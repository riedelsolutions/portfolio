var projectOrder = ["overlay-themcomp",
"overlay-fontdatabase",
"overlay-vanish",
"overlay-solemedia",
"overlay-spur",
"overlay-mtl",
"overlay-inkdrink",
"overlay-nihilstore",
"overlay-other"];


/*
var projectOrder = ["overlay-themcomp",
"overlay-fontdatabase",
"overlay-vanish",
"overlay-solemedia",
"overlay-spur",
"overlay-mtl",
"overlay-inkdrink",
"overlay-nihilstore",
"overlay-other"];
*/

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

//optimized

/*function slide(shouldGoTo, backwardOrForward){
	//True -> forward
	//False -> backward
	var currentSlideNumber;
	if(backwardOrForward === true){
			var currentSlideNumber = projectOrder.indexOf(shouldGoTo) - 1;

	}else if(backwardOrForward ===false){
			var currentSlideNumber = projectOrder.indexOf(shouldGoTo) + 1;
	}else{
		//nothing.
	}
	var currentSlide = projectOrder[currentSlideNumber]; 
	closeOverlay(currentSlide);
	openOverlay(shouldGoTo);

	//Add animation variation left and right
}
*/

