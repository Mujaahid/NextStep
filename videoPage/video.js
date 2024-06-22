$(document).ready(function() {
    let $video = $('#video')[0];
    let playButton = $('.playButton');
    let pauseButton = $('.pauseButton');
    let $progressBarWrapper = $('.videoBar');
    let $progressBar = $('.progressBar');
    let currentTime = $('.currentTime');
    let duration = $('.duration');
    let volumeTrack = $(".volumeTrack");
    let volumeProgress = $(".volumeProgress");
    let volumeDot = $(".volumeDot");
    let videoWrapper = $('.videoWrapper')[0];
    let videoControls = $('.videoControls')[0];
    let skip = $('.skip-button')
    let back = $('.back-button')


    function togglePlay() {
        const video = document.querySelector('#video');
        if (video.paused) {
          video.play();
          $(playButton).hide()
          $(pauseButton).show()
          $('.animatingPlayButton').addClass('animate')
          $('.animatingPauseButton').removeClass('animate')
        } else {
          video.pause();
          $(playButton).show()
          $(pauseButton).hide()
          $('.animatingPauseButton').addClass('animate')
          $('.animatingPlayButton').removeClass('animate')
        }
    }

    skip.click(function() {
        video.currentTime += 5;
        $('.animatingFoward').addClass('animate')
        setTimeout(function() {
            $('.animatingFoward').removeClass('animate')
        }, 300)
    });
    back.click(function() {
        video.currentTime -= 5
        $('.animatingBackward').addClass('animate')
        setTimeout(function() {
            $('.animatingBackward').removeClass('animate')
        }, 300)
    })
    // Skip foward and backward 

    // if (e.which === 39) {
    //     // Code to be executed when the right arrow key is clicked
    //     console.log("Right arrow key clicked!");
    //     // Add your desired actions or functions here
    // }


    // $(document).keydown(function(event) {
    //     if (event.which === 39) { // Right key's keycode is 39
    //       // Right key is clicked

    //       // Add your code here for handling the right key click event
    //     }
    //   });
      



      
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
          event.preventDefault();
          togglePlay();
        }
    });

    $(pauseButton).hide()
    playButton.click(function() {
        togglePlay();
    });
    // Play the video when the play button is clicked

    pauseButton.click(function() {
        togglePlay();
    });
    // Pause the video when the pause button is clicked

    $('#video').click(function() {
        if (video.paused) {
            togglePlay();
        } else {
            togglePlay();
        }
    });
    // When the video tag is clicked it should pause or play


    volumeTrack.on("click", function(event) {
        let volumeTrackWidth = volumeTrack.width();
        let clickX = event.pageX - volumeTrack.offset().left;
        let percent = clickX / volumeTrackWidth;
        setVolume(percent);
    });
    // Calculates the width of the volume width, positions, and x-coordinate Then, it calls the setVolume() function with the calculated percent value. 
      
    volumeDot.on("mousedown", function(event) {
        event.stopPropagation();
      
        let volumeTrackWidth = volumeTrack.width();
      
        $(document).on("mousemove", function(event) {
          let dotX = event.pageX - volumeTrack.offset().left;
          let percent = dotX / volumeTrackWidth;
          setVolume(percent);
        });
      
        $(document).on("mouseup", function() {
          $(document).off("mousemove");
          $(document).off("mouseup");
        });
        //    when the user releases the mouse button, the mousemove and mouseup event listeners are removed from the document
    });
    // When the user clicks and or drags the dot, it calculates the new position and sets the volume accordingly 
      
    function setVolume(percent) {
        percent = Math.max(0, Math.min(percent, 1));
        // This line of code ensures that the percent value is always between 0 and 1.

        if (percent === 0) {
          $('.muteIcon').show();
          $('.quiteIcon').hide();
          $('.fullVolIcon').hide();
        } else if (percent < 0.4) {
          $('.quiteIcon').show();
          $('.muteIcon').hide();
          $('.fullVolIcon').hide();
        } else {
          $('.fullVolIcon').show();
          $('.muteIcon').hide();
          $('.quiteIcon').hide();
        }
        // Depending on the volume, this switches out the icons.
      
        volumeProgress.css('width', `${percent * 100}%`);
        video.volume = percent;

        if (percent === 0) {
            // volumeProgress.css('min-width', volumeDot.width() + 'px');
            volumeProgress.css('min-width', '8px');
          } else {
            volumeProgress.css('min-width', '');
        }
        // This code checks to see if the volume is mute = 0, if so, give the volumeProgress a min width of 7px so it is always visible in the track
    }
    // Changes the volume

    $(video).on('timeupdate', function() {
        let currentTime = video.currentTime;
        let duration = video.duration;
        let progress = (currentTime / duration) * 100;
     
        $progressBar.css('width', progress + '%');
    });
    $progressBarWrapper.on('mousedown', function(event) {
        let progressBarWrapperWidth = $progressBarWrapper.width();
        let mouseX = event.pageX - $progressBarWrapper.offset().left;
        let percent = mouseX / progressBarWrapperWidth;
        let newTime = percent * video.duration;
        
        $progressBar.css('width', `${percent * 100}%`);
        video.currentTime = newTime;
        
        $(document).on('mousemove', function(event) {
            let mouseX = event.pageX - $progressBarWrapper.offset().left;
            let percent = mouseX / progressBarWrapperWidth;
            let newTime = percent * video.duration;
            
            if (percent >= 0 && percent <= 1) {
                $progressBar.css('width', `${percent * 100}%`);
                video.currentTime = newTime;
            }
        });
        
        $(document).on('mouseup', function() {
            $(document).off('mousemove');
            $(document).off('mouseup');
        });
    });
    // The video progress bar, Everything related is here. 

    let $timeTrackerWrapper = $('.timeTrackerWrapper');
    let $timeTracker = $('.timeTracker');
    let videoWrapperWidth = $('.videoWrapper').width();
    $progressBarWrapper.on('mousemove', function(event) {
    const progressBarWidth = $progressBarWrapper.width();
    const mouseX = event.pageX - $progressBarWrapper.offset().left;
    const percent = mouseX / progressBarWidth;
    const newTime = percent * $video.duration;
    
    const timeTrackerWidth = $timeTrackerWrapper.outerWidth();
    let leftPosition = mouseX - timeTrackerWidth / 2.8;


    if (leftPosition < 0) {
        leftPosition = 0;
    } else if (leftPosition + timeTrackerWidth > videoWrapperWidth) {
        leftPosition = videoWrapperWidth - timeTrackerWidth;
    }
    //   This condition makes sure the timeTracker stays within the bonds of the video. 
    
      $timeTrackerWrapper.css({left: leftPosition});
      $timeTracker.text(formatTime(newTime));
    });
    $(window).resize(function() {
      videoWrapperWidth = $('.videoWrapper').width();
    });
    // This is the time tracker, it tracks the time and moves with the user


    $video.addEventListener('loadedmetadata', function() {
        duration.text(formatTime(video.duration));
    });
    // Update the duration span when the video is loaded
    
    $video.addEventListener('timeupdate', function() {
        currentTime.text(formatTime(video.currentTime));
    });
    // Update the current time and seek bar as the video plays

    function formatTime(timeInSeconds) {
        let hours = Math.floor(timeInSeconds / 3600);
        let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
        let seconds = Math.floor(timeInSeconds - (hours * 3600) - (minutes * 60));
        
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        if (hours > 0) {
          return `${hours}:${minutes}:${seconds}`;
        } else {
          return `${minutes}:${seconds}`;
        }
    }
    // This code first calculates the number of hours, minutes, and seconds based on the timeInSeconds parameter. If the video is an hour or more, it adds the hours to the time code.

    let speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75];
    // Define an array of playback speeds
    let speedControls = $('.speed-control');
    // Get the speed controls
    speedControls.each(function(index) {
        $(this).on('click', function() {
            // Set the playback rate of the video to the selected speed
            video.playbackRate = speeds[index];

            // Update the active class on the speed controls
            speedControls.removeClass('active');
            $(this).addClass('active');
        });
    });
    // Loop through the speed controls and attach a click event to each one
    $('.speed-control').click(function() {
        $('.speed-control').removeClass('active');
        $(this).addClass('active')
    })
  
    $(document).on("mouseup", function(event) {
      $(document).off("mousemove");
    });


    $('.settingsButton').on('click', function(e) {
        $('.settingModal').show()
        e.stopPropagation()
        $('.openQualityHeader').on('click', function(e) {
            $('.qualityWrapper').slideDown(400)
            $('.openQualityHeader').hide()
            $('.closeQualityHeader').show()
            e.stopPropagation();
        })
        $('.closeQualityHeader').on('click', function(e) {
            $('.qualityWrapper').slideUp(400)
            $('.openQualityHeader').show()
            $('.closeQualityHeader').hide()
            e.stopPropagation();
        })
        $('.openSpeedWrapperHeading').on('click', function(e) {
            $('.speedWrapper').slideDown(400)
            $('.openSpeedWrapperHeading').hide();
            $('.closeSpeedWrapperHeading').show();
            e.stopPropagation();
        })
        $('.closeSpeedWrapperHeading').on('click', function(e) {
            $('.speedWrapper').slideUp(400)
            $('.openSpeedWrapperHeading').show();
            $('.closeSpeedWrapperHeading').hide();
            e.stopPropagation();
        })
    })
    $(document).on('click', function() {
        $('.settingModal').hide()
    })
    // Settings functions
    $('.expandButton').on("click", function() {
    if (!document.fullscreenElement) {
        videoWrapper.requestFullscreen();
        $('.videoWrapper').css({
            'border-radius': '0px',
            border : '0px',
        })

        $video.style.maxHeight = "100%";
        $('.videoControls').addClass('videoControlsHover')
        $('.videoIcon').addClass('onExpand')
        $('.volumeIcon').addClass('volumeOnExpand')
        $('.videoBar').addClass('videoBarOnExpand')
    } else {
        document.exitFullscreen();
        setTimeout(function() {
            $('.videoWrapper').css({
                'border-radius': '20px',
                border : '2px solid var(--primary-color)'
            })
            $video.style.maxHeight = "400px";
            $('.videoControls').removeClass('videoControlsHover')
            $('.videoIcon').removeClass('onExpand')
            $('.volumeIcon').removeClass('volumeOnExpand')
            $('.videoBar').removeClass('videoBarOnExpand')
        }, 100); // 100ms delay before executing the code
    }
    });
    // Expand function
    function handleHover() {
        let timeoutId;

        videoWrapper.addEventListener('mousemove', function() {
            videoControls.style.transform = 'translate(0px, 2px)';
            clearTimeout(timeoutId); 
            timeoutId = setTimeout(function() {
                if (videoWrapper.matches(':hover')) {
                    videoControls.style.transform = 'translate(0px, 60px)';
                }
            }, 5000);
        });
        videoWrapper.addEventListener('mouseleave', function() {
            videoControls.style.transform = 'translate(0px, 60px)';
            $('.settingModal').hide()
            clearTimeout(timeoutId);
        });
    }
    handleHover()
    // This function is triggered when the user moves over the video player the controls slide up.
})