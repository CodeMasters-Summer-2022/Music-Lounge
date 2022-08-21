console.log("Welcome to Admin Dashboard page");
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      names: ["Walter White", "Saul Goodman", "Jesse Pinkman", "Hank Schrader", "Walter White Jr.", "Mike Ehrmantraut"],
      selectedNameIndex: null
    }
  },
  methods: {
    handleNameClick(index) {
      this.selectedNameIndex = index;
    },
    deleteUser() {
      this.names.splice(this.selectedNameIndex, 1);
      this.selectedNameIndex = null;
    }
  }
});

app.mount('#app');