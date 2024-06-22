let btn1 = document.getElementById('pageFirstBtn');
let btn2 = document.getElementById('pageSecondBtn');
let btn3 = document.getElementById('pageThirdBtn');
// let btn4 = document.getElementById('pageFourthBtn');
// getting prev btn
let prevBtn1 = document.getElementById('prevBtnTwo');
let prevBtn2 = document.getElementById('prevBtnThree');
// let prevBtn3 = document.getElementById('prevBtnFour');

pageFirstBtn.addEventListener('click', openPageTwo);
pageSecondBtn.addEventListener('click', openPageThree);
// pageThirdBtn.addEventListener('click', openPageFour);
// adding event to prev btn
prevBtnTwo.addEventListener('click', backToPageOne);
prevBtnThree.addEventListener('click', backToPageTwo);
// prevBtnFour.addEventListener('click', backToPageThree);

function openPageTwo() {
    businessOne.style.display = "none";
    businessTwo.style.display = "block";
}
function openPageThree() {
    businessTwo.style.display = "none";
    businessThree.style.display = "block";
}
function openPageFour() {
    businessThree.style.display = "none";
    businessFour.style.display = "block";
}
// prev function
function backToPageOne() {
    businessOne.style.display = "block";
    businessTwo.style.display = "none";
}
function backToPageTwo() {
    businessTwo.style.display = "block";
    businessThree.style.display = "none";
}
// function backToPageThree() {
//     businessThree.style.display = "block";
//     businessFour.style.display = "none";
// }




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

