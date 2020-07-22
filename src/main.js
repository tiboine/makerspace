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
// const body = document.querySelector("body");
const hamburger = document.getElementById("hamburger");
const hamburger_icon = document.getElementById("hamburger-icon");
const x_icon = document.getElementById("x-icon");
const menu = document.getElementById("menu-item");
const msTitle = document.getElementById("ms-title");

hamburger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    msTitle.classList.add("hidden");
    hamburger_icon.classList.add("hidden");
    x_icon.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
    msTitle.classList.remove("hidden");
    hamburger_icon.classList.remove("hidden");
    x_icon.classList.add("hidden");
  }
});

menu.addEventListener("click", () => {
  menu.classList.add("hidden");
  msTitle.classList.remove("hidden");
  x_icon.classList.add("hidden");
  hamburger_icon.classList.remove("hidden");
});
