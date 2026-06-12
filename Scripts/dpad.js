const dpad = document.querySelector(".dpad");

const buttons = {
  BtnTop: document.querySelector("#dpad-up"),
  BtnLeft: document.querySelector("#dpad-left"),
  BtnRight: document.querySelector("#dpad-right"),
  BtnBottom: document.querySelector("#dpad-down"),
};

function removePressedClasses() {
  dpad.classList.remove(
    "top-pressed",
    "left-pressed",
    "right-pressed",
    "bottom-pressed"
  );
}

Object.entries(buttons).forEach(([id, btn]) => {

  if (!btn) return;

  btn.addEventListener("click", () => {

    removePressedClasses();

    switch (id) {
      case "BtnTop":
        dpad.classList.add("top-pressed");
        break;
      case "BtnLeft":
        dpad.classList.add("left-pressed");
        break;
      case "BtnRight":
        dpad.classList.add("right-pressed");
        break;
      case "BtnBottom":
        dpad.classList.add("bottom-pressed");
        break;
    }

    setTimeout(removePressedClasses, 120);
  });
});