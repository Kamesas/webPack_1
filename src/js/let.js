let buttons = document.querySelectorAll(".buttonsForLet button");

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.innerText = i + 1;
  button.onclick = function() {
    console.log(i);
  };
}
