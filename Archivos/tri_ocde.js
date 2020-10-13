var minimo = 400
var maximo = 600
var rango = maximo - minimo
var valor = 2

var datos = d3.dsv(";","/Archivos/tri_ocde.csv", function(d, index) {
    if (index==0) {
        var ext_ind = (index+1).toString()
        var int_ind = ''
    }
    else {
        var ext_ind = (index+1).toString()
        var int_ind = index.toString()
    }

    var dato_edu = parseFloat(d.prom_pisa)
    var dato_inm = parseFloat(d.porc_inmigrantes)
    var dato_ene = parseFloat(d.renovable)

    var radio_orig = d3.select('#grafico_ocde')
    .select('svg')
    .select('#Capa'+ext_ind)
    .select('#ginterior'+int_ind)
    .select('circle')
    .attr('r');

    var capa = d3.select('#grafico_ocde')
    .select('svg')
    .select('#Capa'+ext_ind);

    // Datos Educacion
    capa.select('#ginterior'+int_ind)
    .select('circle')
    .attr('r', parseFloat(radio_orig)*(dato_edu-400)/150)
    .style('fill', 'red');

    // Datos Inmigración
    capa.select('#gmedio'+int_ind)
    .select('circle')
    .attr('r', parseFloat(radio_orig)*(dato_inm*150))
    .style('fill', 'cyan');

    // Datos Inmigración
    capa.select('#gexterior'+int_ind)
    .select('circle')
    .attr('r', parseFloat(radio_orig)*(dato_ene))
    .style('fill', 'green');

    capa.attr('data-edu', dato_edu)
    .attr('data-inm', dato_inm)
    .attr('data-ene', dato_ene)
    .attr('data-pais', d.pais)



    // var bandera0 = d3
    //     .select('#mapa_ocde')
    //     .select('#Flags')
    //     .select('#'+d.codigo)
    //     .select('g')
    //     .attr('transform');
    
});