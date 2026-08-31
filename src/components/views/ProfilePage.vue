<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const path = route.params.id;
</script>

<template>
  <p>user id - {{ path }}</p>
</template>
