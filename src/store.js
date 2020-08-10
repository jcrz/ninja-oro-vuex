export default {
    state: {
        cantidadOros: 1,
        actividades: [],
    },
    actualizarOros(casilla,arreglo){
      let min = arreglo[0];
      let max = arreglo[1];
      let numAzar = Math.random() * (max - min) + min;
      let numInt = Math.trunc(numAzar);
      let fecha = new Date();
      if (casilla === "Casino") {
          let operacionAzar = Math.floor(Math.random() * 2);
          if (operacionAzar) {
            this.state.cantidadOros += numInt;
            this.state.actividades.push({
              descripcion: `Ganaste ${numInt} oros en el ${casilla}!! (${fecha}) \n`,
              estado: 'gana'
            })
          } else {
            this.state.cantidadOros -= numInt;
            this.state.actividades.push({
              descripcion: `Perdiste ${numInt} oros en el ${casilla} :(  (${fecha}) \n`,
              estado: 'pierde'
            })
          }
      } else {
        this.state.cantidadOros += numInt;
        this.state.actividades.push({
          descripcion: `Encontraste ${numInt} oros en la ${casilla}!  (${fecha}) \n`,
          estado: 'gana'
        })
      }
    },
    resetear(){
      this.state.cantidadOros = 0;
      this.state.actividades = [];
    }
}