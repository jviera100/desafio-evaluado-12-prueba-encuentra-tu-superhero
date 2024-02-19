$(document).ready(function () {
    //codigo de funcion se ejecuta cuando pagina este cargada
   
    // Tooltip initialization
    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    
        // Tooltip initialization
        $('[data-bs-toggle="tooltip"]').tooltip();
    
        // Evento click toolpit
        $("#enviarCorreo").click(function () {
            alert("El correo fue enviado correctamente...");
        });
    
        // Cambia color titulo formulario super hero
        $("#titulo-color").dblclick(function () 
        {
            $(this).css("color", "red");
        });
    
        // // tarjetas ocultar/mostrar click imagen individualmente
        $(".card-img-top").click(function () {
          $(this).siblings(".card-body").toggle();
        });
  
    });
  