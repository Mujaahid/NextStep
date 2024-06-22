// Switching galeries image, video, resume. 
let imageGallery = document.getElementsByClassName('main_image_gallery_wrapper')[0];
let videoGallery = document.getElementsByClassName('main_video_gallery_wrapper')[0];
let resumeGallery = document.getElementsByClassName('main_Resume_gallery_wrapper')[0];
let photosBtn = document.getElementById('photosBtn');
let videosBtn = document.getElementById('videosBtn');
let resumeBtn = document.getElementById('resumeBtn');
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







// Build Modal
// let delete_modal_btn = $(".open_image_collection_delete")
// let delete_modal_background = $(".delete_modal_background");

// function buildDeleteModal(typeOfModal) {

//   if (typeOfModal == ".open_image_collection_delete") {
//     $(delete_modal_btn).click(() => {
//       $(delete_modal_background).append(`
//       <div class="delete_modal">
//       <div class="delete_image_preview">
//           <img src="/images/fileImages/fileImage13.jpg" alt="">
//       </div>
//       <div class="delete_modal_body">
//           <div class="delete_title">
//               <h3>Warning</h3>
//           </div>
//           <div class="delete_paragraph">
//               <p>Are you sure you want to delete <span>Title - Type</span></p>
//           </div>
//       </div>
//       <div class="delete_modal_footer">
//           <button class="cancle">Cancle</button>
//           <button>Delete</button>
//       </div>
//       </div>
//       `);
//     });
//   }
// }






let delete_container = $(".delete_modal_background");
let edit_container = $(".edit_modal_background")


let edit_modal = $(".edit_modal")


let delete_btn = $(".open_image_collection_delete");
let edit_btn = $(".open_edit_image_collection");


function buildDeleteModal(typeOfModal) {
  
  if (typeOfModal == "open_image_collection_delete") {
    $(delete_btn).click(() => {
      $(delete_container).append(`
            <div class="delete_modal">
      <div class="delete_image_preview">
          <img src="/images/fileImages/fileImage13.jpg" alt="">
      </div>
      <div class="delete_modal_body">
          <div class="delete_title">
              <h3>Warning</h3>
          </div>
          <div class="delete_paragraph">
              <p>Are you sure you want to delete <span>Title - Type</span></p>
          </div>
      </div>
      <div class="delete_modal_footer">
          <button class="cancle">Cancle</button>
          <button>Delete</button>
      </div>
      </div>
      `);
      $(".delete_modal_background").fadeIn(1000);
    })
  } else if (typeOfModal == "open_edit_image_collection") {
    $(edit_btn).click(() => {
      $(edit_container).append(`
      <div class="edit_modal">
      <div class="edit_header">
          <h3>Edit</h3>
      </div>
      <div class="edit_body">
          <div class="edit_gallery_image_preview">
              <div class="image_preview_main ImagePreview">
                  <img src="/images/fileImages/fileImage12.jpg" alt="">
              </div>
              <div class="image_preview_sigma ImagePreview">
                  <img src="/images/fileImages/fileImage13.jpg" alt="">
              </div>
              <div class="image_preview_beta ImagePreview">
                  <img src="/images/fileImages/fileImage14.jpg" alt="">
              </div>
          </div>

      </div>
      <div class="edit_footer">
          <input type="text" placeholder="Title Of Project">
      </div>
      <div class="delete_modal_footer">
      <button class="cancle">Cancle</button>
      <button>Delete</button>
  </div>
  </div>
      `);
      $(".edit_modal_background").fadeIn(600);
      $(".edit_modal").slideDown(600);
    }) 
  }
}


buildDeleteModal("open_image_collection_delete");
buildDeleteModal("open_edit_image_collection");


























// Collection Dropdown animation and function
$(document).ready(function(){
  $('.gallery_item_images').click(function(){
    $('.collection_gallery_wrapper').slideDown(1000);
  });
  $('.collection_gallery_wrapper').click(function(){
    $('.collection_gallery_wrapper').slideUp(1000);
  });
});

$(".open_image_collection_delete").click(function () {
  $(".delete_modal_background").fadeIn(1000);
  $(".delete_modal_background").css("display", "block");


  $('.cancle').click(function(){
    $('.delete_modal_background').fadeOut(1000);
  });
});
// Collection Dropdown animation and function

