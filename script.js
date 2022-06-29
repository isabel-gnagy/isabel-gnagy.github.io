function myFunction() {
  var topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

window.onscroll = function () {
  stickyScroll();
};

function stickyScroll() {
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  var page = window.pageYOffset;
  if (page > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
