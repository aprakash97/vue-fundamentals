<script>
export default {
  data: () => ({}),
  props: {
    users: {
      required: true,
      type: Array,
    },
  },
};
</script>

<template>
  <div v-show="users.length > 0" class="container">
    <div v-for="user in users" :key="user.id" class="card">
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
