<script lang="ts">
export default {
  data() {
    return {
      a: 122,
      imageLink:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlXYTWdFgKPpuRtDYwLWWFmIk8RyoMj7wxNrB9wygwvOhkp3xx",
      cast: [
        { character: "Alice" },
        { character: "Bob" },
        { character: "Charlie" },
      ],
      newCharacter: {
        character: "",
      },
      favorites: [] as string[],
    };
  },
  methods: {
    addToFav(name: string) {
      if (name && !this.favorites.includes(name)) {
        this.favorites.push(name);
      }
    },
    addNewCharacter() {
      const name = this.newCharacter.character.trim();
      if (name) {
        this.cast.push({ character: name });
        this.newCharacter.character = "";
      }
    },
  },
};
</script>

<template>
  <div style="display: flex">
    <div>
      <img :src="imageLink" alt="img" width="100" height="200" />
      <ul>
        Cast
        <div
          v-for="actors in cast"
          :key="actors.character"
          style="display: flex; justify-content: left; gap: 2rem"
        >
          <li style="width: 300px">{{ actors.character }}</li>
          <button @click="addToFav(actors.character)">⭐</button>
        </div>
      </ul>
    </div>
  </div>
  <h3>New Character</h3>
  <pre>{{ newCharacter }}</pre>
  <label for="character-name">Name</label>
  <input
    type="text"
    id="character-name"
    v-model="newCharacter.character"
    @keyup.enter="addNewCharacter"
  />
  <div>
    <h3>Favorites</h3>
    <p v-if="favorites.length === 0">Currently no favorites.</p>
    <div v-else style="display: flex">
      <p v-for="(fav, index) in favorites" :key="index">
        {{ fav }} &nbsp; &nbsp;
      </p>
    </div>
  </div>
  <p v-show="imageLink.length < 0">Exist</p>
</template>

<style scoped></style>
