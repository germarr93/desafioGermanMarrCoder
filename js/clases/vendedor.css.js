class Vendedor
{
    constructor(id,nombre,apellido,salario)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
    }
    datosVendedores()
    {
        return this.id + "" + this.nombre + " " + this.apellido + " " + this.salario;
    }
    sueldoMayorVendedores()
    {
        if(this.salario > 53000)
        {
            return this.id +  this.nombre + " " + this.apellido + " " + this.salario
        }
        else
        {
            console.log("No existe empleado con sueldo mayor")
        }
    }
}

const vendedorUno = new Vendedor(1,"pedro","lopez",3000);
const vendedorDos = new Vendedor(2,'jose','perez',33333);
const vendedorTres = new Vendedor(3,"lorena","lomez",33334);
const vendedorCuatro = new Vendedor(4,"romina","gonzalez",10000000);    

// console.log(vendedorUno)
