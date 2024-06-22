// parallax
let red_icon_one = document.getElementById('red_icon_one');
let doc_icons = document.getElementById('doc_icon');
let chat_icon = document.getElementById('chat_icon');
let hand_icon = document.getElementById('hand_shake');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    red_icon_one.style.bottom = value * 0.6 + 'px';
    doc_icons.style.bottom = value * 3 + 'px';
    chat_icon.style.bottom = value * 1 + 'px';
    hand_icon.style.bottom = value * 0.2 + 'px';
})
// parallax

// Sign up modal
$(document).ready(function(){

    $('.sign_up').click(function(){
        $('.modal_background').fadeIn(700);
        console.log("Hello there.")
    });

    $('.modal_background').click(function(){
        $('.modal_background').fadeOut(700);
    });

})
// Sign up modal