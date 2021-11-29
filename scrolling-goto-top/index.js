const $scrollIcon = document.querySelector(".scroll-icon");

window.addEventListener("scroll", () => {
  if (window.pageYOffset < 100) $scrollIcon.style.display = "none";
  else $scrollIcon.style.display = "block";
});

$scrollIcon.addEventListener("click", () => window.scrollTo(0, 0));
