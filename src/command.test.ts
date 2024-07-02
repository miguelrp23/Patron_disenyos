import { Luz, ComandoEncenderLuz, ComandoApagarLuz, ControlRemoto } from './command'; // Asegúrate de ajustar la importación según tu estructura de archivos

describe('Patrón Command', () => {
  let luz: Luz;
  let comandoEncender: ComandoEncenderLuz;
  let comandoApagar: ComandoApagarLuz;
  let controlRemoto: ControlRemoto;

  beforeEach(() => {
    luz = new Luz();
    comandoEncender = new ComandoEncenderLuz(luz);
    comandoApagar = new ComandoApagarLuz(luz);
    controlRemoto = new ControlRemoto();
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
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    controlRemoto.presionarBoton();

    expect(logSpy).toHaveBeenCalledWith('No se ha asignado ningún comando');
    logSpy.mockRestore();
  });
});
