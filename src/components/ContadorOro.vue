<template>
  <div class="container">
    <b-row>
      <b-col class="tuOro">
        <h2>
          <img v-bind:src="require('../assets/images/chest.svg')" alt="baúl" width="60" />
          <span v-if=" contador < 0 " class="contador" :style="{ color: colorRojo }" >{{ contador }}</span>
          <span v-else class="contador" :style="{ color: colorNegro }" >{{ contador }}</span>
        </h2>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "ContadorOro",
  computed: {
    ...mapGetters(["contador", "actividades"])
  },
  data() {
    return {
      colorRojo: 'red',
      colorNegro: 'black',
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rojo {
  color: red;
}
.negro {
  color: black;
}
.contador {
  color: black;
  border: 1px solid white;
  background-color: white;
  border-radius: 7px;
  padding: 0 10px;
  margin-left: 10px;
}
h2 {
  color: #d4b038;
}
.tuOro {
  background-color: rgb(13, 62, 134);
  padding: 12px;
  text-align: center;
}
</style>
