<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const state = reactive({
  usersList: [],
});

// defineProps({
//   message: {
//     required: true,
//     default: "Hello world",
//   },
//   number: {
//     required: true,
//     default: 100,
//   },
// });
// defineEmits(["changeConto"]);

const router = useRouter();

const emit = defineEmits(["changeConto"]);

async function fetchUserList() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  ).then((response) => response.json());

  return response;
}

state.usersList = await fetchUserList();

const onNavigate = (user) => {
  router.push(`/users/${user.id}`);
};
</script>

<template>
  <!-- <p>{{ message }}</p> -->
  <!-- <p>{{ number }}</p> -->
  <!-- <button>Get Pokedex</button> -->

  <ul v-show="state.usersList.length > 0" class="container">
    <li v-for="user in state.usersList" :key="user.id" class="card">
      {{ user.username }}

      <button :aria-label="user.username" @click="onNavigate(user)">
        View User
      </button>
    </li>
  </ul>
</template>

<style>
.container {
  display: grid;
  margin: 0 150px;
  row-gap: 4;
  background-color: rgb(243, 243, 243);
  height: fit-content;
}

.card {
  /* min-width: 150px; */
  height: fit-content;
  background-color: rgb(243, 243, 243);
  border: 1px solid rgb(0, 0, 0);

  display: flex;
  width: 100%;
  justify-content: space-between;
}

/* .list-content {
  display: flex;
  align-content: space-between;
} */
</style>
