var i = 0;
winHeight= $(window).height();

$('#showMeMoreBtn,#header button').click(function(){
	i = 4;
	$('html,body').animate({'scrollTop':winHeight*4},300);
})


	
$(window).scroll(function(e){
	e.stopPropagation();
	if($(window).scrollTop() < 22){
		$('.logo').css('display','inline-block');
		$('#header').css('display','none');
	} else {
		$('.logo').css('display','none');
		$('#header').css('display','inline-block');
	}
})

$('#up').click(function(){
	if(i == 0)
			return true;
	--i;
	$('#up').addClass('active');
	$('html,body').animate({scrollTop:i*winHeight},300);
	setTimeout(function(){$('#up').removeClass('active')},200)
})

$('#down').click(function(){
	if(i == 4)
			return true;
	++i;
	$('#down').addClass('active');
	$('html,body').animate({scrollTop:i*winHeight},300);
	setTimeout(function(){$('#down').removeClass('active')},200)
})


$(document).keydown(function(e){
	e.stopPropagation();
	if(event.which == 38){
		if(i == 0)
			return true;
		--i;
		$('#up').addClass('active');
		setTimeout(function(){$('#up').removeClass('active')},200)
	} else if(event.which == 40){
		if(i == 4)
			return true;
		++i;
		$('#down').addClass('active');
		setTimeout(function(){$('#down').removeClass('active')},200)
	} else {
		return true;
	}
	$('html,body').animate({scrollTop:i*winHeight},300);
	return false;
})