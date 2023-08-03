// css file
import "../sass/style.scss";
import { Button, Collapse, Dropdown } from "bootstrap";
const bootstrap = (window.bootstrap = require("bootstrap"));

let toggleBtn = document.querySelector(".navbar-toggler");
let navbar = document.querySelector("#navbarCustom");
let body = document.body;

toggleBtn.addEventListener("click", function () {
  this.classList.toggle("change");
  navbar.classList.toggle("show");
  body.classList.toggle("overflow-hidden");
});
