<template>
  <div class="container">
    <b-row>
      <b-col text="left align" cols="12">
        <h6>Historial</h6>
      </b-col>
      <b-col cols="12" class="contenedor">
        <ul>
          <li v-for="(actividad, i) in actividades" :key="i" :class="{rojo: actividad.estado === 'pierde', verde: actividad.estado === 'gana'}">{{ actividad.descripcion }}</li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Actividad",
  computed: {
    ...mapState('activities', ["actividades"])
  }
};
</script>

<style scoped>
.contenedor {
  background-color: white;
  border-radius: 12px;
  min-height: 150px;
}
.rojo {
  color: red;
}
.verde {
  color: green;
}
li {
  list-style: none;
}
h6 {
  color: white;
}
.container {
  background-color: rgb(13, 62, 134);
  padding: 30px;
}
</style>