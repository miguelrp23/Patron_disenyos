"use strict";
// Receptor
class Luz {
    encender() {
        console.log("Luz encendida");
    }
    apagar() {
        console.log("Luz apagada");
    }
}
// Comandos 
class ComandoEncenderLuz {
    constructor(luz) {
        this.luz = luz;
    }
    ejecutar() {
        this.luz.encender();
    }
}
class ComandoApagarLuz {
    constructor(luz) {
        this.luz = luz;
    }
    ejecutar() {
        this.luz.apagar();
    }
}
// Invocador
class ControlRemoto {
    constructor() {
        this.comando = null;
    }
    setComando(comando) {
        this.comando = comando;
    }
    presionarBoton() {
        if (this.comando) {
            this.comando.ejecutar();
        }
        else {
            console.log("No se ha asignado ningún comando");
        }
    }
}
// Constantes y producto final
const luz = new Luz();
const comandoEncender = new ComandoEncenderLuz(luz);
const comandoApagar = new ComandoApagarLuz(luz);
const controlRemoto = new ControlRemoto();
controlRemoto.setComando(comandoEncender);
controlRemoto.presionarBoton(); // Salida: Luz encendida
controlRemoto.setComando(comandoApagar);
controlRemoto.presionarBoton(); // Salida: Luz apagada
