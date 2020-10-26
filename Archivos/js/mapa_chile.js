<<<<<<< HEAD
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
=======
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

    return {
    id: d.IDE,
    nombre: d.Nombre,
    psu: parseFloat(d.PSU),
    rpsu: parseFloat(d.LugarPSU),
    simce: parseFloat(d.SIMCE),
    rsimce: parseFloat(d.LugarSIMCE),
    cx: +d.X,
    cy: +d.Y
    }
    
}).then(function(data){
    var Tooltip = d3.select("#mapa_chile_container")
      .append("div")
      .attr("class", "tooltip1")
      .style("position", 'absolute')
      .style("opacity", 0)
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")


    var mouseover = function(event, d) {
        Tooltip.style("opacity", 1)
    }
    var mousemove = function(event, d) {
        Tooltip
            .html(d.nombre + "<br>" + "Lugar PSU: " + d.rpsu.toString() + "<br>" + "Lugar SIMCE: " + d.rsimce.toString())
            // .style("left", (d3.pointer(event)[0]+15) + "px")
            // .style("top", (d3.pointer(event)[1]) + "px")
    }
    var mouseleave = function(event, d) {
        Tooltip.style("opacity", 0)
    }

    d3.select('#mapa_chile')
    .append('g')
        .attr('id', 'circulos_psu')
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", function(d){ return d.cx })
            .attr("cy", function(d){ return d.cy })
            .attr("r", function(d){ return (21-d.rpsu) })
            .attr("class", "circulo_psu")
            .attr('data-lugar', function(d){ return d.rpsu})
            .attr('data-nombre', function(d){ return d.nombre})
            .style("fill", "green")
            .attr("stroke", "green")
            .attr("stroke-width", 3)
            .attr("fill-opacity", .4)
        .on("mouseover", (event, d) => {mouseover(event, d)})
        .on("mousemove", (event, d) => {mousemove(event, d)})
        .on("mouseleave", (event, d) => {mouseleave(event, d)})
    
        d3.select('#mapa_chile')
        .append('g')
            .attr('id', 'circulos_simce')
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
                .attr("cx", function(d){ return d.cx })
                .attr("cy", function(d){ return d.cy })
                .attr("r", function(d){ return (21-d.rsimce) })
                .attr("class", "circulo_simce")
                .attr('data-lugar', function(d){ return d.rsimce})
                .attr('data-nombre', function(d){ return d.nombre})
                .style("fill", "rgb(252, 191, 73)")
                .attr("stroke", "rgb(252, 191, 73)")
                .attr("stroke-width", 3)
                .attr("fill-opacity", .4)
            .on("mouseover", (event, d) => {mouseover(event, d)})
            .on("mousemove", (event, d) => {mousemove(event, d)})
            .on("mouseleave", (event, d) => {mouseleave(event, d)})


    function update(){

      // For each check box:
      d3.selectAll(".checkbox").each(function(d){
        cb = d3.select(this);
        grp = cb.property("value")

        // If the box is check, I show the group
        if(cb.property("checked")){
            if (grp == 'circulo_simce') {
                d3.select('#mapa_chile').selectAll("."+grp).transition().duration(1000).style("opacity", 1).attr("r", function(d){ return 21-d.rsimce })
            }
            else if (grp == 'circulo_psu') {
                d3.select('#mapa_chile').selectAll("."+grp).transition().duration(1000).style("opacity", 1).attr("r", function(d){ return 21-d.rpsu })
            }

        // Otherwise I hide it
        }
        else{
            d3.select('#mapa_chile').selectAll("."+grp).transition().duration(1000).style("opacity", 0).attr("r", 0)
        }
      })
    }

    // When a button change, I run the update function
    d3.selectAll(".checkbox").on("change",update);

    // And I initialize it at the beginning
    update()
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
        d3.select('.tooltip1').style("opacity", 1)     //CAMBIARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR!!!!!!!!!!!!
        d3.select('.tooltip1').html($(this).attr('data-nombre')) //CAMBIARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR!!!!!!!!!!!!
        var hover_class = $(this).attr('class').split(' ')
        if (region_1 && region_2) {
            if (!hover_class.includes('selec_cl')){
                $(this).css('cursor', 'not-allowed')
            }
        }
    }, function(){
        d3.select('.tooltip1').style("opacity", 1)   //CAMBIARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR!!!!!!!!!!!!
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
>>>>>>> parent of 97c8fe0... Merge branch 'main' into chile3.0
});