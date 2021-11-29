const $sideNav = document.getElementById("side-nav");
const $toggleButton = document.querySelector(".toggle.bx.bx-right-arrow-circle");

let toggle = false;

const render = () => {
  // const $nav = document.querySelector(".toggle");
  toggle = sessionStorage.getItem("toggle") === "true";

  if (toggle) $sideNav.classList.remove("active");
  else {
    $sideNav.classList.add("active", "notransition");
    $toggleButton.classList.add("notransition");
  }
};

render();

$toggleButton.onclick = () => {
  // console.log(toggle, sessionStorage.getItem("toggle"), !toggle);
  // render();
  sessionStorage.setItem("toggle", !toggle);

  if (!toggle) {
    $sideNav.classList.remove("active");
  } else $sideNav.classList.add("active");
};
