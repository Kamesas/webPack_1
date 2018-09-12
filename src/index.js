import sum from "./test";
import $ from "jquery";

$("#h1")
  .text("jQuery test")
  .css({ color: "red", fontSize: 12 });
console.log("test run dev");

const af = "arrow func";

function testFunc() {
  console.log(af);
}

testFunc();

sum(2, 10);

import "./css/style.css";
