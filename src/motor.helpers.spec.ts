import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
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
