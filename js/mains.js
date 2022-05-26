$(function () {


    //Click y se vuelve Oscuro
    $("#afterbanner .col").click(function () {
        if ($(this).css("background-color", "#000000")) {
            $(this).css("color", '#FFFFFF');
        }
        else {
            $(this).css("color", "transparent");
        }
    })

    $("#afterbanner h3").click(function () {
        $("#afterbanner .col").css("background-color", "transparent");

    })






    //DOG WALKING OPTIONS BOTON PLAY  

    
    $("#dogwalkingOptions figure").append("<figcaption>");

    $("#dogwalkingOptions figure").mouseenter(function(){
        $(this).find("figcaption").slideDown().slideDown("fast");
    })

    $("#dogwalkingOptions figure").mouseleave(function(){
        $(this).find("figcaption").slideUp().slideUp("fast");
    })
       
     
    
    $("#dogwalkingOptions figure").each(function(){
        var nombre  =   $(this).find("img").attr("title");
        console.log(nombre);
        $(this).find("figcaption").html("<div><h6>" +   nombre  +   "</h6></div>");       
        $(this).find("figcaption div").prepend("<i class='bi bi-zoom-in'></i>")
        var rutaImagen=$(this).find("img").attr("src");

     

        $(this).find("figcaption div i").click(function(){
            $("body").append("<div id='fondo-transparente'>");
            $("#fondo-transparente").append("<img src='" + rutaImagen + "'>")
            $("#fondo-transparente").click(function(){
                $(this).remove();
            })
        })

    })







//Fetch de las paginas main-content
$("#menu-item-page").click(function(){
    fetch("RespuestaPerros.html")
    .then(function(response){
        return response.text()
    })
    .then(function(data){
        $("#main-content").html(data);
    })

})





























})














































