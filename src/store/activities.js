export default {
    namespaced: true,
	state: {
		cantidadOros: 1,
		actividades: [],
	},
	getters: {
		contador(store) {
			return store.cantidadOros;
		},
		actividades(store) {
			return store.actividades;
		},
	},
	mutations: {
		actualizarOros(state, casilla) {
			let fecha = new Date();
			if (casilla === "Granja") {
				let numAzar = Math.random() * (20 - 10) + 10;
				let numInt = Math.trunc(numAzar);
				state.cantidadOros += numInt;
				state.actividades.push({
					descripcion: `Encontraste ${numInt} oros en la ${casilla}!! (${fecha}) \n`,
					estado: "gana",
				});
			} else if (casilla === "Cueva") {
				let numAzar = Math.random() * (10 - 5) + 5;
				let numInt = Math.trunc(numAzar);
				state.cantidadOros += numInt;
				state.actividades.push({
					descripcion: `Encontraste ${numInt} oros en la ${casilla}!! (${fecha}) \n`,
					estado: "gana",
				});
			} else if (casilla === "Casa") {
				let numAzar = Math.random() * (5 - 2) + 2;
				let numInt = Math.trunc(numAzar);
				state.cantidadOros += numInt;
				state.actividades.push({
					descripcion: `Encontraste ${numInt} oros en la ${casilla}!! (${fecha}) \n`,
					estado: "gana",
				});
			} else if (casilla === "Casino") {
				let operacionAzar = Math.floor(Math.random() * 2);
				let numAzar = Math.random() * (50 - 0) + 0;
				let numInt = Math.trunc(numAzar);
				if (operacionAzar) {
					state.cantidadOros += numInt;
					state.actividades.push({
						descripcion: `Ganaste ${numInt} oros en el ${casilla}!! (${fecha}) \n`,
						estado: "gana",
					});
				} else {
					state.cantidadOros -= numInt;
					state.actividades.push({
						descripcion: `Perdiste ${numInt} oros en el ${casilla} :(  (${fecha}) \n`,
						estado: "pierde",
					});
				}
			}
		},
		resetear(state) {
			state.cantidadOros = 0;
			state.actividades = [];
		},
	},
};
