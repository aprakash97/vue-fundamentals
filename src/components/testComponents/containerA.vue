<script setup>
const emit = defineEmits(["increaseByTen"]);
</script>

<template>
  <button @click="$emit('increaseByTen')">Increment</button>
</template>

<style>
.btnStyle {
  background-color: blue;
  min-width: 200px;
}
</style>
