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
// ^^Delete Vidoe Gallery^^

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
// ^^Single Image Upload^^
$(document).ready(function() {
  $('.singleDeleteVideo_btn').click(function() {
      $('.video_delete_wrapper').fadeIn(500);
  })

  $('.cancelDeleteVideo_btn').click(function(){
    $('.video_delete_wrapper').fadeOut(500);
  })
})
// ^^Single Video Upload^^
$(document).ready(function() {
  $('.singleDeleteResume_btn').click(function() {
      $('.resume_delete_wrapper').fadeIn(500);
  })

  $('.cancelDeleteResume_btn').click(function(){
    $('.resume_delete_wrapper').fadeOut(500);
  })
})
// ^^Single Video Upload^^

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




// Upload Single Function
function previewImage() {
  return {
      imageUrl: "",

      fileChosen(event) {
          this.fileToDataUrl(event, (src) => (this.imageUrl = src));
      },

      fileToDataUrl(event, callback) {
          if (!event.target.files.length) return;

          let file = event.target.files[0],
              reader = new FileReader();

          reader.readAsDataURL(file);
          reader.onload = (e) => callback(e.target.result);
      },
  };
}