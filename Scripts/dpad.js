const dpad = document.querySelector(".dpad")
const buttons = {
  BtnTop: document.getElementById("dpad-up"),
  BtnLeft: document.getElementById("dpad-left"),
  BtnRight: document.getElementById("dpad-right"),
  BtnBottom: document.getElementById("dpad-down"),
}

Object.keys(buttons).forEach(id => {
  const btn = buttons[id]

  const removePressedClasses = () => {
    dpad.classList.remove("top-pressed", "left-pressed", "right-pressed", "bottom-pressed")
  }

  btn.addEventListener("mousedown", () => {
    removePressedClasses() // Clear any previous state
    switch (id) {
      case "BtnTop":
        dpad.classList.add("top-pressed")
        break
      case "BtnLeft":
        dpad.classList.add("left-pressed")
        break
      case "BtnRight":
        dpad.classList.add("right-pressed")
        break
      case "BtnBottom":
        dpad.classList.add("bottom-pressed")
        break
    }
  })

  // Remove pressed classes when button is released
  btn.addEventListener("mouseup", removePressedClasses)
  btn.addEventListener("mouseleave", removePressedClasses)
})