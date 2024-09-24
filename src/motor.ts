import { ValidacionClave } from "./modelo";
import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./motor.helpers";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const mayusculasYMinusculas = tieneMayusculasYMinusculas(clave);
  const numeros = tieneNumeros(clave);
  const caracteresEspeciales = tieneCaracteresEspeciales(clave);
  const longitudMinima = tieneLongitudMinima(clave);
  const contieneNombreUsuario = tieneNombreUsuario(nombreUsuario, clave);
  const palabrascomunes = tienePalabrasComunes(clave, commonPasswords);

  const comprobaciones = [
    mayusculasYMinusculas,
    numeros,
    caracteresEspeciales,
    longitudMinima,
    contieneNombreUsuario,
    palabrascomunes,
  ];

  const comprobacion = comprobaciones.find((comprobacion) => {
    return !comprobacion.esValida;
  });

  if (!comprobacion) {
    return {
      esValida: true,
    };
  }

  return comprobacion;
};
