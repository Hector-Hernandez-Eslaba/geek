import { conexionAPI } from "/conexionAPI.js";

console.log("Se subió el archivo borrar Producto");

async function eliminarProducto(id) {
    await conexionAPI.borrarProducto(id);
    window.location.href = "/index.html";
    
}

window.addEventListener("load", function(){
    const eliminar = document.querySelectorAll(".btn_Eliminar");

    eliminar.forEach (btn => {
        const id = btn.getAttribute("data-id");
        console.log("ID del boton:" + id);

        btn.addEventListener ("click", (event) => {
            event.preventDefault();
            eliminarProducto(id);
        })
    })
})
