import{ValidacionClave} from "./modelo"

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {

    let hayMayusculas= false;
    let hayMinusculas = false;
    const calveSinAcentos = clave.replaceAll("á", "a").replaceAll("é","e").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u")
    const caracteres = calveSinAcentos.split("");
    caracteres.forEach((caracter) => { 
        const numeroCaracterASCII = caracter.charCodeAt(0);
        if(numeroCaracterASCII >= 65 && numeroCaracterASCII <= 90){
            hayMayusculas = true;
        }

        if(numeroCaracterASCII >= 97 && numeroCaracterASCII <= 122){
            hayMinusculas = true;
        }
    })

    let validarClave : ValidacionClave = {
        esValida : false,
        error: "La clave debe de tener mayúsculas y minúsculas",
    }

    if (hayMayusculas && hayMinusculas){
        validarClave.esValida = true;
        delete validarClave.error;
    }


    return validarClave
  };

  export const tieneNumeros = (clave: string): ValidacionClave => {
    let claveConNumeros : ValidacionClave = {
        esValida : false,
        error : "La clave debe tener números"
    }

   const caracteres = clave.split("");

   const tieneNumeros =  caracteres.some((caracter) => {

    const isANumber = parseInt(caracter) || caracter === "0"
    return isANumber
   })

   if(tieneNumeros){
    claveConNumeros.esValida = true;
    delete claveConNumeros.error
   }

    return claveConNumeros

  };

