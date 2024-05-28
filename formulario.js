const campoFormulario = document.querySelectorAll("[required]");

campoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
});

const tiposError = [
    "valueMissing", "typeMissmatch",
    "patternMissmatch", "tooShort",
    "customError",
];

const mensajes = {
    Nombre: {
      valueMissing: "El campo nombre no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un nombre válido.",
      tooShort: "Por favor, ingrese un nombre válido.",
    },
    Precio: {
      valueMissing: "El campo de precio no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un precio válido.",
      tooShort: "El campo no tiene caracteres suficientes.",
    },
    Imagen: {
      valueMissing: "El campo imagen no puede estar vacío.",
      typeMismatch: "Por favor, ingrese una url válida.",
      tooShort: "Por favor, ingrese una imagen válida.",
    },
    
  };
  

function verificarCampo(campo){
    let mensaje = ""

    tiposError.forEach(error => {
        if(campo.validity[error]){
            mensaje = mensajes[campo.name][error]
            //console.log(mensaje);
        }
    })



    const mensajeError = campo.parentNode.querySelector(".Error")
    const validarInputCheck = campo.checkValidity()

    if (!validarInputCheck){
        mensajeError.textContent = mensaje
    }else {
        mensajeError.textContent = ""
    }
}


