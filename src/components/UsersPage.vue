<script setup>
import { reactive, defineProps } from "vue";

const state = reactive({
  usersList: [],
});

defineProps({
  message: {
    required: true,
    default: "Hello world",
  },
  number: {
    required: true,
    default: 100,
  },
});
// defineEmits(["changeConto"]);

const emit = defineEmits(["changeConto"]);

async function fetchUserList() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  ).then((response) => response.json());

  return response;
}

state.usersList = await fetchUserList();
</script>

<template>
  <p>{{ message }}</p>
  <p>{{ number }}</p>
  <button >Get Pokedex</button>

  <div v-show="state.usersList.length > 0" class="container">
    <div v-for="user in state.usersList" :key="user.id" class="card">
      <h3>{{ user.username }}</h3>
    </div>
  </div>
</template>

<style>
.container {
  display: grid;
  row-gap: 4;
}

.card {
  min-width: 150px;
  background-color: rgb(18, 115, 201);
  border: 1px solid rgb(0, 0, 0);
}
</style>
