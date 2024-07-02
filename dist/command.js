"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlRemoto = exports.ComandoApagarLuz = exports.ComandoEncenderLuz = exports.Luz = void 0;
// Receptor
class Luz {
    encender() {
        console.log("Luz encendida");
    }
    apagar() {
        console.log("Luz apagada");
    }
}
exports.Luz = Luz;
// Comandos 
class ComandoEncenderLuz {
    constructor(luz) {
        this.luz = luz;
    }
    ejecutar() {
        this.luz.encender();
    }
}
exports.ComandoEncenderLuz = ComandoEncenderLuz;
class ComandoApagarLuz {
    constructor(luz) {
        this.luz = luz;
    }
    ejecutar() {
        this.luz.apagar();
    }
}
exports.ComandoApagarLuz = ComandoApagarLuz;
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
exports.ControlRemoto = ControlRemoto;
//# sourceMappingURL=command.js.map