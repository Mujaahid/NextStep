// Dropdrown menu
$(document).ready(function(){
    $('.nav_profile_drop').click(function(){
        $('.profile_dropdown').slideDown(500);
    });
    $('.dashboard').click(function(){
        $('.profile_dropdown').slideUp(700);
    });
})
// Dropdrown menu
// notification
$(document).ready(function(){
    $('.alert_icon').click(function() {
        $('.notification_modal_background').fadeIn(500);
    })
    $('.close_notifi').click(function(){
        $('.notification_modal_background').fadeOut(500);
    })
})
// notification

// toggle dark theme
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
}) 
// toggle dark theme



// Show comments


$('.arrowUp').hide();

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
// View Description