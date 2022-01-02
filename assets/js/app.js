const navBar = document.querySelector("#navbar");

window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;

  if (scrollPosition >= 60) {
    navBar.classList.add("cs-bg-secondary");
  } else if (scrollPosition <= 60) {
    navBar.classList.remove("cs-bg-secondary");
  }
});
