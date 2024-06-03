async function listaProductos(){
    const conexion = await fetch ("https://alurageek-api-opal.vercel.app/Productos");
    const conexionConvertida = conexion.json();
    return conexionConvertida
}

async function enviarProducto(nombre,precio,imagen){
    const conexion = await fetch ("https://alurageek-api-opal.vercel.app/Productos",{
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

async function borrarProducto(id){
    try {
    const Response = await fetch (`https://alurageek-api-opal.vercel.app/Productos/${id}`,{
        method:"DELETE",
        headers: {
            "content-type": "application/json"
        }});

        if (!Response.ok) {
            throw new Error ("Error al eliminar el producto")
        }

        return Response;
    } catch (error){
        console.error ("Error al eliminar el producto: ${error},");
    }

}

export const conexionAPI = {
    listaProductos,enviarProducto,borrarProducto,
}
