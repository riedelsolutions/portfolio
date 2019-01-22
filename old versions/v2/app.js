var contactLink = "contact.html";
var portfolioLink = "portfolio.html";
var spanishLink = "comingsoon.html";
var cvLink = "cv.html";

function toggleClass(whichLink) {

    var getBody = document.getElementById("bod");
    getBody.classList.add("zoomOut");

    setTimeout(function link(){
   		window.location.href=whichLink; 
    },1000);   
}

var mc = document.getElementById("collapcontentm");
var inkdrink = document.getElementById("collapinkdrink");
var fontdatabase = document.getElementById("collapfontdatabase");
var spur = document.getElementById("collapspur");
var solemedia = document.getElementById("collapsolemedia");
var mtl = document.getElementById("collapmtl");
var nihil = document.getElementById("collapnihil");
var other = document.getElementById("collapother");


var listOfCollapsibles = [mc,inkdrink,fontdatabase,spur,solemedia,mtl,nihil,other];

for (var i = 0; i < listOfCollapsibles.length; i++){
  listOfCollapsibles[i].style.display = "none"; //Sets all to be collapsed
}
function openCollapsibles(which){
    if(which.style.display == "none"){
      which.style.display = "block";
    }else{
      which.style.display = "none";
    }
}
