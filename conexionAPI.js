async function listaProductos(){
    const conexion = await fetch ("http://localhost:3001/Productos");
    const conexionConvertida = conexion.json();
    return conexionConvertida
}

async function enviarProducto(nombre,precio,imagen){
    const conexion = await fetch ("http://localhost:3001/Productos",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
    const conexionConvertida = await conexion.json();

    if(!conexion.ok){
        throw new Error ("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;
}

export const conexionAPI = {
    listaProductos,enviarProducto
}