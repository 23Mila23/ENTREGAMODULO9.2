import { validarClave } from "./motor";
describe("validarClave", () => {
  it("Debería devolver el objeto esValida: true si la contraseña pasa todas las comprobaciones y es valida", () => {
    //Arrange

    const nombreUsuario = "camila01";
    const clave = "CaM1l@78!";
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
    ];

    //Act

    const result = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert

    expect(result).toEqual({
      esValida: true,
    });
  });

  it("Debería devolver el objeto esValida: false y error La clave debe de tener mayúsculas y minúsculas si la contraseña no pasa la primera comprobación", () => {
    //Arrange

    const nombreUsuario = "camila01";
    const clave = "camila";
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
    ];

    //Act

    const result = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert

    expect(result).toEqual({
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    });
  });

  it("Debería devolver el objeto esValida: false y error La clave debe tener números si la contraseña no pasa la segunda comprobación", () => {
    //Arrange

    const nombreUsuario = "camila01";
    const clave = "CamIla";
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
    ];

    //Act

    const result = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert

    expect(result).toEqual({
      esValida: false,
      error: "La clave debe tener números",
    });
  });

  it("Debería devolver el objeto esValida: false y error La clave debe tener caracteres especiales si la contraseña no pasa la tercera comprobación", () => {
    //Arrange

    const nombreUsuario = "camila01";
    const clave = "Cam1la";
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
    ];

    //Act

    const result = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert

    expect(result).toEqual({
      esValida: false,
      error: "La clave debe tener caracteres especiales",
    });
  });

  it("Debería devolver el objeto esValida: false y error La clave debe de tener una longitud mínima de 8 caracteres si la contraseña no pasa la cuarta comprobación", () => {
    //Arrange

    const nombreUsuario = "camila01";
    const clave = "Cam1l@";
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
    ];

    //Act

    const result = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert

    expect(result).toEqual({
      esValida: false,
      error: "La clave debe tener una longitud mínima de 8 caracteres",
    });
  });

  it("Debería devolver el objeto esValida: false y error La clave no debe tener el nombre de usuario si la contraseña no pasa la quinta comprobación", () => {
    //Arrange

    const nombreUsuario = "camila01";
    const clave = "camila01Cam1l@";
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
    ];

    //Act

    const result = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert

    expect(result).toEqual({
      esValida: false,
      error: "La clave no debe tener el nombre de usuario",
    });
  });

  it("Debería devolver el objeto esValida: false y error La clave no debe contener palabras comunes si la contraseña no pasa la sexta comprobación", () => {
    //Arrange

    const nombreUsuario = "camila01";
    const clave = "passwordCam1l@";
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
    ];

    //Act

    const result = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert

    expect(result).toEqual({
      esValida: false,
      error: "La clave no debe contener palabras comunes",
    });
  });
});
