import { conexionAPI } from "/conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearProducto(nombre,precio,imagen){
    const producto = document.createElement("li");
    producto.className = "Producto-Item";
    producto.innerHTML=`<div class="Productos">
                            <img class="Pro-imagen" src="${imagen}" alt="imagen">
                            <div class="Box-Name">
                                <p class="Nombre">${nombre}</p>
                            </div>
                            <div class="Box-Precio">
                                <p class="Precio">${precio}</p>                                
                                <button class="btn_Eliminar" type="button" data-id="${id}"><img class="Icono" src="Imagenes/🦆 icon _trash 2_.png" alt="trash"></button>
                            </div>
                        </div>`;
    return producto;
}


async function listaProductos(){
    try{
        const listaAPI = await conexionAPI.listaProductos()
        listaAPI.forEach(producto=>lista.appendChild(crearProducto(producto.nombre,producto.precio,producto.imagen)))
    }catch{
        lista.innerHTML = `<h2 class="Mensaje-Error">Ha Ocurrido un problema con la conexion :(</h2>`;
    }
}
listaProductos()
