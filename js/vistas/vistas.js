//iniciar aplicacion.
function iniciarAplicacion()
{
    crearTitulo();
    crearMenu();
}

function crearTitulo()
{
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML = "Sistema en Clientes";
    document.body.appendChild(tituloH1);
}

function crearMenu()
{
    let opciones = ["Agregar Cliente","Buscar Cliente","Listar Clientes"];

    opciones.forEach((opcion)=> {
       const boton = document.createElement("button");
       boton.innerHTML= opcion;

       if(opcion == "Agregar Cliente")
       {
           boton.addEventListener("click",()=>
           {
               agregarCliente();
               listarClientes(clientes);
           })
       }
       else if(opcion == "Buscar Cliente")
       {
           boton.addEventListener("click",()=>{
               let filtrado = buscarCliente();

               listarClientes(filtrado)
           })
       }
       else if(opcion == "Listar Cliente")
       {
           boton.addEventListener("click",()=>
           {
               listarClientes(clientes)
           })
       }
       
       document.body.appendChild(boton);
    });
}


//CHEQUEAR ERRORES

function buscarCliente()
{
    let nombre = prompt("ingrese nombre");
   
    let encontrados = clientes.filter((cliente)=>cliente.nombre.toLowerCase().indexOf(nombre.toLocaleLowerCase())!==-1);

    console.table(encontrados);
    return encontrados;
}
function agregarCliente()
{      
    let id=1;
    if(cliente.length>0)
    {
       id=clientes[clientes.length-1].id+1;
    }
    
    let nombre=prompt("ingrese un nombre");
    let apellido = prompt("ingrese un apellido");
    let nacionalidad = prompt("ingrese nacionalidad")
    let cliente = new Cliente( nombre, apellido,nacionalidad);  
    cliente.push(cliente);
}
//Verificar y editar.
function listarClientes(listaClientes)
{
   let miLista = document.querySelector("#listaClientes");
   if(!miLista)
   {
     miLista = document.createElement("table");
     miLista.setAttribute("id", "listaClientes");
   }
   miLista.innerHTML="";

   const encabezado = document.createElement("tr");
   
   const tdNombre = document.createElement("th");
   tdNombre.innerHTML="Nombre";
   encabezado.appendChild(tdNombre);

   const tdApellido = document.createElement("th");
   tdApellido.innerHTML="Apellido";
   encabezado.appendChild(tdApellido);

   const tdNacionalidad = document.createElement("th");
   tdNacionalidad.innerHTML="Nacionalidad:";
   encabezado.appendChild(tdNacionalidad);

   const tdAcciones = document.createElement("th");
   tdAcciones.innerHTML="Acciones";
   encabezado.appendChild(tdAcciones);

   miLista.appendChild(encabezado)
   
   listaClientes.forEach((cliente)=>{
       const nodotr = document.createElement("tr");
       let nodotd = document.createElement("td");
       nodotd.innerHTML=`${cliente.nombre}`;
       nodotr.appendChild(nodotd)
       
       nodotd = document.createElement("td");
       nodotd.innerHTML=`${cliente.apellido}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`No reporta`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`Borrar | Editar`;
       nodotr.appendChild(nodotd);

       miLista.appendChild(nodotr);
   });

   document.body.appendChild(miLista);
}