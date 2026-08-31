import { defineStore } from "pinia";

export const useCountStore = defineStore("countStore", {
  state: () => ({
    count: 0,
    incrementAmount: 100,
  }),
  getters: {
    doubleAmount(state) {
      const x = state.count * 2;
      this.count = x;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
