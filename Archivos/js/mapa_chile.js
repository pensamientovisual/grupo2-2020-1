// Mostrar datos
$(document).ready(function(){
    var escondido_chile_1 = true;
    $("#AricaParinacota").click(function(){
        if (escondido_chile_1 == true) {
            escondido_chile_1 = false;
            $("#datos_mapa_chile_1").css("visibility", "visible");
        }
        else {
            escondido_chile_1 = true;
            $("#datos_mapa_chile_1").css("visibility", "hidden");
        }
    });


    var escondido_chile_2 = true;
    $("#Tarapacá").click(function(){
        if (escondido_chile_2 == true) {
            escondido_chile_2 = false;
            $("#datos_mapa_chile_2").css("visibility", "visible");
        }
        else {
            escondido_chile_2 = true;
            $("#datos_mapa_chile_2").css("visibility", "hidden");
        }
    });

    // Cambiar color
    var color_chile_1 = false;
    $("#AricaParinacota").click(function(){
        if (color_chile_1 == false) {
            color_chile_1 = true;
            $("#AricaParinacota path").css("fill", "red");
        }
        else {
            color_chile_1 = false;
            $("#AricaParinacota path").css("fill", "rgb(223,223,223)");
        }
    });

    var color_chile_2 = false;
    $("#Tarapacá").click(function(){
        if (color_chile_2 == false) {
            color_chile_2 = true;
            $("#Tarapacá path").css("fill", "red");
        }
        else {
            color_chile_2 = false;
            $("#Tarapacá path").css("fill", "rgb(223,223,223)");
        }
    });
});