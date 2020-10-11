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
		console.log('test')
		if(color == 'oscuro') {
			$("#bt_color_txt").text(`Modo Oscuro`)
			$(document.body).addClass("whitemode")
            color = 'claro';
        }
        else {
            $("#bt_color_txt").text(`Modo Claro`)
			$("body").removeClass("whitemode")
            color = 'oscuro';
        }
	});
});

