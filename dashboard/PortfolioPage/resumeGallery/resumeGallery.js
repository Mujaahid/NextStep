


// Show Filelist 
$('.hideplaylist').click(function(){
	$('.playlistBody').slideUp(500);
	$('.showplaylist').show();
	$('.hideplaylist').hide();
});
$('.showplaylist').click(function(){
	$('.playlistBody').slideDown(500);
	$('.hideplaylist').show();
	$(this).hide();
});

// Show comments
$('.showComments').click(function(){
	$('.commentMain').show(500);
	$('.hideComments').show();
	$('.showComments').hide();
});
$('.hideComments').click(function(){
	$('.commentMain').hide(500);
	$('.showComments').show();
	$(this).hide();
});
