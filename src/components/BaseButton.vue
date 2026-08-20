<script>
export default {
  props: {
    left: Boolean,
    default: true,
  },
};
</script>

<template>
  <button>
    <slot v-if="left">⭐ Favorite</slot>
    <slot v-else>Submit </slot>
  </button>
</template>
