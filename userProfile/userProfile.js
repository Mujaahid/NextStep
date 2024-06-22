const swup = new Swup()

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