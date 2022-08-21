const btnMenu = document.getElementById("btnMenu");
const btnClose = document.getElementById("btnClose");
const btnMobileLogout = document.getElementById("btnMobileLogout");
const overlay = document.getElementById("sideNavOverlay");
const sideNav = document.getElementById("sideNav");

btnMenu.addEventListener("click", () => {
  overlay.classList.add("mobile-sidenav__active");
  sideNav.style.width = "80%";
});

btnClose.addEventListener("click", () => {
  overlay.classList.remove("mobile-sidenav__active");
  sideNav.style.width = "0";
});

btnMobileLogout.addEventListener("click", () => {
  console.log("click() - btnMobileLogout");
  // Add logic to logout user
});

// const { createApp } = Vue;

// const app = createApp({
//   data() {
//     return {
//       names: ["Walter White", "Saul Goodman", "Jesse Pinkman", "Hank Schrader", "Walter White Jr.", "Mike Ehrmantraut"],
//       selectedNameIndex: null
//     }
//   },
//   methods: {
//     handleNameClick(index) {
//       this.selectedNameIndex = index;
//     },
//     deleteUser() {
//       this.names.splice(this.selectedNameIndex, 1);
//       this.selectedNameIndex = null;
//     }
//   }
// });

// app.mount('#app');