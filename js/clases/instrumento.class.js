

class Instrumentos {
    constructor(nombre,marca)
    {
        this.nombre = nombre;
        this.marca = marca;
    }
    calcularValorDolares()
    {
        return this.precio / 45;
    }
    calcularDescuento()
    {
        return this.precio * 0.80;
    }
   
}

//Array para la creacion y almacenacion de instrumentos.
const instrumentOne = new Instrumentos(1,"guitarra","fender");
const instrumentsTwo = new Instrumentos(2,"bateria","les paul");
const instrumentsThree = new Instrumentos(3,"flauta","philips");
const instrumentsFour = new Instrumentos(4,"Saxophone","Casio");    
