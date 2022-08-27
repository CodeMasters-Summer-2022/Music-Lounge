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

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      albumData: [],
      albumDetailsVisible: false,
      selectedAlbum: null,
      isLoading: false
    }
  },
  methods: {
    showAlbumDetails(id) {
      this.albumDetailsVisible = true;
      this.selectedAlbum = this.albumData.find(album => album.id === id);
    },
    hideAlbumDetails() {
      this.albumDetailsVisible = false;
    }
  },
  async mounted() {
    this.isLoading = true;
    const response = await fetch("http://localhost:3000/albums");
    const data = await response.json();
    this.albumData = [...data];
    this.isLoading = false;
  }
});

app.mount('#app');