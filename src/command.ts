// Receptor
export class Luz {
    encender() {
        console.log("Luz encendida");
    }

    apagar() {
        console.log("Luz apagada");
    }
}

// Interfaz Command
export interface Comando {
    ejecutar(): void;
}

// Comandos 
export class ComandoEncenderLuz implements Comando {
    private luz: Luz;

    constructor(luz: Luz) {
        this.luz = luz;
    }

    ejecutar() {
        this.luz.encender();
    }
}

export class ComandoApagarLuz implements Comando {
    private luz: Luz;

    constructor(luz: Luz) {
        this.luz = luz;
    }

    ejecutar() {
        this.luz.apagar();
    }
}

// Invocador
export class ControlRemoto {
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
