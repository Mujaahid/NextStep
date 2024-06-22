document.getElementById('readImageGalleryUrl').addEventListener('change', function(){
  if (this.files[0] ) {
    var picture = new FileReader();
    picture.readAsDataURL(this.files[0]);
    picture.addEventListener('load', function(event) {
      document.getElementById('uploadedImageGallery').setAttribute('src', event.target.result);
      document.getElementById('uploadedImageGallery').style.display = 'block';
    });
  }
});
document.getElementById('readSingleImageUrl').addEventListener('change', function(){
  if (this.files[0] ) {
    var picture = new FileReader();
    picture.readAsDataURL(this.files[0]);
    picture.addEventListener('load', function(event) {
      document.getElementById('uploadSingleImage').setAttribute('src', event.target.result);
      document.getElementById('uploadSingleImage').style.display = 'block';
    });
  }
});
// Upload images


document.getElementById('read-VideoGallery-Url').addEventListener('change', function(){
  if (this.files[0] ) {
    var picture = new FileReader();
    picture.readAsDataURL(this.files[0]);
    picture.addEventListener('load', function(event) {
      document.getElementById('upload-videoGallery').setAttribute('src', event.target.result);
      document.getElementById('upload-videoGallery').style.display = 'block';
    });
  }
});
document.getElementById('readSingleVideoUrl').addEventListener('change', function(){
  if (this.files[0] ) {
    var picture = new FileReader();
    picture.readAsDataURL(this.files[0]);
    picture.addEventListener('load', function(event) {
      document.getElementById('uploadSingleVideo').setAttribute('src', event.target.result);
      document.getElementById('uploadSingleVideo').style.display = 'block';
    });
  }
});
// upload videos


document.getElementById('read-ResumeGallery-Url').addEventListener('change', function(){
  if (this.files[0] ) {
    var picture = new FileReader();
    picture.readAsDataURL(this.files[0]);
    picture.addEventListener('load', function(event) {
      document.getElementById('upload-resumeoGallery').setAttribute('src', event.target.result);
      document.getElementById('upload-resumeGallery').style.display = 'block';
    });
  }
});
document.getElementById('readSingleResumeUrl').addEventListener('change', function(){
  if (this.files[0] ) {
    var picture = new FileReader();
    picture.readAsDataURL(this.files[0]);
    picture.addEventListener('load', function(event) {
      document.getElementById('uploadSingleResume').setAttribute('src', event.target.result);
      document.getElementById('uploadSingleResume').style.display = 'block';
    });
  }
});
// upload resume




$(document).ready(function() {
  $('.ImageGallery_btn').click(function() {
      $('.image_gallery_create_wrapper').fadeIn(500);
  })

  $('.cancelImageGallery').click(function(){
    $('.image_gallery_create_wrapper').fadeOut(500);
  })
})
// ^^Image Gallery Modal^^
$(document).ready(function() {
  $('.VideoGallery_btn').click(function() {
      $('.video_gallery_create_wrapper').fadeIn(500);
  })

  $('.cancelVideoGallery').click(function(){
    $('.video_gallery_create_wrapper').fadeOut(500);
  })
})
// ^^Video Gallery Modal^^
$(document).ready(function() {
  $('.ResumeGallery_btn').click(function() {
      $('.resume_gallery_create_wrapper').fadeIn(500);
  })

  $('.cancelResumeGallery').click(function(){
    $('.resume_gallery_create_wrapper').fadeOut(500);
  })
})
// ^^Resume Gallery Modal^^

$(document).ready(function() {
  $('.deleteImageGallery_btn').click(function() {
      $('.image_deleteGallery_wrapper').fadeIn(500);
  })

  $('.cancelDeleteGallery_btn').click(function(){
    $('.image_deleteGallery_wrapper').fadeOut(500);
  })
})
// ^^Delete Image Gallery^^
$(document).ready(function() {
  $('.deleteVideoGallery_btn').click(function() {
      $('.video_deleteGallery_wrapper').fadeIn(500);
  })

  $('.cancelDeletePlaylist_btn').click(function(){
    $('.video_deleteGallery_wrapper').fadeOut(500);
  })
})
// ^^Delete Vidoe Gallery^^
$(document).ready(function() {
  $('.deleteResumeGallery_btn').click(function() {
      $('.resume_deleteGallery_wrapper').fadeIn(500);
  })

  $('.cancelDeleteFile_btn').click(function(){
    $('.resume_deleteGallery_wrapper').fadeOut(500);
  })
})
// ^^Delete resume Gallery^^

$(document).ready(function() {
  $('.editImageGallery_btn').click(function() {
      $('.image_editGallery_wrapper').fadeIn(500);
  })

  $('.cancelEditGallery_btn').click(function(){
    $('.image_editGallery_wrapper').fadeOut(500);
  })
})
// ^^Edit Image Gallery^^
$(document).ready(function() {
  $('.editVideoGallery_btn').click(function() {
      $('.video_editGallery_wrapper').fadeIn(500);
  })

  $('.cancelEdit_video_Gallery_btn').click(function(){
    $('.video_editGallery_wrapper').fadeOut(500);
  })
})
// ^^Edit Video Gallery^^
$(document).ready(function() {
  $('.editFileGallery_btn').click(function() {
      $('.resume_editGallery_wrapper').fadeIn(500);
  })

  $('.cancelEdit_file_Gallery_btn').click(function(){
    $('.resume_editGallery_wrapper').fadeOut(500);
  })
})
// ^^Edit Video Gallery^^

$(document).ready(function() {
  $('.singleUploadImage_btn').click(function() {
      $('.image_upload_modal_wrapper').fadeIn(500);
  })

  $('.close_singleImageUpload').click(function(){
    $('.image_upload_modal_wrapper').fadeOut(500);
  })
})
// ^^Single Image Upload^^
$(document).ready(function() {
  $('.singleUploadVideo_btn').click(function() {
      $('.video_upload_modal_wrapper').fadeIn(500);
  })

  $('.close_singleVideoUpload').click(function(){
    $('.video_upload_modal_wrapper').fadeOut(500);
  })
})
// ^^Single Video Upload^^
$(document).ready(function() {
  $('.singleUploadFile_btn').click(function() {
      $('.file_upload_modal_wrapper').fadeIn(500);
  })

  $('.close_singleFileUpload').click(function(){
    $('.file_upload_modal_wrapper').fadeOut(500);
  })
})
// ^^Single File Upload^^

$(document).ready(function() {
  $('.singleDeleteImage_btn').click(function() {
      $('.image_delete_wrapper').fadeIn(500);
  })

  $('.cancelDeleteImage_btn').click(function(){
    $('.image_delete_wrapper').fadeOut(500);
  })
})
// ^^Single Delete Image ^^
$(document).ready(function() {
  $('.singleDeleteVideo_btn').click(function() {
      $('.video_delete_wrapper').fadeIn(500);
  })

  $('.cancelDeleteVideo_btn').click(function(){
    $('.video_delete_wrapper').fadeOut(500);
  })
})
// ^^Single Delete Video ^^
$(document).ready(function() {
  $('.singleDeleteResume_btn').click(function() {
      $('.resume_delete_wrapper').fadeIn(500);
  })

  $('.cancelDeleteResume_btn').click(function(){
    $('.resume_delete_wrapper').fadeOut(500);
  })
})
// ^^Single Delete Video ^^

$(document).ready(function() {
  $('.singleEditImage_btn').click(function() {
      $('.image_edit_wrapper').fadeIn(500);
  })

  $('.cancelEditImage_btn').click(function(){
    $('.image_edit_wrapper').fadeOut(500);
  })
})
// ^^Single Image Upload^^
$(document).ready(function() {
  $('.singleEditVideo_btn').click(function() {
      $('.video_edit_wrapper').fadeIn(500);
  })

  $('.cancelEditVideo_btn').click(function(){
    $('.video_edit_wrapper').fadeOut(500);
  })
})
// ^^Single Video Upload^^
$(document).ready(function() {
  $('.singleEditResume_btn').click(function() {
      $('.resume_edit_wrapper').fadeIn(500);
  })

  $('.cancelEditResume_btn').click(function(){
    $('.resume_edit_wrapper').fadeOut(500);
  })
})
// ^^Single Video Upload^^









// Switching galeries image, video, resume. 
let imageGallery = document.getElementsByClassName('main_image_gallery_wrapper')[0];
let videoGallery = document.getElementsByClassName('main_video_gallery_wrapper')[0];
let resumeGallery = document.getElementsByClassName('main_Resume_gallery_wrapper')[0];
let photosBtn = document.getElementById('photosBtn');
let videosBtn = document.getElementById('videosBtn');
let resumeBtn = document.getElementById('resumeBtn');
let trashIcons = $(".trashIcon");
let videoURL = "";

photosBtn.addEventListener('click', openPhotos);
videosBtn.addEventListener('click', openVideo);
resumeBtn.addEventListener('click', openResume);

function openPhotos() {
  console.log("images are being displayed");
  imageGallery.style.display = "block";
  videoGallery.style.display = "none";
  resumeGallery.style.display = "none";
}
function openVideo() {
  console.log("videos are being displayed");
  videoGallery.style.display = "block";
  imageGallery.style.display = "none";
  resumeGallery.style.display = "none";
}
function openResume() {
  console.log("Resumes are being displayed");
  resumeGallery.style.display = "block";
  videoGallery.style.display = "none";
  imageGallery.style.display = "none";
}






/**
 * This function accepts an event object, and removes
 * the entire videoItems container.
 * @param {An event Object} event
 */
function deleteVideo(event) {
  console.log("DELETE VIDEO FUNCTION: " + $(event.target).parent());
  $(event.target).parent().delay(400).hide(400, function() {
    $(event.target).parent().remove();
  });
}

/**
 * This function accepts an event object, then traverses the dom
 * structure of the "video_items" div to get the URL
 * @param {An event object} event
 */
function getVideoURL(event) {
  return $(event.target).next().children(".video_thumbnail").children("video").attr("src");
}
// Switching galeries image, video, resume.





// Toggle between Night and Day.
var icon = document.getElementById("dark");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
}
$(document).ready(function() {
  $(".theme_icon").on('click', function(){
    $(".theme_icon").toggleClass("fa-sun");
    $(".theme_icon").toggleClass("fa-moon");

    let current_theme = $("html").attr("data-theme");

    if(current_theme == "dark") {
      $("html").attr("data-theme", "light");
    }
    else if(current_theme == "light") {
      $("html").attr("data-theme", "dark");
    }
  });
});
// Toggle between Night and Day.




//================= AJAX =====================//
// Delete videos, and galleries
// Loop over all the delete buttons to add an event listener
// for (let i = 0; i < trashIcons.length; i++) {

// // Add the click event listener to the delete buttons
//   $(trashIcons[i]).click((e) => {
//     videoURL = getVideoURL(e);

//     $(".delete_modal_background").fadeIn(300);

//     let videoAnchorTag = $(e.target).next();
//     let url = $(videoAnchorTag).prop("href");
//     let urlArry = url.match(/\d+/g);
//     urlArry.shift();
//     let videoID = parseInt(urlArry[0]);
//     // Get the name of the video
//     let nextTarget = $(e.target).next();
//     let videoName = $(nextTarget).children(".video_attribute").children("h3").text();
//     buildDeleteModal("open_image_collection_delete", videoURL, videoName);
//     let jsonData = {
//        "fileName" : videoName,
//       "mediaType" : "video",
//       "videoID" : videoID
//     };


//     $(".deleteBtn").click(() => {
//       $.ajaxSetup({
//         headers: {
//             'X-CSRF-TOKEN': '<?= csrf_token() ?>'
//         }
//       });
//       $.ajax({
//         method: "POST",
//         url: "/users/videos/delete/video/",
//          headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//          },
//         data: JSON.stringify(jsonData),
//         success: function (result) {
//             $('.delete_modal_background').fadeOut(300);
//             deleteVideo(e);
//             console.log("Success!");
//             console.log(result);
//             $('.delete_modal').detach();
//         },
//         error: function(e) {
//             console.log("Failed!!");
//             console.log(e);
//         }
//       });
//       console.log("The delete button was clicked!");

//     });
//     $('.cancle').click(function(){
//       console.log("I was cliiiiiiiiiicked!")
//       $('.delete_modal_background').fadeOut(600);
//         setTimeout(() => {
//             $('.delete_modal').detach();
//         }, 700);
//     });
//   });
// }
//buildDeleteModal("open_image_collection_delete", videoURL);
//buildDeleteModal("open_edit_image_collection", videoURL);