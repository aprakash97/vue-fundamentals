<script>
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import UsersPage from "./components/UsersPage.vue";

export default {
  components: {
    HomePage,
    LoginPage,
    UsersPage,
  },
  data: () => ({
    pokedex: [1, 2, 3],
    answer: 3,
    currentPage: "Home",
    users: [],
  }),
  methods: {
    async fetchPokemon() {
      this.pokedex = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=15",
      ).then((response) => response.json());
    },
    async fetchUsers() {
      this.users = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      ).then((response) => response.json());
    },
    getAnswer(value) {
      this.answer = value.length;
    },
    changePage(value) {
      this.currentPage = value;
    },
    // showLoginPage() {
    //   this.currentPage = "Login";
    // },
  },
  created() {
    this.fetchPokemon();
    this.fetchUsers();
  },
  watch: {
    pokedex(value) {
      if (Array.isArray(value)) {
        this.getAnswer(value);
      } else {
        this.getAnswer(value.results);
      }
    },
  },
  computed: {
    currentComponent() {
      return this.currentPage + "Page";
    },
  },
};
</script>
<template>
  <header class="header">
    <span class="logo">
      <img src="@/assets/mission-control-moodboard.png" width="30" />C'est La
      Vue
    </span>
    <nav class="nav">
      <a href="#" @click.prevent="changePage('Home')">Home</a>
      <a href="#" @click.prevent="changePage('Login')">Login</a>
      <a href="#" @click.prevent="changePage('Users')">Users</a>
    </nav>
  </header>
  <component :is="currentComponent" :users="users" />
  <!-- <HomePage v-if="currentPage === 'Home'" />
  <LoginPage v-else /> -->
  <!-- <h1>Pokemon APP</h1>
  <pre>{{ pokedex }}</pre>
  <button @click="fetchPokemon">Get</button>
  <p>Answer: {{ answer }}</p> -->
</template>

<style>
* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}
</style>
