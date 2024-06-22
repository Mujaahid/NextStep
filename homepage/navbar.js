$(document).ready(function(){
    $('.main-searchbar').click(function(){
        $('.main-nav-drop').slideDown(500);
    });
    $('body').click(function (event) {
        if(!$(event.target).closest('.main-searchbar').length && !$(event.target).is('.main-nav-drop')) {
          $(".main-nav-drop").slideUp();
        }     
     });

     $('.open-nav-job').click(function() {
        $('.main-searchbar-wrapper').slideUp(300)
        $('.jobs-searchbar-wrapper').slideDown(300)
     })
     $('.open-nav-channel').click(function() {
        $('.main-searchbar-wrapper').slideUp(300)
        $('.channels-search-wrapper').slideDown(300)
     })
     $('.open-nav-similar').click(function() {
        $('.main-searchbar-wrapper').slideUp(300)
        $('.similar-searchbar-wrapper').slideDown(300)
     })



     $('.open-jobs').click(function() {
        $('.searchbar-wrapper').slideUp(300)
        $('.jobs-searchbar-wrapper').slideDown(300)
     })
     $('.open-channels').click(function() {
        $('.searchbar-wrapper').slideUp(300)
        $('.channels-search-wrapper').slideDown(300)
     })
     $('.open-content').click(function() {
        $('.searchbar-wrapper').slideUp(300)
        $('.similar-searchbar-wrapper').slideDown(300)
     })
})
// main nav dropdownd

$(document).ready(function(){
    $('.job-searchbar').click(function(){
        $('.job-nav-drop').slideDown(500);
    });
    $('body').click(function (event) {
        if(!$(event.target).closest('.job-searchbar').length && !$(event.target).is('.job-nav-drop')) {
          $(".job-nav-drop").slideUp();
        }     
     });
})
$(document).ready(function(){
    $('.channels-searchbar').click(function(){
        $('.channels-nav-drop').slideDown(500);
    });
    $('body').click(function (event) {
        if(!$(event.target).closest('.channels-searchbar').length && !$(event.target).is('.channels-nav-drop')) {
          $(".channels-nav-drop").slideUp();
        }     
     });
})
$(document).ready(function(){
    $('.similar-nav-searchbar').click(function(){
        $('.similar-nav-drop').slideDown(500);
    });
    $('body').click(function (event) {
        if(!$(event.target).closest('.similar-nav-searchbar').length && !$(event.target).is('.similar-nav-drop')) {
          $(".similar-nav-drop").slideUp();
        }     
     });
})
// Sub nav dropdown functions





$(document).ready(function() {
    $('.nav-profile-wrapper').click(function() {
        $('.nav-dropdown').slideDown(500)
    })
    $('body').click(function (event) {
        if(!$(event.target).closest('.nav-profile-wrapper').length && !$(event.target).is('.nav-profile-wrapper')) {
          $(".nav-dropdown").slideUp(900);
        }     
     });
})
// Drops down settings

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
}) 
// toggle dark theme

$(document).ready(function(){
    $('.notificationBtn').click(function() {
        $('.notification_modal_background').fadeIn(500);
    })
    $('.close_notifi').click(function(){
        $('.notification_modal_background').fadeOut(500);
    })
})
// notification



// Main body functions


$(".job-description").text(function(index, currentText) {
    if(currentText.length > 240){
        return currentText.substr(0, 240)+" ...";
    }
});
// Job app description



$('.hide-job-app').click(function(){
	$('.job-results').slideUp(500);
	$('.show-job-app').show();
	$('.hide-job-app').hide();
});
$('.show-job-app').click(function(){
	$('.job-results').slideDown(500);
	$('.hide-job-app').show();
	$(this).hide();
});

// Show job Applications

$('.hide-channel').click(function(){
    console.log("Hello")
	$('.channels-body').slideUp(500);
	$('.show-channel').show();
	$('.hide-channel').hide();
});
$('.show-channel').click(function(){
	$('.channels-body').slideDown(500);
	$('.hide-channel').show();
	$(this).hide();
});
// Show channels


$('.hide-similar').click(function(){
    console.log("Finaly")
	$('.similar-content-body').slideUp(500);
	$('.show-similar').show();
	$('.hide-similar').hide();
});
$('.show-similar').click(function(){
	$('.similar-content-body').slideDown(500);
	$('.hide-similar').show();
	$(this).hide();
});
// Show channels


// Show images 
$(document).ready(function() {
    $('.openImages').click(function() {
        $('.similar-searchbar').hide(200)
        $('.image-search-bar').show(300)
        $('.similar-content-wrapper').slideUp(300)
        $('.similar-img-content-wrapper').slideDown(300)
    })
    $('.openVideo').click(function() {
        $('.similar-searchbar').hide(200)
        $('.video-search-bar').show(300)
        $('.similar-content-wrapper').slideUp(500)
        $('.similar-vid-content-wrapper').slideDown(500)
    })
    $('.openResume').click(function() {
        $('.similar-searchbar').hide(200)
        $('.resume-search-bar').show(300)
        $('.similar-content-wrapper').slideUp(500)
        $('.similar-resume-wrapper').slideDown(500)
    })
})





$(document).ready(function() {
    $('.video-search-bar').click(function() {
        $('.video-search-bar').css({"width":"100%"})
    })
    $('.image-search-bar').click(function() {
        $('.image-search-bar').css({"width":"100%"})
    })
    $('.resume-search-bar').click(function() {
        $('.resume-search-bar').css({"width":"100%"})
    })
})
// Searchbar for similar content