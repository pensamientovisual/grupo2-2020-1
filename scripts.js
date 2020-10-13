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

});

