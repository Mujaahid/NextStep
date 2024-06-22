// get login modal
var loginModal = document.getElementById('simpleModal');
// the modal btn 
var loginModalBtn = document.getElementById('modalBtn');
// the close btn
var closeLoginBtn = document.getElementsByClassName('closeBtn')[0];

loginModalBtn.addEventListener('click', openLoginModal); //open
closeLoginBtn.addEventListener('click', closeLoginModal);//close
window.addEventListener('click', outsideLoginClick);//outside click

//function
function openLoginModal(){
  loginModal.style.display = 'block';
}
function closeLoginModal(){
  loginModal.style.display = 'none';
}
function outsideLoginClick(e){
  if(e.target == loginModal){ 
    loginModal.style.display = 'none';
  }
}





// get signup modal
var signUpModal = document.getElementById('accountModal');
// the modal btn 
var modalSignUpBtn = document.getElementById('modalSignUpBtn');

modalSignUpBtn.addEventListener('click', openSignModal); //open
window.addEventListener('click', outsideClick);//outside click

//function
function openSignModal(){
  signUpModal.style.display = 'block';
}
function outsideClick(e){
  if(e.target == signUpModal){ 
    signUpModal.style.display = 'none';
  }
}

