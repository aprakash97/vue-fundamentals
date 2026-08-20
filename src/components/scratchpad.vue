<script>
import BenderStatistics from "./components/BenderStatistics.vue";
import UserCard from "./components/UserCard.vue";
import CharacterCard from "./components/CharacterCard.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseLayout from "./components/BaseLayout.vue";
import Test from "./components/Test.vue";

export default {
  components: {
    BenderStatistics,
    UserCard,
    CharacterCard,
    BaseButton,
    BaseLayout,
    Test,
  },
  data: () => ({
    newCharacter: {
      name: "",
      element: [],
    },
    characterList: [
      {
        name: "Aang",
        element: ["Air", "Earth", "Water", "Fire"],
      },
      {
        name: "Zuko",
        element: ["Fire"],
      },
      {
        name: "Toph",
        element: ["Earth"],
      },
      {
        name: "Katara",
        element: ["Water"],
      },
    ],
    favoriteList: [],
    userData: {
      name: "Ben",
      preferredFramework: "vue",
      favFood: "rice",
      favNumber: [1, 3, 4, 5],
    },
  }),

  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter);
      this.newCharacter = { name: "" };
    },
    addFavoriteCharacter(payload) {
      this.favoriteList.push(payload);
    },
    changeName() {
      this.userData.name = "Charlie";
    },
  },
};
</script>

<template>
  <!-- <Test /> -->
  <BaseLayout>
    <template v-slot:sidebar>Aside</template>
    <template v-slot:main>
      <UserCard :userData="userData" @change-name="changeName" />
    </template>
    <template v-slot:footer>
      <BenderStatistics :characterList="characterList" />
    </template>
  </BaseLayout>
  <BaseButton :left="true"></BaseButton>

  <h2>Characters</h2>
  <p v-if="characterList.length === 0">There are no characters</p>
  <ul v-else-if="characterList.length % 2 === 0">
    <li
      v-for="(character, index) in characterList"
      :key="`even-character-${index}`"
    >
      <CharacterCard :character="character" @favorite="addFavoriteCharacter" />
      <!-- <p>{{ character.name }}</p> -->
      <!-- <button @click="favoriteCharacter(character)">⭐ Favorite</button> -->
    </li>
  </ul>
  <p v-else>There are odd characters!</p>
  <h2>Favorite Characters</h2>
  <ul v-if="favoriteList.length > 0">
    <li
      v-for="(character, index) in favoriteList"
      :key="`odd-character-${index}`"
    >
      {{ character }}
    </li>
  </ul>
  <p v-else>No favorite characters yet!</p>
  <h2>New Character</h2>
  <pre>{{ newCharacter }}</pre>
  <label for="character-name">Name</label>
  <input
    type="text"
    v-model="newCharacter.name"
    @keyup.enter="addNewCharacter"
  />
  <p>
    <span
      v-for="(character, index) in characterList"
      :key="`comma-list-character-${index}`"
      >{{ character.name }}{{ index === characterList.length - 1 ? "" : ", " }}
    </span>
  </p>
</template>
