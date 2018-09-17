let spread = document.querySelector(".spread button");
let spreadP = document.querySelector(".spread p");

let staticLanguages = ["C", "C++", "Java"];
let dynamicLanguages = ["JavaScript", "PHP", "Ruby"];

let languages = [...staticLanguages, "C#", ...dynamicLanguages, "Python"];

function add(x, y, z) {
  spreadP.innerHTML = x + y + z;
  spreadP.innerHTML += "<br>" + languages;
}

let numbers = [1, 2, 3];

spread.onclick = function() {
  add(...numbers);
};
