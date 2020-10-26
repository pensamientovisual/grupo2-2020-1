var datos_chile = d3.dsv(";","/Archivos/datos_chile.csv", function(d, index) {
    
    var id = d.IDE
    var nombre = d.Nombre
    var psu = parseFloat(d.PSU)
    var simce = parseFloat(d.SIMCE)
    // console.log(nombre)
    var region = d3.select('#mapa_chile')
    .select('#'+id);

    region.attr('data-index', index+1);
    region.attr('title', nombre);
    region.attr('aria-label', nombre);
    region.attr('data-nombre', nombre);
    region.attr('data-psu', psu);
    region.attr('data-simce', simce);
    region.attr('data-lugar-psu', d.LugarPSU);
    region.attr('data-lugar-simce', d.LugarSIMCE);
    
    d3.select('#tt'+(index+1).toString()).attr('style', 'visibility: hidden;')
    
});

var region_1 = false;
var region_2 = false;

// var color_destacado = '#610402'
var color_destacado = 'red'
var color_base = 'rgb(223,223,223)'

$(document).ready(function(){
    $.fn.editar_info_cl = function(bloque, t_region, t_psu, t_psu_nac, t_simce, t_simce_nac, t_lugp, t_lugs){
        if (bloque == 1) {
            bloque = '1'
            var bloque_sub1 = '1'
            var bloque_sub2 = '2'
        }
        else if (bloque == 2) {
            bloque = '2'
            var bloque_sub1 = '3'
            var bloque_sub2 = '4'
        }
        
        bloque = bloque.toString()
    
        $('#cl_region'+bloque).text(t_region);
        $('#cl_prom_region'+bloque_sub1).text('Promedio: '+t_psu);
        $('#cl_prom_chile'+bloque_sub1).text('Promedio Nacional: '+t_psu_nac);
        $('#cl_lugar'+bloque_sub1).text('Lugar: '+t_lugp);
    
        $('#cl_prom_region'+bloque_sub2).text('Promedio: '+t_simce);
        $('#cl_prom_chile'+bloque_sub2).text('Promedio Nacional: '+t_simce_nac);
        $('#cl_lugar'+bloque_sub2).text('Lugar: '+t_lugs);
        $.fn.ajustar_libro(bloque, t_psu, t_psu_nac, t_simce, t_simce_nac);
    };

    $.fn.ajustar_libro = function(bloque, t_psu, t_psu_nac, t_simce, t_simce_nac){
        var porc_psu = (parseFloat(t_psu)-150)/700;
        var porc_psu_nac = (parseFloat(t_psu_nac)-150)/700;

        var porc_simce = (parseFloat(t_simce))/400;
        var porc_simce_nac = (parseFloat(t_simce_nac))/400;

        var max_libro = 63.03
        // console.log([porc_psu, porc_psu_nac, porc_simce, porc_simce_nac])
        max_libro = parseFloat(max_libro)

        if (bloque == 1) {
            bloque = '1'
            var bloque_sub1 = '1'
            var bloque_sub2 = '2'
        }
        else if (bloque == 2) {
            bloque = '2'
            var bloque_sub1 = '3'
            var bloque_sub2 = '4'
        }
        bloque = bloque.toString()
        console.log('#libro-barra-1-'+bloque_sub1)
        d3.select('#libro-barra1-'+bloque_sub1).select('rect').attr('width', max_libro*porc_psu);
        d3.select('#libro-barra2-'+bloque_sub1).select('rect').attr('width', max_libro*porc_psu_nac);
        d3.select('#libro-barra1-'+bloque_sub2).select('rect').attr('width', max_libro*porc_simce);
        d3.select('#libro-barra2-'+bloque_sub2).select('rect').attr('width', max_libro*porc_simce_nac);
    };
    

    // $('.region_cl').addClass('hint--bottom');
    // $('#titulo_portada').addClass('hint--bottom');
    // $('#titulo_portada').attr('aria-label', 'holita');


    $('.region_cl').click(function(){
 
        var region_selec = $(this).attr('id');
        var clase_click = $(this).attr('class').split(' ');

        var n_region = $(this).attr('data-nombre');
        var n_psu = $(this).attr('data-psu');
        var n_simce = $(this).attr('data-simce');
        var n_lugarS = $(this).attr('data-lugar-simce');
        var n_lugarP = $(this).attr('data-lugar-psu');
        var n_psu_nac = '501'
        var n_simce_nac = '264.5'

        if (!clase_click.includes('selec_cl')) {
            if (region_1==false || region_2==false) {
                $(this).addClass('selec_cl');
                $('#'+region_selec+' path').css('fill', color_destacado);
                if (region_1 == false) {
                    region_1 = true;
                    $(this).addClass('selec_cl1');
                    $.fn.editar_info_cl(1, n_region, n_psu, n_psu_nac, n_simce, n_simce_nac, n_lugarP, n_lugarS);
                }
                else if (region_2 == false) {
                    region_2 = true;
                    $(this).addClass('selec_cl2');
                    $.fn.editar_info_cl(2, n_region, n_psu, n_psu_nac, n_simce, n_simce_nac, n_lugarP, n_lugarS);
                }
            }
        }
        else {
            $('#'+region_selec+' path').css('fill', color_base);
            $(this).removeClass('selec_cl');
            if (clase_click.includes('selec_cl1')) {
                region_1 = false;
                $(this).removeClass('selec_cl1');
                $.fn.editar_info_cl(1, 'Región', '', '', '', '', '', '');
            }
            else if (clase_click.includes('selec_cl2')) {
                region_2 = false;
                $(this).removeClass('selec_cl2');
                $.fn.editar_info_cl(2, 'Región', '', '', '', '', '', '');
            }
        }
            
    });

    $('.region_cl').hover(function(){
        // $('#selector_cl').text($(this).attr('title'))
        $('#tt'+$(this).attr('data-index')).attr('style', 'visbility: visible;')
        var hover_class = $(this).attr('class').split(' ')
        if (region_1 && region_2) {
            if (!hover_class.includes('selec_cl')){
                $(this).css('cursor', 'not-allowed')
            }
        }
    }, function(){
        $('#tt'+$(this).attr('data-index')).attr('style', 'display: none;')
        // $('#selector_cl').text('Selecciona una o dos regiones')
        $(this).css('cursor', '')
    });
    
    for (let i = 0; i < 35; i++) {
        if (i==0){
            var i2 = ''
        }
        else {
            var i2 = i.toString()
        }
        $('#gbandera'+i2).css("display","none")
      }
});