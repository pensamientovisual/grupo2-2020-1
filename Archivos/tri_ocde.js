var minimo = 400
var maximo = 600
var rango = maximo - minimo
var valor = 2

var datos = d3.dsv(";","/Archivos/tri_ocde.csv", function(d) {
    var bandera0 = d3
        .select('#mapa_ocde')
        .select('#Flags')
        .select('#'+d.codigo)
        .select('g')
        .attr('transform');

    var puntaje = d.lectura
    var pond_edu = (puntaje-minimo)/rango*valor

    
});