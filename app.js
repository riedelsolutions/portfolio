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

var projectOrder = [themcomp,fontdatabase,vanish,solemedia,spur,mtl,inkdrink,other];

function slideRight(project){
	
}