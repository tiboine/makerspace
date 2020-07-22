import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// fade in nav bar bg
window.onscroll = function() {
  myFunction();
};

//var sticky = navbar.offsetTop;

var navbar = document.getElementById("nav");

function myFunction() {
  if (window.pageYOffset > 0) {
    navbar.classList.add("bg-black");
  } else {
    navbar.classList.remove("bg-black");
  }
}

/* mobile navbar */

const hamburger = document.getElementById("hamburger");
const hamburger_icon = document.getElementById("hamburger-icon");
const x_icon = document.getElementById("x-icon");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger_icon.classList.toggle("hidden");
  x_icon.classList.toggle("hidden");
});

menu.addEventListener("click", () => {
  menu.classList.add("hidden");
  x_icon.classList.toggle("hidden");
  hamburger_icon.classList.toggle("hidden");
});
