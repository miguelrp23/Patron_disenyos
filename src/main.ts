// Receptor
class Luz {
    encender() {
        console.log("Luz encendida");
    }

    apagar() {
        console.log("Luz apagada");
    }
}

// Interfaz Command
interface Comando {
    ejecutar(): void;
}

// Comandos 
class ComandoEncenderLuz implements Comando {
    private luz: Luz;

    constructor(luz: Luz) {
        this.luz = luz;
    }

    ejecutar() {
        this.luz.encender();
    }
}

class ComandoApagarLuz implements Comando {
    private luz: Luz;

    constructor(luz: Luz) {
        this.luz = luz;
    }

    ejecutar() {
        this.luz.apagar();
    }
}

// Invocador
class ControlRemoto {
    private comando: Comando | null = null;

    setComando(comando: Comando) {
        this.comando = comando;
    }

    presionarBoton() {
        if (this.comando) {
            this.comando.ejecutar();
        } else {
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
