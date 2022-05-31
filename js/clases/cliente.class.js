
class Cliente
{
   constructor(nombre,apellido,nacionalidad)
{
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacionalidad = nacionalidad;
}

}
const clienteUno = new Cliente(1,"pedro","lopez",3000);
const clienteDos = new Cliente(2,'jose','perez',33333);
const clienteTres = new Cliente(3,"lorena","lomez",33334);
const clienteCuatro = new Cliente(4,"romina","gonzalez",10000000);   



//Eventos para regresar colores al formulario al completar los clientes.

document.getElementById('nombre').addEventListener('focus', (evento)=>{
    evento.target.style.background = 'yellow';
});
document.getElementById('nombre').addEventListener('blur', (evento)=>{
    evento.target.style.background = '';
});
document.getElementById('apellido').addEventListener('focus', cambiar);
document.getElementById('apellido').addEventListener('blur', regresar);
function cambiar(evento){
    let componente = evento.target;
    componente.style.background = 'yellow';
}
function regresar(evento){
    evento.target.style.background = 'white';
}

function validarFormulario()
{
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["flastname"].value;
    if( x == "" ||  y ==  "")
    {
      alert("Ambos campos no pueden estar  debe estar completo");
      return false;
    }
}
  
