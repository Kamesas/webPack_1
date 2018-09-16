const SHOW_PI = document.querySelector(".const button");
const PI = 3.1415962;

SHOW_PI.onclick = function() {
  this.innerText = PI.toFixed(2);
};
