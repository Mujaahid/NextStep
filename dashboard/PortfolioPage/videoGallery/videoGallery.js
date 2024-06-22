$(document).ready(function() {
    $('.deleteVideoGallery_btn').click(function() {
        $('.video_deleteGallery_wrapper').fadeIn(500);
    })
  
    $('.cancelDeletePlaylist_btn').click(function(){
      $('.video_deleteGallery_wrapper').fadeOut(500);
    })
  })
  // Delete Gallery Videos
  $(document).ready(function() {
    $('.singleUploadVideo_btn').click(function() {
        $('.video_upload_modal_wrapper').fadeIn(500);
    })
  
    $('.close_singleVideoUpload').click(function(){
      $('.video_upload_modal_wrapper').fadeOut(500);
    })
  })
//   Single Upload Video
  $(document).ready(function() {
    $('.singleDeleteVideo_btn').click(function() {
        $('.video_delete_wrapper').fadeIn(500);
    })
  
    $('.cancelDeleteVideo_btn').click(function(){
      $('.video_delete_wrapper').fadeOut(500);
    })
  })
//   Single Delete Video

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