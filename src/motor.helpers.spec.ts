import{tieneMayusculasYMinusculas} from "./motor.helpers"

describe("tieneMayusculasYMinusculas", () => {
    it("debería devolver true si contiene mayúsculas y minúsculas", () => {
        //Arrange
const commonPassword1 : string= "QwerTy"

        //Act

const result = tieneMayusculasYMinusculas(commonPassword1)
        //Assert

    expect(result).toEqual({esValida : true})
    })

    it("debería devolver false si NO contiene mayúsculas y minúsculas", () => {
        //Arrange
const commonPassword2 : string = "admin";

        //Act

const result = tieneMayusculasYMinusculas(commonPassword2)
        //Assert

    expect(result).toEqual({esValida : false, error: "La clave debe de tener mayúsculas y minúsculas"})
    })
})