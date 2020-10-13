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

	function gritar() {
		console.log('AAAAh')
	}

	// gritar()

	// function cambio_modo() {
	// 	console.log('test')
	// 	if(color == 'oscuro') {
	// 		color = 'claro';
	// 		$("#bt_color_txt").text(`Modo Oscuro`)
	// 		$('body').addClass("whitemode")
	// 		$('h1').addClass("whitemode")
	// 		$('.boton1').addClass("whitemode")
	// 		$('.boton_pequeño').addClass("whitemode")
	// 		$('h2').addClass("whitemode")
	// 		$('p').addClass("whitemode")
    //     }
    //     else {
	// 		color = 'oscuro';
    //         $("#bt_color_txt").text(`Modo Claro`)
	// 		$("body").removeClass("whitemode")
	// 		$('h1').removeClass("whitemode")
	// 		$('.boton1').removeClass("whitemode")
	// 		$('.boton_pequeño').removeClass("whitemode")
	// 		$('h2').removeClass("whitemode")
	// 		$('p').removeClass("whitemode")

	// 	}	
	// }

	// $("#bt_color").click(cambio_modo());
	// // $(".boton_pequeño").click(cambio_modo());


	
    $("#bt_color").click(function(){
		// console.log('test')
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

		}	
	});

	$(".boton_pequeño").click(function(){
		// console.log('test')
		if(color == 'oscuro') {
			color = 'claro';
			$("#bt_color_txt").text(`Modo Oscuro`)
			$('body').addClass("whitemode")
			$('h1').addClass("whitemode")
			$('.boton1').addClass("whitemode")
			$('.boton_pequeño').addClass("whitemode")
			$('h2').addClass("whitemode")
			$('p').addClass("whitemode")
        }
        else {
			color = 'oscuro';
            $("#bt_color_txt").text(`Modo Claro`)
			$("body").removeClass("whitemode")
			$('h1').removeClass("whitemode")
			$('.boton1').removeClass("whitemode")
			$('.boton_pequeño').removeClass("whitemode")
			$('h2').removeClass("whitemode")
			$('p').removeClass("whitemode")

		}	
	});

   





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

	// Mostrar datos
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


	 // Grafico OCDE

	 /* Código en tri_ocde.js */


});