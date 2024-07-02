"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command"); // Asegúrate de ajustar la importación según tu estructura de archivos
describe('Patrón Command', () => {
    let luz;
    let comandoEncender;
    let comandoApagar;
    let controlRemoto;
    beforeEach(() => {
        luz = new command_1.Luz();
        comandoEncender = new command_1.ComandoEncenderLuz(luz);
        comandoApagar = new command_1.ComandoApagarLuz(luz);
        controlRemoto = new command_1.ControlRemoto();
    });
    it('debería encender la luz cuando se presiona el botón de encender', () => {
        const encenderSpy = jest.spyOn(luz, 'encender').mockImplementation(() => {
            console.log('Luz encendida');
        });
        controlRemoto.setComando(comandoEncender);
        controlRemoto.presionarBoton();
        expect(encenderSpy).toHaveBeenCalled();
        encenderSpy.mockRestore();
    });
    it('debería apagar la luz cuando se presiona el botón de apagar', () => {
        const apagarSpy = jest.spyOn(luz, 'apagar').mockImplementation(() => {
            console.log('Luz apagada');
        });
        controlRemoto.setComando(comandoApagar);
        controlRemoto.presionarBoton();
        expect(apagarSpy).toHaveBeenCalled();
        apagarSpy.mockRestore();
    });
    it('debería mostrar un mensaje cuando no se ha asignado ningún comando', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        controlRemoto.presionarBoton();
        expect(logSpy).toHaveBeenCalledWith('No se ha asignado ningún comando');
        logSpy.mockRestore();
    });
});
//# sourceMappingURL=command.test.js.map