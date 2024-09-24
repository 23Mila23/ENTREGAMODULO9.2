import { ValidacionClave } from "./modelo";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  let hayMayusculas = false;
  let hayMinusculas = false;
  const calveSinAcentos = clave
    .replaceAll("á", "a")
    .replaceAll("é", "e")
    .replaceAll("í", "i")
    .replaceAll("ó", "o")
    .replaceAll("ú", "u");
  const caracteres = calveSinAcentos.split("");
  caracteres.forEach((caracter) => {
    const numeroCaracterASCII = caracter.charCodeAt(0);
    if (numeroCaracterASCII >= 65 && numeroCaracterASCII <= 90) {
      hayMayusculas = true;
    }

    if (numeroCaracterASCII >= 97 && numeroCaracterASCII <= 122) {
      hayMinusculas = true;
    }
  });

  let validarClave: ValidacionClave = {
    esValida: false,
    error: "La clave debe de tener mayúsculas y minúsculas",
  };

  if (hayMayusculas && hayMinusculas) {
    validarClave.esValida = true;
    delete validarClave.error;
  }

  return validarClave;
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  let claveConNumeros: ValidacionClave = {
    esValida: false,
    error: "La clave debe tener números",
  };

  const caracteres = clave.split("");

  const tieneNumeros = caracteres.some((caracter) => {
    const isANumber = parseInt(caracter) || caracter === "0";
    return isANumber;
  });

  if (tieneNumeros) {
    claveConNumeros.esValida = true;
    delete claveConNumeros.error;
  }

  return claveConNumeros;
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  let claveCaracteresEspeciales: ValidacionClave = {
    esValida: false,
    error: "La clave debe tener caracteres especiales",
  };

  const caracteres = clave.split("");

  const hayCaracteresEspeciales = caracteres.some((caracter) => {
    const caracterCodigoASCII = caracter.charCodeAt(0);
    let caracterEspecial = false;
    if (
      (caracterCodigoASCII >= 33 && caracterCodigoASCII <= 47) ||
      (caracterCodigoASCII >= 58 && caracterCodigoASCII <= 64) ||
      (caracterCodigoASCII >= 91 && caracterCodigoASCII <= 96) ||
      (caracterCodigoASCII >= 123 && caracterCodigoASCII <= 126)
    ) {
      caracterEspecial = true;
    }
    return caracterEspecial;
  });

  if (hayCaracteresEspeciales) {
    claveCaracteresEspeciales.esValida = true;
    delete claveCaracteresEspeciales.error;
  }

  return claveCaracteresEspeciales;
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  let claveLongitudMinima: ValidacionClave = {
    esValida: false,
    error: "La clave debe tener una longitud mínima de 8 caracteres",
  };

  if (clave.length >= 8) {
    claveLongitudMinima.esValida = true;
    delete claveLongitudMinima.error;
  }

  return claveLongitudMinima;
};
