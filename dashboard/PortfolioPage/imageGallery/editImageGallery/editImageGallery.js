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
  $('.singleDeleteImage_btn').click(function() {
      $('.image_delete_wrapper').fadeIn(500);
  })

  $('.cancelDeleteImage_btn').click(function(){
    $('.image_delete_wrapper').fadeOut(500);
  })
})
// ^^Single Delete Image ^^

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

$(document).ready(function() {
  $('.singleUploadImage_btn').click(function() {
      $('.image_upload_modal_wrapper').fadeIn(500);
  })

  $('.close_singleImageUpload').click(function(){
    $('.image_upload_modal_wrapper').fadeOut(500);
  })
})
// ^^Single Image Upload^^