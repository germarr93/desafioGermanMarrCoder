//arreglo de instrumentos (nombre,marca y precio)
const instrumentos = [
    new Instrumentos('Guitarra','Fender'),
    new Instrumentos('Bateria','Druma'),
    new Instrumentos('Guitarra', 'Ibanez'),
    new Instrumentos('Flauta', 'Marshall'),
    new Instrumentos('Saxophone','Marca'),
]


iniciarAplicacion();
crearMenu();

function mostrarMenu()
{
    let option=0;

    while(option!==6)
    {
        option = Number(prompt(`Select an action:
                                1- Agregar Instrumento
                                2- Encontrar Instrumento 
                                3- Modificar Instrumento
                                4- Borrar Instrumento
                                5- Listar Instrumento
                                6- Salir
                                `))
    
    switch(option)
    {
        case 1:
            {
                agregaInstrumento() 
                break;

            }
            case 2:
              {
               encontrarInstrumento()
                break;
             
            }
            case 3:
                {
                modificarInstrumento()
                break;
                }
            case 4:
                {
                 borrarInstrumento()
                break;
                }       
            case 5:
                {
                listarInstrumento()
            break;
                }
    
    default:{
        alert("saliendo")}
    break;
   }
}
}
function agregaInstrumento()
{
    let id = 1;
    if(generalInstruments.length>0)
    {
        id=generalInstruments[generalInstruments.length-1].id + 1;
    }

    let nombre = prompt('ingrese nombre')
    let marca = prompt('ingrese marca')
    let tipo = prompt('ingrese tipo ')
    let precio = Number(prompt("ingrese precio"))

    let instrumento = new Instrumento(nombre,marca,tipo,precio)

    generalInstruments.push(instrumento)
}
function borrarInstrumento()
{
    let id = Number(prompt("Ingrese id del instrumento a eliminar"))
    let found = generalInstruments.find((instrumento)=>instrumento.id==id)

    if(!found)
    {
        console.log("Instrumento no encontrado")
    }
    else{
        let index = generalInstruments.indexOf(found);

        generalInstruments.splice(index,1)

        console.log('delete user')
        console.log(generalInstruments);
    }

}
function modificarInstrumento()
{
    let id = Number(prompt("ingrese instrumento a modificar"))

    let exists = generalInstruments.some((instrumento)=>instrumento.id === id)

    if(exists)
    {
    
        let found = generalInstruments.find((instrumento)=>instrumento.id == id)
        let newName =prompt("ingrese nuevo nombre");
        let newMarc = prompt("ingrese nueva marca");
        let newPrice = Number(prompt("ingrese nuevo precio"))
        
        found.nombre = newName;
        found.precio = newPrice;
        found.marca = newMarc;

        console.log('Modificacion')
        console.log(generalInstruments)
        
    }
    else{
        console.log('instrument doesnt exists')
    }
}
function encontrarInstrumento()
{
    let nombre = prompt("ingrese nombre del instrumento a buscar")

    let found = generalInstruments.filter((instrumento)=> instrumento.nombre.toLowerCase().indexOf(nombre.toLowerCase())!== -1)

    console.log("Buscar instrumento",found)

}      
 function listarInstrumento()
 {
     console.log('Listar Usuarios')
     generalInstruments.forEach((instrumento)=>{

        console.log(instrumento.id + "" + instrumento.nombre + "" + instrumento.marca + " " + instrumento.tipo + " " + instrumento.precio)
     })
 }
function sumaInstrumentosGanados()
{
let suma = 0;
 let dineroGanadoMes =[1000,233,444,555,6666,7777]

 for(let i=0; i<dineroGanadoMes.length; i++)
 {
   suma += dineroGanadoMes[i];
 }
 console.log("" + suma);

} 

//Funcion Extra mostradas en lista,  por el metodo onLoad en la index y se llama
//por el getElementById.

function mostrarInstrumentos()
{
    console.log('Mostrar instrumentos')
    let texto = '';
    for(let instrumento of instrumentos)
    {
        console.log(instrumento)
        texto += `<li>${instrumento.nombre} ${instrumento.marca}</li>` 
    }
    document.getElementById( "instrumentos" ).innerHTML = texto;
}
function agregarInstrumento()
{
    const forma = document.forms['forma'];
    const nombre = forma['nombre']
    const marca = forma['marca']
    if(nombre.value != '' && marca.value != ''){
        const instrumento = new Instrumentos(nombre.value, marca.value);
        console.log(instrumento);
        instrumentos.push(instrumento);
        mostrarInstrumentos();
    }
    else{
        console.log('No hay información que agregar');
    }

}