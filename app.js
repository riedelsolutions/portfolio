/*Takes given overlay and opens it*/
function openOverlay(project) {
  document.getElementsByClassName(project)[0].style.width = "100%";
}

/*Takes given overlay and closes it*/
function closeOverlay(project) {
  document.getElementsByClassName(project)[0].style.width = "0%";
}