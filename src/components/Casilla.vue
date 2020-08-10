<template>
  <div class="container">
    <b-row>
      <b-col class="casilla">
        <h3>{{ titulo }}</h3>
        <b-button @click="actualizarOros(titulo)" pill variant="info">Buscar Oro</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "Casilla",
  props: {
    titulo: String,
  },
  methods: {
    ...mapMutations('activities', ["actualizarOros"])
  }
};
</script>

<style scoped>
.casilla {
  padding: 10px;
  border-radius: 13px;
  background-color: darkgoldenrod;
  text-align: center;
}
h3{
  color: white;
}
</style>