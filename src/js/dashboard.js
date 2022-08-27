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
      albumData: [
        {
          id: 1,
          title: "Hybrid Theory",
          artist: "Linkin Park",
          genre: "Alternative Rock",
          release: 2000,
          cost: 12.99,
          description: "Hybrid Theory is the debut studio album by American rock band Linkin Park, released on October 24, 2000, through Warner Bros. Records.",
          imgUrl: "../../static/images/albums/hybrid-theory.webp"
        },
        {
          id: 2,
          title: "21",
          artist: "Adele",
          genre: "Pop",
          release: 2011,
          cost: 14.99,
          description: "21 is the second studio album by English singer-songwriter Adele. It was released on 24 January 2011 in Europe by XL Recordings and on 22 February 2011 in North America by Columbia Records.",
          imgUrl: "../../static/images/albums/21.webp"
        },
        {
          id: 3,
          title: "Master of Puppets",
          artist: "Metallica",
          genre: "Thrash Metal",
          release: 1986,
          cost: 11.99,
          description: "Master of Puppets is the third studio album by the American heavy metal band Metallica, released on March 3, 1986, by Elektra Records.",
          imgUrl: "../../static/images/albums/master_of_puppets.webp"
        },
        {
          id: 4,
          title: "Loud",
          artist: "Rihanna",
          genre: "Pop",
          release: 2010,
          cost: 9.99,
          description: "Loud is the fifth studio album by Barbadian singer Rihanna. It was released on November 12, 2010, by Def Jam Recordings and SRP Records.",
          imgUrl: "../../static/images/albums/loud.webp"
        },
        {
          id: 5,
          title: "Hybrid Theory",
          artist: "Linkin Park",
          genre: "Alternative Rock",
          release: 2000,
          cost: 12.99,
          description: "Hybrid Theory is the debut studio album by American rock band Linkin Park, released on October 24, 2000, through Warner Bros. Records.",
          imgUrl: "../../static/images/albums/hybrid-theory.webp"
        },
        {
          id: 6,
          title: "21",
          artist: "Adele",
          genre: "Pop",
          release: 2011,
          cost: 14.99,
          description: "21 is the second studio album by English singer-songwriter Adele. It was released on 24 January 2011 in Europe by XL Recordings and on 22 February 2011 in North America by Columbia Records.",
          imgUrl: "../../static/images/albums/21.webp"
        },
        {
          id: 7,
          title: "Master of Puppets",
          artist: "Metallica",
          genre: "Thrash Metal",
          release: 1986,
          cost: 11.99,
          description: "Master of Puppets is the third studio album by the American heavy metal band Metallica, released on March 3, 1986, by Elektra Records.",
          imgUrl: "../../static/images/albums/master_of_puppets.webp"
        },
        {
          id: 8,
          title: "Loud",
          artist: "Rihanna",
          genre: "Pop",
          release: 2010,
          cost: 9.99,
          description: "Loud is the fifth studio album by Barbadian singer Rihanna. It was released on November 12, 2010, by Def Jam Recordings and SRP Records.",
          imgUrl: "../../static/images/albums/loud.webp"
        },
      ],
      albumDetailsVisible: false,
      selectedAlbum: null,
      isLoading: false,
      hasError: false
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
    this.hasError = false;

    try {
      if (!window.location.origin.includes("localhost") && !window.location.origin.includes("127.0.0.1")) {
        this.isLoading = false;
        return;
      }
      const response = await fetch("http://localhost:3000/albums");
      const data = await response.json();

      if (response.ok && data) {
        this.albumData = [...data];
      }
    } catch (error) {
      // this.hasError = true; TODO: Need to set this later
      console.log(error.message);
    }
    this.isLoading = false;
  }
});

app.mount('#app');