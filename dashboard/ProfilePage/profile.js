// Dropdrown menu
$(document).ready(function(){
    $('.nav_profile_drop').click(function(){
        $('.profile_dropdown').slideDown(500);
    });
    $('body').click(function (event) {
        if(!$(event.target).closest('.nav_profile_drop').length && !$(event.target).is('.nav_profile_drop')) {
          $(".profile_dropdown").slideUp();
        }     
     });
})
// Dropdrown menu

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
}) 
// toggle dark theme

// $(document).ready(function () {
//     $('.dash_btn_profile').click(function() {
//         $('.input-container').fadeOut(300)
//         $('.input-Profile').fadeIn(300)
//     });
//     $('.dash_btn_resume').click(function() {
//         $('.input-container').fadeOut(300)
//         $('.input-Resume').fadeIn(300)
//     });
//     $('.dash_btn_social').click(function() {
//         $('.input-container').fadeOut(300)
//         $('.input-Social').fadeIn(300)
//     });
//     $('.dash_btn_notifi').click(function() {
//         $('.input-container').fadeOut(300)
//         $('.input-Notification').fadeIn(300)
//     });
//     $('.dash-btn-message').click(function() {
//         $('.input-container').fadeOut(300)
//         $('.input-Message').fadeIn(300)
//     });
//     $('.dash-btn-password').click(function() {
//         $('.input-container').fadeOut(300)
//         $('.input-Password').fadeIn(300)
//     });
//     $('.dash-btn-account').click(function() {
//         $('.input-container').fadeOut(300)
//         $('.input-Account').fadeIn(300)
//     });
// })

$(document).ready(function () {
    $('.dash_btn_profile').click(function() {
        $('.input-container').slideUp(300)
        $('.input-Profile').slideDown(300)
    });
    $('.dash_btn_resume').click(function() {
        $('.input-container').slideUp(300)
        $('.input-Resume').slideDown(300)
    });
    $('.dash_btn_social').click(function() {
        $('.input-container').slideUp(300)
        $('.input-Social').slideDown(300)
    });
    $('.dash_btn_notifi').click(function() {
        $('.input-container').slideUp(300)
        $('.input-Notification').slideDown(300)
    });
    $('.dash-btn-message').click(function() {
        $('.input-container').slideUp(300)
        $('.input-Message').slideDown(300)
    });
    $('.dash-btn-password').click(function() {
        $('.input-container').slideUp(300)
        $('.input-Password').slideDown(300)
    });
    $('.dash-btn-account').click(function() {
        $('.input-container').slideUp(300)
        $('.input-Account').slideDown(300)
    });
})
// Dashboard btn function ^^

$(document).ready(()=>{
    $('#readSingleImageUrl').change(function(){
      const file = this.files[0];
      console.log(file);
      if (file){
        let reader = new FileReader();
        reader.onload = function(event){
          console.log(event.target.result);
          $('#uploadSingleImage').attr('src', event.target.result);
        }
        reader.readAsDataURL(file);
      }
    });
  });

  $(document).ready(()=>{
    $('#read-bannerImageUrl').change(function(){
      const file = this.files[0];
      console.log(file);
      if (file){
        let reader = new FileReader();
        reader.onload = function(event){
          console.log(event.target.result);
          $('#uploadBannerImage').attr('src', event.target.result);
        }
        document.getElementById('bottom-fade').style.display = 'block';
        reader.readAsDataURL(file);
      }
    });
  });

// document.getElementById('readSingleImageUrl').addEventListener('click', function(){
//     console.log("I'ts Alive")
//     if (this.files[0] ) {
//       var picture = new FileReader();
//       picture.readAsDataURL(this.files[0]);
//       picture.addEventListener('load', function(event) {
//         document.getElementById('uploadSingleImage').setAttribute('src', event.target.result);
//         document.getElementById('uploadSingleImage').style.display = 'block';
//       });
//     }
// });
// document.getElementById('read-bannerImageUrl').addEventListener('change', function(){
//     console.log("why no work?")
//     if (this.files[0] ) {
//       var picture = new FileReader();
//       picture.readAsDataURL(this.files[0]);
//       picture.addEventListener('load', function(event) {
//         document.getElementById('uploadBannerImage').setAttribute('src', event.target.result);
//         document.getElementById('uploadBannerImage').style.display = 'block';
//         document.getElementById('bottom-fade').style.display = 'block';

//       });
//     }
// });
// upload profile pic

$(document).ready(function () {
    $('.delete-account-btn').click(function() {
        $('.delete-account-modal-wrapper').fadeIn(500)
    })
    $('.cancel-delete').click(function() {
        $('.delete-account-modal-wrapper').fadeOut(500)
    })
})
// Delete account modal

$(document).ready(function () {
    $('.search-user-wrapper').click(function() {
        $('.user-block-dropdown').slideDown(500);
    })
    $('body').click(function (event) {
        if(!$(event.target).closest('.search-user-wrapper').length && !$(event.target).is('.search-user-wrapper')) {
          $(".user-block-dropdown").slideUp();
        }     
     });
})
// Search user