<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  emits: ["changeName"],
};
</script>
<template>
  <h1>User : {{ userData.name }}</h1>
  <p>Favorite Food: {{ userData.favFood }}</p>
  <button @click="$emit('changeName')">Change Name</button>
</template>
