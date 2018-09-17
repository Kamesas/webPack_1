const template = document.querySelector(".template button");
const templateP = document.querySelector(".template p");

template.onclick = function() {
  greet("Bill");
  createEmail("john@mail.com", "jane@mail.com", "Hello", "How are you doing?");
  add("5", "7");
};

function greet(name) {
  templateP.innerHTML = `Hello ${name}`.toUpperCase();
}

function createEmail(to, from, subject, message) {
  templateP.innerHTML += `
                          <div>To: ${to}</div>
                         <div> From: ${from}</div>
                         <div> Subject: ${subject}</div>
                          <div>Message: ${message}</div>
                        `;
}

function add(x, y) {
  templateP.innerHTML += `${x} + ${y} = ${parseInt(x) + parseInt(y)}`;
}

let name = "Bill";
templateP.innerHTML += upperName`Hello ${name} test`;

function upperName(literals, value) {
  return literals[0] + value.toUpperCase() + literals[1];
}
