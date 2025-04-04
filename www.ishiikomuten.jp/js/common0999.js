$(function(){
	// menu
	$('#header_menu_button').on('click', function(){
		$(this).toggleClass('menu_open');
		$('.gnavi').toggleClass('menu_open');
	});
	const openerIcon =  '<span class="open"><span class="vertical"></span><span class="beside"><span></span>';
	$('ul.depth1 > li.has_children').prepend(openerIcon);
	$('ul.depth1 > li.has_children .open, ul.depth1 > li.has_children.lm17 > a, ul.depth1 > li.has_children.lm34 > a, ul.depth1 > li.has_children.lm43 > a').on('click', function(){
		$(this).parent().toggleClass('child_open');
		$(this).parent().children('ul.depth2').slideToggle('slow');
		return false;
	});
	// scroll
	$('[href^="#"]').on("click", function () {
		var w = $(window).width();
		var href = $(this).attr("href");
		var pos = $(href).offset().top;
		$("body, html").animate({
			scrollTop: pos
		}, 800);
		return false;
	});
	// animation
	let scrollAnimationElm = document.querySelectorAll('.animate_banner');
	let scrollAnimationFunc = function () {
		for (let i = 0; i < scrollAnimationElm.length; i++) {
			let triggerMargin = 100;
			if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
				scrollAnimationElm[i].classList.add('is-animated');
			}
		}
	}
	window.addEventListener('load', scrollAnimationFunc);
	window.addEventListener('scroll', scrollAnimationFunc);
})