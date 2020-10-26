/* Este archivo contiene scripts GENERALES para el funcionamiento del sitio. */

var color = 'oscuro'
$(document).ready(function(){
	var menuBtn = $('.menu-icon'),
		menu = $('.navigation ul');
	menuBtn.click(function() {
		if( menu.hasClass('show') ) {
			menu.removeClass('show');
		} 
		else{
			menu.addClass('show');
		}
		
	});	
	
	$.fn.byn_color = function() {
		if(color == 'oscuro') {
			color = 'claro';
			$("#bt_color_txt").text(`Modo Oscuro`)
			$('body').addClass("whitemode")
			$('h1').addClass("whitemode")
			$('.boton1').addClass("whitemode")
			$('.boton_pequeño').addClass("whitemode")
			$('h2').addClass("whitemode")
			$('h3').addClass("whitemode")
			$('p').addClass("whitemode")
			$('text').addClass("whitemode")
			$('#selector_chile').addClass("whitemode")
			for (let i = 1; i < 5; i++) {
				$('#libro-fondo-'+i.toString()).css("fill","white")
				$('#libro-svg-'+i.toString()+' path').css("fill","rgb(0,13,20)")
			  }
        }
        else {
			color = 'oscuro';
            $("#bt_color_txt").text(`Modo Claro`)
			$("body").removeClass("whitemode")
			$('h1').removeClass("whitemode")
			$('.boton1').removeClass("whitemode")
			$('.boton_pequeño').removeClass("whitemode")
			$('h2').removeClass("whitemode")
			$('h3').removeClass("whitemode")
			$('p').removeClass("whitemode")
			$('text').removeClass("whitemode")
			$('#selector_chile').removeClass("whitemode")
			for (let i = 1; i < 5; i++) {
				$('#libro-fondo-'+i.toString()).css("fill","rgb(0,13,20)")
				$('#libro-svg-'+i.toString()+' path').css("fill","rgb(223,223,223)")
			  }
		}
	}

	$("#bt_color").click(function(){$.fn.byn_color()})
	
	$(".boton_pequeño").click(function(){$.fn.byn_color()})

   




	// Este código permite el correcto funcionamiento de la barra superior.
	var alt_nav = $('nav').height();
	var waltura = $('#inicio').height();
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > waltura) {
			$('header').css('position', 'fixed');
		} else {
			$('header').css('position','unset');
		}
	});
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > waltura-1) {
			$('.main').css('margin-top', alt_nav);
		} else {
			$('.main').css('margin-top', 0);
		}
	});
	$('#chile').css('padding-top', alt_nav);
	$('#ocde').css('padding-top', alt_nav);

	// Script del Mapa de Chile está en Archivos/mapa_chile.js



	
	// Grafico OCDE
	 /* Código en tri_ocde.js */


});