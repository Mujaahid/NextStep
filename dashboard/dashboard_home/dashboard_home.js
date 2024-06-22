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

let txt = $('.profile-bio').text();
if(txt.length > 300) {
    $('.profile-bio').text(txt.substring(0,290) + '...');
    $("#read-more-btn").css({
        display: "block"
    });
}
// Limited text 

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
