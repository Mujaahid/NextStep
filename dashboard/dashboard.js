const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');

let tags = [];

function createTag(label) {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');

  const span = document.createElement('span');

  span.innerHTML = label;

  
  const closeIcon = document.createElement('i');
  closeIcon.innerHTML = ' &#10005;';
  closeIcon.setAttribute('class', 'material-icons');
  closeIcon.setAttribute('data-item', label);
  div.appendChild(span);
  div.appendChild(closeIcon);
  return div;
}

function clearTags() {
  document.querySelectorAll('.tag').forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() {
  clearTags();
  tags.slice().reverse().forEach(tag => {
    tagContainer.prepend(createTag(tag));
  });
}

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      e.target.value.split(',').forEach(tag => {
        tags.push(tag);  
      });
      
      addTags();
      input.value = '';
    }
});
document.addEventListener('click', (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'I') {
    const tagLabel = e.target.getAttribute('data-item');
    const index = tags.indexOf(tagLabel);
    tags = [...tags.slice(0, index), ...tags.slice(index+1)];
    addTags();    
  }
})

input.focus();



// get modal
var notificationModal = document.getElementById('notificationWrapper');
// the modal btn 
var notificationBtn = document.getElementById('notificationOpenBtn');
// the close btn
var notificationClose = document.getElementsByClassName('closeNotificationBtn')[0];

notificationBtn.addEventListener('click', openModal); //open
notificationClose.addEventListener('click', closeModal);//close
window.addEventListener('click', outsideClick);//outside click

//function
function openModal(){
    notificationModal.style.display = 'block';
}
function closeModal(){
    notificationModal.style.display = 'none';
}
function outsideClick(e){
  if(e.target == notificationModal){ 
    notificationModal.style.display = 'none';
  }
}