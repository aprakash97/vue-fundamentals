<script>
import { ref, Suspense } from "vue";
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import containerA from "./components/testComponents/containerA.vue";
import containerB from "./components/testComponents/containerB.vue";
import UsersPage from "./components/UsersPage.vue";
import { commonNumber } from "./composables/dataStore";

export default {
  setup() {
    const conto = ref("Var");

    const fetchPokemon = async () => {
      await fetch("https://pokeapi.co/api/v2/pokemon?limit=15").then(
        (response) => response.json(),
      );
    };

    const bgColor = ref("antiquewhite");

    return {
      conto,
      fetchPokemon,
      commonNumber,
      bgColor,
    };
  },
  components: {
    HomePage,
    LoginPage,
    UsersPage,
    containerA,
    containerB,
  },
  data: () => ({
    pokedex: [1, 2, 3],
    answer: 3,
    currentPage: "Home",
    counted: 4,
  }),
  methods: {
    getAnswer(value) {
      this.answer = value.length;
    },
    changePage(value) {
      this.currentPage = value;
    },
    changeConto() {
      console.log("clicked", this.conto);
      this.conto = Math.random().toString();
    },
    increaseByTen() {
      console.log("test", commonNumber, typeof commonNumber);
      this.commonNumber = this.commonNumber + 100;
    },
    // showLoginPage() {
    //   this.currentPage = "Login";
    // },
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
  <p>{{ conto }}</p>
  <h1>{{ bgColor }}</h1>
  <input type="color" v-model="bgColor" />

  <suspense>
    <component
      :is="currentComponent"
      :message="currentPage"
      :number="conto"
      @changeConto="changeConto"
    />

    <template #fallback> Loading Data... </template>
  </suspense>
  <div class="composable-container">
    {{ commonNumber }}
    <containerA @increaseByTen="increaseByTen" />
    <containerB @increaseByTen="increaseByTen" />
  </div>
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
  background-color: v-bind(bgColor);
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

.composable-container {
  display: flex;
  margin: 5rem;
  width: 100px;
}

button {
  border: 1px solid red;
}
</style>
