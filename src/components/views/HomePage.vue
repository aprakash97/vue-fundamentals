<script setup>
import { useCountStore } from "@/stores/countStore";
const store = useCountStore();
</script>

<template>
  <h1>Home Page</h1>
  <p>Global Count {{ store.count }}</p>
  <button @click="store.increment">Increment</button>
  <button @click="store.doubleAmount">Double It</button>
</template>
