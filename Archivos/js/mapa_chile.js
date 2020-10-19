var datos_chile = d3.dsv(";","/Archivos/datos_chile.csv", function(d, index) {
    
    var id = d.IDE
    var nombre = d.Nombre
    var psu = parseFloat(d.PSU)
    var simce = parseFloat(d.SIMCE)
    console.log(nombre)
    var region = d3.select('#mapa_chile')
    .select('#'+id);

    region.attr('aria-label', nombre);
    region.attr('data-psu', psu);
    region.attr('data-simce', simce);
    
});


var region_1 = false;
var region_2 = false;

var color_destacado = '#610402'
var color_base = 'rgb(223,223,223)'

$(document).ready(function(){
    // $('.region_cl').addClass('hint--bottom');
    // $('#titulo_portada').addClass('hint--bottom');
    // $('#titulo_portada').attr('aria-label', 'holita');


    $('.region_cl').click(function(){
        var region_selec = $(this).attr('id');
        var clase_click = $(this).attr('class').split(' ');
        if (!clase_click.includes('selec_cl')) {
            if (region_1==false || region_2==false) {
                $(this).addClass('selec_cl');
                $('#'+region_selec+' path').css('fill', color_destacado);
                if (region_1 == false) {
                    region_1 = true;
                    $(this).addClass('selec_cl1');
                }
                else if (region_2 == false) {
                    region_2 = true;
                    $(this).addClass('selec_cl2');
                }
            }
        }
        else {
            $('#'+region_selec+' path').css('fill', color_base);
            $(this).removeClass('selec_cl');
            if (clase_click.includes('selec_cl1')) {
                region_1 = false;
                $(this).removeClass('selec_cl1');
            }
            else if (clase_click.includes('selec_cl2')) {
                region_2 = false;
                $(this).removeClass('selec_cl2');
            }
        }
            
    });



    // $('#grafico_ocde svg g').mouseover(function(){
    //     console.log('Dentro de capa_ocde')
    //     var pais_capa = $(this).attr('data-pais');
    //     var data_edu = $(this).attr('data-edu');
    //     var data_inm = $(this).attr('data-inm');
    //     var data_ene = $(this).attr('data-ene');
    //     console.log([pais_capa, data_edu, data_ene, data_inm]);
    //     $('#info_ocde11').text('País:'+pais_capa+' Promedio Pisa:'+data_edu+' Porcentaje Población Inmigrantes: '+data_inm+'  Porcentaje Energía Primaria Renovable: '+data_ene);
    // });
});







// // Mostrar datos
// $(document).ready(function(){
//     /* var escondido_chile_1 = true;
//     $("#AricaParinacota").click(function(){
//         if (escondido_chile_1 == true) {
//             escondido_chile_1 = false;
//             $("#datos_mapa_chile_1").css("visibility", "visible");
//         }
//         else {
//             escondido_chile_1 = true;
//             $("#datos_mapa_chile_1").css("visibility", "hidden");
//         }
//     });


//     var escondido_chile_2 = true;
//     $("#Tarapacá").click(function(){
//         if (escondido_chile_2 == true) {
//             escondido_chile_2 = false;
//             $("#datos_mapa_chile_2").css("visibility", "visible");
//         }
//         else {
//             escondido_chile_2 = true;
//             $("#datos_mapa_chile_2").css("visibility", "hidden");
//         }
//     });

//     // Cambiar color
//     var color_chile_1 = false;
//     $("#AricaParinacota").click(function(){
//         if (color_chile_1 == false) {
//             color_chile_1 = true;
//             $("#AricaParinacota path").css("fill", "red");
//         }
//         else {
//             color_chile_1 = false;
//             $("#AricaParinacota path").css("fill", "rgb(223,223,223)");
//         }
//     });

//     var color_chile_2 = false;
//     $("#Tarapacá").click(function(){
//         if (color_chile_2 == false) {
//             color_chile_2 = true;
//             $("#Tarapacá path").css("fill", "red");
//         }
//         else {
//             color_chile_2 = false;
//             $("#Tarapacá path").css("fill", "rgb(223,223,223)");
//         }
//     }); */
// });