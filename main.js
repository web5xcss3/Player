// Opening and closing the playlist.
$('.icon-arrow-down').on('click', function () {
	var showPlayer = $('.player');

	if(showPlayer.hasClass('showmore')){
		showPlayer.removeClass('showmore');
		$(this).attr('Hide');
	}
	else{
		showPlayer.addClass('showmore');
		$(this).attr('Show');
	}
});