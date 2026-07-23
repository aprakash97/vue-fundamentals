<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  emits: ["favorite"],
  methods: {
    favoriteCharacter() {
      console.log("here", this.character.name);
      this.$emit("favorite", this.character);
    },
  },
};
</script>

<template>
  <p>{{ character.name }}</p>
  <button @click="favoriteCharacter">⭐ Favorite</button>
</template>
