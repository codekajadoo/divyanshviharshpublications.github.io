function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main-menu").style.marginLeft = "250px";
  document.getElementById("ad").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main-menu").style.marginLeft = "0";
  document.getElementById("ad").style.marginLeft = "0";
}