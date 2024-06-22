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
    $('.singleUploadFile_btn').click(function() {
        $('.file_upload_modal_wrapper').fadeIn(500);
    })
  
    $('.close_singleFileUpload').click(function(){
      $('.file_upload_modal_wrapper').fadeOut(500);
    })
})
  // ^^Single File Upload^^

  $(document).ready(function() {
    $('.deleteResumeGallery_btn').click(function() {
        $('.resume_deleteGallery_wrapper').fadeIn(500);
    })
  
    $('.cancelDeleteFile_btn').click(function(){
      $('.resume_deleteGallery_wrapper').fadeOut(500);
    })
  })
  // ^^Delete resume Gallery^^


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
  