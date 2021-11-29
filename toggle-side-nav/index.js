const $toggleButton = document.querySelector(".toggle.bx.bx-right-arrow-circle");

const toggle = sessionStorage.getItem("toggle") === "true";

const render = () => {
  const $sideNav = document.getElementById("side-nav");
  if (toggle) $sideNav.classList.remove("active");
  else $sideNav.classList.add("active");
};

render();

$toggleButton.onclick = () => {
  console.log(toggle, sessionStorage.getItem("toggle"), !toggle);
  sessionStorage.setItem("toggle", !toggle);
  render();
};
