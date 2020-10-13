var minimo = 400
var maximo = 600
var rango = maximo - minimo
var valor = 2

var datos = d3.dsv(";","Archivos/pisa2018.csv", function(d) {
    var bandera0 = d3
        .select('#mapa_ocde')
        .select('#Flags')
        .select('#'+d.codigo)
        .select('g')
        .attr('transform');

    var puntaje = d.lectura
    var ponderador = (puntaje-minimo)/rango*valor

    bandera = bandera0.slice(7,-1).split(',');
    var ancho = +bandera[0]*ponderador;
    var altura = +bandera[3]*ponderador;
    var mod1 = +bandera[4]*ponderador;
    var mod2 = +bandera[5]*ponderador;
    var modificador = [ancho.toString(), bandera[1], bandera[2], altura.toString(), mod1.toString(), mod2.toString()];
    // console.log(modificador)
    var nueva_matrix = 'matrix('+modificador.toString()+')';
    // console.log(modificador)    
    d3.select('#mapa_ocde')
        .select('#Flags')
        .select('#'+d.codigo)
        .select('g')
        .attr('transform', nueva_matrix);
    // bandera.attr('transform')

    // .attr('r', parseInt(d.numero)*10)
    // .style('fill', 'red')



    d3.select('#mapa_ocde')
        .select('#Flags')
        .select('#'+d.codigo)
        .attr('data-pais', d.pais)
        .attr('data-lec', d.lectura)
        .attr('data-mat', d.matematicas)
        .attr('data-cie', d.ciencias)
        .attr('class', 'pais_mapa');


});


$(document).ready(function(){
    $('#mapa_ocde svg #Flags g').mouseover(function(){
        var pais_capa = $(this).attr('data-pais');
        var data_lec = $(this).attr('data-lec');
        var data_mat = $(this).attr('data-mat');
        var data_cie = $(this).attr('data-cie');
        $('#info_mapamundi').text(pais_capa+' - Lectura: '+data_lec+' - Matemáticas: '+data_mat+' - Ciencias: '+data_cie);
    });
});