function miprimeraFuncionJs() {
    console.log("HOLA MUNDO")
    alert("HOLA MUNDO")
}


function resenias(){
    Swal.fire({
        title: 'Escribe tu reseña',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true,
        preConfirm: (campo) => {
            console.log("Reseña enviada: "+campo)
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        
      })
}

function newlater(){
    Swal.fire({
        title: 'Estas seguro que deseas subribirse?',
        text: "Podras acceder a los beneficios y descuentos",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, suscribirme!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Te has suscrito!',
            'Prontamente recibiras las ultimas actualizaciones de la plataforma.',
            'success'
          )
        }
    })
}

function obtenerDatos(){
    $.ajax(
        {
            url:'https://64a35742b45881cc0ae64b7b.mockapi.io/platos',
            dataType:'json',
            success:function(datos){
                console.log(datos)
                var contenedorPlatos = $('#sushi-content')
                var elementos = ''
                for(var indice in datos){
                    console.log(datos[indice].nombre)
                    var elemento = 
                    '<div class="col-6">'+
                        '<div class="row border">'+
                            '<div class="col">'+
                                '<img src="'+datos[indice].imagen+'" class="card-img-top" alt="...">'+
                            '</div>'+
                            '<div class="col">'+
                                '<p>'+datos[indice].nombre+
                                '<p>'+datos[indice].descripcion+'</p>'+
                                '<p>$'+datos[indice].precio+'</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                    elementos+=elemento
                    

                    
                }
                var row = '<div class="row p-1">'+elementos+'</div>'
                contenedorPlatos.append(row)
            },
            error:function(){
                alert("No se pudo obtener la infromacion de los platos del menu")
            }

        }
    )
}

function validaCampos() {
    //OBTENER VALOR DEL CAMPO CON JS NORMAL
    //var fecha = document.getElementById("fecha").value
    //OBTENER VALOR CON JQUERY
    var expresionRegularTelefonos = /^(\+?56)?(\s?)(0?9)(\s?)[1-9]\d{7}$/
    var contadorErrores = 0;
    var mensaje = ""
    var fecha = $('#fecha').val()
    var hora = $('#hora').val()
    var cantPersonas = $('#cantPersonas').val()
    var nombreContacto = $('#nombreContacto').val()
    var numeroContacto = $('#numeroContacto').val()
    //validar formato de fechas
    var fechaHoraActual = new Date();
    //validar formato de horas
    var fechaHoraIngresada = new Date(fecha + " "+ hora);
    //************************ VALIDACIONES ****************** */
    if(fechaHoraIngresada<fechaHoraActual){
        mensaje += "Debes ingresar una fecha y hora superior a la actual\n"
        contadorErrores++
    }

    if (fecha.length == 0) {
        mensaje += "Campo fecha es requerido\n"
        contadorErrores++
    } 
    if (cantPersonas <= 0 ) {
        mensaje += "La cantidad de personas debe ser mayor 0\n"
        contadorErrores++
    } 
    if (nombreContacto.length == 0 ) {
        mensaje += "Nombre contacto es requerido\n"
        contadorErrores++
    } 
    if (nombreContacto.length == 0 ) {
        mensaje += "Nombre contacto es requerido\n"
        contadorErrores++
    } 
    if (numeroContacto.length == 0 ) {
        mensaje += "Numero de contacto es requerido\n"
        contadorErrores++
    } 
    if (!numeroContacto.match(expresionRegularTelefonos)) {
        mensaje += "El numero de contacto no cumple con el formato establecido ej: +56XXXXXXXX\n"
        contadorErrores++
    } 
    /***************FIN VALIDACIONES ****************/ 
    if(contadorErrores==0){
        //alert("TU INFORMACION FUE ENVIADA EXITOSAMENTE "+contadorErrores)
        Swal.fire({
            icon: 'success',
            title: 'Reserva exitosa',
            text: "Tu reserva fue enviada exitosamente"
        })
    }else {
       //alert("DEBES RELLENAR LOS CAMPOS OBLIGATORIOS")
       Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: mensaje
        })
    }

    
}
//var triggerEl = document.querySelector('#navId a')
//bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name