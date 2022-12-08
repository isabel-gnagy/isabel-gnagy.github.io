function myFunction() {
  var topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.classList.add("responsive");
  } else {
    topNav.className = "topnav";
  }
}

window.onscroll = function () {
  stickyScroll();
};

function stickyScroll() {
  var navbar = document.getElementById("navbar");
  var header = document.getElementById("header");
  var sticky = navbar.offsetTop;
  var page = window.pageYOffset;
  if (page > sticky) {
    navbar.classList.add("sticky");
    header.classList.add("hidden");
  } else {
    navbar.classList.remove("sticky");
    header.classList.add("shown");
  }
}
