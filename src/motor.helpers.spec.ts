import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  noTieneNombreUsuario,
} from "./motor.helpers";

describe("tieneMayusculasYMinusculas", () => {
  it("debería devolver true si contiene mayúsculas y minúsculas", () => {
    //Arrange
    const commonPassword1: string = "QwerTy";

    //Act

    const result = tieneMayusculasYMinusculas(commonPassword1);
    //Assert

    expect(result).toEqual({ esValida: true });
  });

  it("debería devolver false si NO contiene mayúsculas y minúsculas", () => {
    //Arrange
    const commonPassword2: string = "admin";

    //Act

    const result = tieneMayusculasYMinusculas(commonPassword2);
    //Assert

    expect(result).toEqual({
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    });
  });
});

describe("tieneNumeros", () => {
  it("debería devolver true si contiene numeros", () => {
    //Arrange
    const password = "0qwe  r";
    //Act
    const result = tieneNumeros(password);
    //Assert
    expect(result).toEqual({ esValida: true });
  });

  it("debería devolver false si NO contiene numeros", () => {
    //Arrange
    const password = "helloworld";
    //Act
    const result = tieneNumeros(password);
    //Assert
    expect(result).toEqual({
      esValida: false,
      error: "La clave debe tener números",
    });
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("Debería devolver true si contiene caracteres especiales", () => {
    //Arrange
    const password = "H@la!";

    //Act
    const result = tieneCaracteresEspeciales(password);

    //Assert

    expect(result).toEqual({
      esValida: true,
    });
  });

  it("Debería devolver false si NO contiene caracteres especiales", () => {
    //Arrange
    const password = "Hola";

    //Act
    const result = tieneCaracteresEspeciales(password);

    //Assert

    expect(result).toEqual({
      esValida: false,
      error: "La clave debe tener caracteres especiales",
    });
  });
});

describe("tieneLongitudMinima", () => {
  it("Debería devolver true si la longitud es mayor  a 8", () => {
    //Arrange
    const password = "123456789";
    //Act

    const result = tieneLongitudMinima(password);

    //Assert

    expect(result).toEqual({
      esValida: true,
    });
  });
  it("Debería devolver true si la longitud es igual a 8", () => {
    //Arrange
    const password = "12345678";
    //Act

    const result = tieneLongitudMinima(password);

    //Assert

    expect(result).toEqual({
      esValida: true,
    });
  });

  it("Debería devolver false si la longitud NO es mayor o igual a 8", () => {
    //Arrange
    const password = "123456";
    //Act

    const result = tieneLongitudMinima(password);

    //Assert

    expect(result).toEqual({
      esValida: false,
      error: "La clave debe tener una longitud mínima de 8 caracteres",
    });
  });
});

describe("noTieneNombreUsuario", () => {
  it("Debería devolver true si la contraseña NO contiene el nombre de usuario", () => {
    //Arrange

    const password = "patata01";
    const usuario = "camila";

    //Act

    const result = noTieneNombreUsuario(usuario, password);

    //Assert

    expect(result).toEqual({
      esValida: true,
    });
  });

  it("Debería devolver false si la contraseña contiene el nombre de usuario", () => {
    //Arrange

    const password = "camila01";
    const usuario = "camila";

    //Act

    const result = noTieneNombreUsuario(usuario, password);

    //Assert

    expect(result).toEqual({
      esValida: false,
      error: "La clave no debe tener el nombre de usuario",
    });
  });
});
