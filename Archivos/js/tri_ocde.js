var minimo = 400
var maximo = 600
var rango = maximo - minimo
var valor = 2

d3.dsv(";","/Archivos/tri_ocde.csv", function(d, index) {
    return {
        pais: d.pais,
        codigo: d.codigo,
        lectura: +d.lectura,
        matematicas: +d.matematicas,
        ciencias: +d.ciencias,
        prom_pisa: +d.prom_pisa,
        renovable: +d.renovable,
        pobl_inmigrante: +d.pobl_inmigrante,
        pobl_total: +d.pobl_total,
        porc_inmigrantes: +d.porc_inmigrantes
      };
}).then(function(data){
    var datos = data.sort(function(a,b){
        return d3.descending(a.prom_pisa, b.prom_pisa)
    })
    datos.forEach(
        rellenar
    );
});

function rellenar(d, index){
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
    .style('fill', 'fcbf49');
    
    // Datos Inmigración
    capa.select('#gexterior'+int_ind)
    .select('circle')
    .attr('r', parseFloat(radio_orig)*(dato_ene))
    .style('fill', 'green');
    
    capa.attr('data-edu', dato_edu)
    .attr('data-inm', dato_inm)
    .attr('data-ene', dato_ene)
    .attr('data-pais', d.pais)
    .attr('class', 'capa_ocde');
    
    
    
    // var bandera0 = d3
    //     .select('#mapa_ocde')
    //     .select('#Flags')
    //     .select('#'+d.codigo)
    //     .select('g')
    //     .attr('transform');
}

$(document).ready(function(){

    $('#grafico_ocde svg g').mouseover(function(){
        var pais_capa = $(this).attr('data-pais');
        var data_edu = $(this).attr('data-edu');
        var data_inm = $(this).attr('data-inm');
        var data_ene = $(this).attr('data-ene'); 
        var data_tag = $(this).attr('id');
        if (data_tag != "OCDE_graf_Texto" && data_tag != "info_ocde11" && data_tag != "info_ocde12" && data_tag != "info_ocde13" && data_tag != "info_ocde14" ) {
            $('#info_ocde11 text').text(pais_capa);
            $('#info_ocde14 text').text('Promedio Pisa: '+data_edu);
            $('#info_ocde12 text').text('% Población Inmigrantes: '+data_inm*100);
            $('#info_ocde13 text').text('% Energía Primaria Renovable:  '+data_ene*100);
        }
    });
});