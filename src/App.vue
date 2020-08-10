<template>
  <div class="container" id="app">
    <ContadorOro  />
    <div class="casillas">
      <b-row>
        <b-col cols="3">
          <Casilla titulo="Granja" />
        </b-col>
        <b-col cols="3">
          <Casilla titulo="Cueva" />
        </b-col>
        <b-col cols="3">
          <Casilla titulo="Casa" />
        </b-col>
        <b-col cols="3">
          <Casilla titulo="Casino" />
        </b-col>
      </b-row>
    </div>
    <Actividad />
    <Reset />
  </div>
</template>

<script>
import ContadorOro from "./components/ContadorOro";
import Casilla from "./components/Casilla";
import Actividad from "./components/Actividad";
import Reset from './components/Reset';

export default {
  name: "App",
  components: {
    ContadorOro,
    Casilla,
    Actividad,
    Reset
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px solid black;
  padding: 0px;
}
.casillas {
  padding: 0px 30px;
  background-color: rgb(13, 62, 134);
}
</style>
