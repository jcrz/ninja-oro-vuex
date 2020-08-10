<template>
  <div class="container">
    <b-button pill variant="warning" @click="resetear()">Reset</b-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Reset",
  methods: {
    ...mapMutations('activities', ["resetear"])
  }
};
</script>

<style scoped>
.container {
  background-color: rgb(13, 62, 134);
  padding: 12px;
  text-align: center;
}
</style>