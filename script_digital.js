$('.header-link-a').click(function(e) {
	e.preventDefault();
	$('.header-link-a').removeClass('clicked');
	$(this).addClass('clicked');
})

$('#menu').click(function() {
	$('#floating-box').css('display', 'block');
	$('.fa-times').css('display', 'block');
	$('#collapse-ul').css('display', 'block');
	$('#collapse-ul li').css('display', 'block');
	$('#collapse-ul a').css('display', 'block');
	$(this).animate({opacity: '0'}, 250);
	$('#floating-box').animate({height: '100%', opacity: '1'}, 250);
})

$('.fa-times').click(function(){
	setTimeout(function() {
		$('#floating-box').css('display', 'none');
		$('#floating-box').css('height', '0%');
	}, 250);
	$('#menu').animate({opacity: '1'}, 250);
	$('#floating-box').animate({opacity: '0'}, 250);
})

var $page = $('.page');

$('.menu_toggle').on('click', function(){
  $page.toggleClass('shazam');
});
$('.content').on('click', function(){
  $page.removeClass('shazam');
});