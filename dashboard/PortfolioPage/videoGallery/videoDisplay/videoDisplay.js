// toggle dark theme
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
})

// Dropdrown menu
$(document).ready(function(){
    $('.nav_profile_drop').click(function(){
        $('.profile_dropdown').slideDown(500);
    });
    $('.dashboard').click(function(){
        $('.profile_dropdown').slideUp(700);
    });
})

const videoPlayer = document.querySelector('.video_player'),
video = videoPlayer.querySelector('.video'),
playButton = videoPlayer.querySelector('.play_pause'),
totalDuration = videoPlayer.querySelector('.duration'),
current = videoPlayer.querySelector('.current'),
progressAreaTime = videoPlayer.querySelector('.progressAreaTime'),
progressArea = videoPlayer.querySelector('.outer_bar'),
progress_bar = videoPlayer.querySelector('.progress_bar_one'),
volume = videoPlayer.querySelector('.volume'),
volume_range = videoPlayer.querySelector('.volume_range'),
fullscreen = videoPlayer.querySelector('.fullscreen'),
playback = videoPlayer.querySelector('.playback'),
settingsBtn = videoPlayer.querySelector('.settings')
// Video Play Functions 


// Playbutton
playButton.addEventListener('click', (e) => {
  if(video.paused){
    video.play()
    $('.pauseBtn').css({
      display: "block"
    })
    $('.playBtn').css({
      display: "none"
    })
  } else {
    video.pause()
    $('.playBtn').css({
      display: "block"
    })
    $('.pauseBtn').css({
      display: "none"
    })
  }
})

// timer update
video.addEventListener("loadeddata", (e) => {
  let videoDuration = e.target.duration;
  let totalMin = Math.floor(videoDuration / 60);
  let totalSec = Math.floor(videoDuration % 60);

  totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
  totalDuration.innerHTML = `${totalMin} : ${totalSec}`;
})
video.addEventListener('timeupdate', (e) => {
  let currentVideoTime = e.target.currentTime;
  let currentMin = Math.floor(currentVideoTime / 60);
  let currentSec = Math.floor(currentVideoTime % 60);
// if seconds are less than 10 then add 0 at the begning 
  currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
  current.innerHTML = `${currentMin} : ${currentSec}`;

// progressBar width change
  let videoDuration = e.target.duration
  let progressWidth = (currentVideoTime / videoDuration) * 100;
  progress_bar.style.width = `${progressWidth}%`;
})

// bar progress
progressArea.addEventListener('click', (e)=> {
  let videoDuration = video.duration;
  let progressWidthval = progressArea.clientWidth;
  let ClickOffsetX = e.offsetX;
  video.currentTime = (ClickOffsetX / progressWidthval) * videoDuration;
})
// Change volume
function changeVolume() {
  video.volume = volume_range.value / 100;
  if(volume_range.value == 0) {
  } else if (volume_range.value < 40) {
  } 
}
function muteVolume() {
  if (volume_range.value == 0) {
      volume_range.value = 80;
      video.volume = 0.8;
      // $('.volume').css({
      //   display: "block"
      // })
      // $('.volumeNone').css({
      //   display: "none"
      // })
  } else {
    volume_range.value = 0;
    video.volume = 0;
    // $('.volumeNone').css({
    //   display: "block"
    // })
    // $('.volume').css({
    //   display: "none"
    // })
  }
}
volume_range.addEventListener('change', () => {
  changeVolume();
})
volume.addEventListener('click', ()=> {
  muteVolume();
})

// update progress area time and display block
progressArea.addEventListener('mousemove',(e)=> {
    let progressWidthval = progressArea.clientWidth; 
    let x = e.offsetX;
    progressAreaTime.style.setProperty('--x', `${x}px`);
    progressAreaTime.style.display = "block";
    let videoDuration = video.duration;
    let progressTime = Math.floor((x/progressWidthval)*videoDuration);
    let currentMin = Math.floor(progressTime / 60);
    let currentSec = Math.floor(progressTime % 60);
    // if senconds are less than 10 then add 0
    currentSec < 10 ? currentSec = "0"+currentSec : currentSec;
    progressAreaTime.innerHTML = `${currentMin} : ${currentSec}`;
})
progressArea.addEventListener('mouseleave', () => {
    progressAreaTime.style.display = 'none';
})

// Full screen function
fullscreen.addEventListener('click', ()=> {
  if (!videoPlayer.classList.contains('openFullScreen')) {
    videoPlayer.classList.add('openFullScreen');
    videoPlayer.requestFullscreen();
    $('.video_player').css({ 
      'border-radius': '0px',
      border: '0px'
  })
  // $('.controls').css({
  //   '-webkit-transform':'translateY(60px)'
  // });
  ;

  } else {
    videoPlayer.classList.remove('openFullScreen');
    document.exitFullscreen();
    $('.video_player').css({ 
      'border-radius': '20px',
      border: '3px solid var(--primary-color)'
  })
    // $('.controls').css({
    //   '-webkit-transform':'translateY(0px)'
    // });
  }
})

// open settings 
// settingsBtn.addEventListener('click', ()=> {
//   settings.classList.toggle(active);
//   settingsBtn.classList.toggle(active);
// })

// Video speed
// playback.forEach((event)=> {
//   event.addEventListener('click', ()=>{
//     removeActiveClasses();
//     event.classList.add('active');
//     let speed = event.getAttribute('data-speed');
//     mainVideo.playbackRate = speed;
//   })
// })

// function removeActiveClasses() {
//   playback.forEach(event => {
//     event.classList.remove('active')
//   })
// }

// Hover over controls timer
var i = null;
$(".video_player").mousemove(function() {
    clearTimeout(i);
    $(".controls").css({
      'transform':'translateY(0px)',
    });
    i = setTimeout(function () {
        $(".controls").css({
          'transform':'translateY(60px)',
        });
    }, 2000);
}).mouseleave(function() {
    clearTimeout(i);
    $(".controls").css({
      'transform':'translateY(60px)',
    });
});

// Show Playlist 
$('.hideplaylist').click(function(){
	$('.playlistBody').slideUp(500);
	$('.showplaylist').show();
	$('.hideplaylist').hide();
});
$('.showplaylist').click(function(){
	$('.playlistBody').slideDown(500);
	$('.hideplaylist').show();
	$(this).hide();
});






// Show comments
$('.showComments').click(function(){
	$('.commentMain').show(500);
	$('.hideComments').show();
	$('.showComments').hide();
});
$('.hideComments').click(function(){
	$('.commentMain').hide(500);
	$('.showComments').show();
	$(this).hide();
});