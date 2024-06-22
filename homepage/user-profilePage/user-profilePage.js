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



$(document).ready(function() {

    if($('.video-wrapper').height() > 450) {
        $('.view-more-videos').show()
        $('.video-fade').show()
        console.log("Hello there")
    } else {
        $('.video-fade').hide()
    }
    $('.view-more-videos').click(function() {
        $('.video-wrapper').css({
            "max-height" : "100%"
        })
        $('.video-fade').hide()
        $('.hide-videos').show()
        $('.view-more-videos').hide()
        console.log("hello")
    })
    $('.hide-videos').click(function() {
        $('.video-wrapper').css({
            "max-height" : "460px"
        })
        $('.video-fade').show()
        $('.hide-videos').hide()
        $('.view-more-videos').show()
    })
    $('.view-vid-slide').click(function() {
        $('.gallery-slide-wrapper').hide(300);
        $('.video-slide-wrapper').show(300);


        let videoWrap = document.querySelector(".video-wrapper");
        console.log(videoWrap.clientHeight);


        // setTimeout(() => {
        //     if($('.video-wrapper').height() > 450) {
        //         $('.view-more-videos').show()
        //         $('.video-fade').show()
        //         console.log("Hello there")
        //     } else {
        //         $('.video-fade').hide()
        //     }
        // }, 300);

    })



    $('.view-img-slide').click(function() {
        $('.gallery-slide-wrapper').slideUp(300);
        $('.image-slide-wrapper').slideDown(300);

        let imageWrap = document.querySelector(".image-wrapper");
        console.log(imageWrap.clientHeight);

        setTimeout(() => {
            
            if($('.image-wrapper').height() > 500) {
                $('.view-more-images').show()
                $('.image-fade').show()
            } else {
                $('.image-fade').hide()
            }
        }, 300);

        $('.view-more-images').click(function() {
            $('.image-wrapper').css({
                "max-height" : "100%"
            })
            $('.image-fade').hide()
            $('.hide-images').show()
            $('.view-more-images').hide()
        })

        $('.hide-images').click(function() {
            $('.image-wrapper').css({
                "max-height" : "510px"
            })
            $('.image-fade').show()
            $('.hide-images').hide()
            $('.view-more-images').show()
        })
    })
    $('.view-doc-slide').click(function() {
        $('.gallery-slide-wrapper').slideUp(300);
        $('.resume-slide-wrapper').slideDown(300);


        setTimeout(() => {
            
            if($('.doc-wrapper').height() > 560) {
                $('.view-more-doc').show()
                $('.doc-fade').show()
            } else {
                $('.doc-fade').hide()
            }
        }, 300);

        $('.view-more-doc').click(function() {
            $('.doc-wrapper').css({
                "max-height" : "100%"
            })
            $('.doc-fade').hide()
            $('.hide-doc').show()
            $('.view-more-doc').hide()
        })

        $('.hide-doc').click(function() {
            $('.doc-wrapper').css({
                "max-height" : "570px"
            })
            $('.doc-fade').show()
            $('.hide-doc').hide()
            $('.view-more-doc').show()
        })
    })
})
// Switching Galleries



$(document).ready(function() {
    $('.view-volunteering-description').click(function() {
        $('.volunteering-item-description').slideDown(300)
        $('.view-volunteering-description').hide()
        $('.hide-volunteering-description').show()
    })
    $('.hide-volunteering-description').click(function() {
        $('.volunteering-item-description').slideUp(300)
        $('.view-volunteering-description').show()
        $('.hide-volunteering-description').hide()
    })
})
// View Description



$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});
$('.connect-btn').click(function() {
    $('.connect-btn').toggleClass('Connected');
    $('.connect-btn').toggleText('Connect', 'Pending...')
});
$('.follow-btn').click(function() {
    $('.follow-btn').toggleClass('Followed');
    $('.follow-btn').toggleText('Follow', 'Followed')
});
// Connect btn