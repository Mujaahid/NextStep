
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }  
  inputChange = event => {
    if (event.target.key === 'Enter') {
      event.preventDefault();
    }
  }

// BTN 
let btn1 = document.getElementById('pageFirstBtn');
let btn2 = document.getElementById('pageSecondBtn');
let btn3 = document.getElementById('pageThreeBtn');
let btn4 = document.getElementById('pageFourBtn');
let btn5 = document.getElementById('pageFiveBtn');
//getting prev btns 
let prevBtn2 = document.getElementById('prevBtnOne');
let prevBtn3 = document.getElementById('prevBtnTwo');
let prevBtn4 = document.getElementById('prevBtnThree');
let prevBtn5 = document.getElementById('prevBtnFour');
//next btn
pageFirstBtn.addEventListener('click', firstPage)
pageTwoBtn.addEventListener('click', secondPage)
pageThreeBtn.addEventListener('click', threePage)
pageFourBtn.addEventListener('click', fourPage)
//prev btn
prevBtnTwo.addEventListener('click', backToPageOne)
prevBtnThree.addEventListener('click', backToPageTwo)
prevBtnFour.addEventListener('click', backToPageThree)
prevBtnFive.addEventListener('click', backToPageFour)
//next btn function
function firstPage() {
    one.style.display = 'none';
    two.style.display = 'block';
};
function secondPage() {
    two.style.display = 'none';
    three.style.display = 'block';
};
function threePage() {
  three.style.display = 'none';
  four.style.display = 'block';
};
function fourPage() {
  four.style.display = 'none';
  five.style.display = 'block';
};
//prevBtn function
function backToPageOne() {
    one.style.display = 'block';
    two.style.display = 'none';
};
function backToPageTwo() {
    two.style.display = 'block';
    three.style.display = 'none';
};
function backToPageThree() {
  three.style.display = 'block';
  four.style.display = 'none';
};
function backToPageFour() {
  four.style.display = 'block';
  five.style.display = 'none';
};



// get modal
var modal = document.getElementById('simpleModal');
// the modal btn 
var modalBtn = document.getElementById('modalBtn');
// the close btn
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal); //open
closeBtn.addEventListener('click', closeModal);//close
window.addEventListener('click', outsideClick);//outside click

//function
function openModal(){
  modal.style.display = 'block';
}
function closeModal(){
  modal.style.display = 'none';
}
function outsideClick(e){
  if(e.target == modal){ 
    modal.style.display = 'none';
  }
}
