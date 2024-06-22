



const videoPlayer = document.querySelector('.video_player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play_pause')
const totalDuration = videoPlayer.querySelector('.duration')
const current = videoPlayer.querySelector('.current')
const progressAreaTime = videoPlayer.querySelector('.progressAreaTime')
const progressArea = videoPlayer.querySelector('.outer_bar')
const progress_bar = videoPlayer.querySelector('.progress_bar_one')
const volume = videoPlayer.querySelector('.volume')
const volume_range = videoPlayer.querySelector('.volume_range')
const fullscreen = videoPlayer.querySelector('.fullscreen')
// Video Play Functions 




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
// timer update


// bar progress
progressArea.addEventListener('click', (e)=> {
  let videoDuration = video.duration;
  let progressWidthval = progressArea.clientWidth;
  let ClickOffsetX = e.offsetX;
  video.currentTime = (ClickOffsetX / progressWidthval) * videoDuration;
})
// bar progress

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
      $('.volume').css({
        display: "block"
      })
      $('.volumeNone').css({
        display: "none"
      })
  } else {
    volume_range.value = 0;
    video.volume = 0;
    $('.volumeNone').css({
      display: "block"
    })
    $('.volume').css({
      display: "none"
    })
  }
}
volume_range.addEventListener('change', () => {
  changeVolume();
})
volume.addEventListener('click', ()=> {
  muteVolume();
})
// Change volume

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

// Hover over controls
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