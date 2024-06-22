$(".nav_profile_drop").click(function(e){
    $(".profile_dropdown").slideDown(600);
    e.stopPropagation();
});
$(".profile_dropdown").click(function(e){
    e.stopPropagation();
});
$(document).click(function(){
    $(".profile_dropdown").slideUp(600);
});
// Nav dropdown


const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
}) 
// toggle dark theme

let userImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrER8VJQH_ClH3Un3hV2Kf-UfYcFJBK7fsw&usqp=CAU";
let userName = "Zhao Lu Si";
// Stores the main users info



$(document).ready(function() {
    $('.arrowUp').on('click', function() {
        $('.comment-content').hide(300)
        $('.arrowDown').show();
        $('.arrowUp').hide();
    })
    $('.arrowDown').on('click', function() {
        $('.arrowUp').show();
        $('.arrowDown').hide();
        $('.comment-content').show(300)
    })
});

// Close comments


function displayComments(commentArr) {
    let count = 0;

    while (count < commentArr.length) {
        commentArr[count].displayComment();
        count++;
    }
}

class Comment {
    constructor(commenter, likes, comment, date, profile) {
        this.commenter = commenter;
        this.likes = likes;
        this.comment = comment;
        this.date = date;
        this.profile = profile;
        this.replies = [];
    }

    addReply(reply) {
        this.getReplies.push(reply)
    }

    displayComment() {
        let appendStr = `<div class="commentWrapper">`;
            appendStr += `
                <div class="comment">
                    <div class="commentContent">
                        <div class="comment-profile">
                            <img src="${this.profile}" alt="">
                        </div>
                        <div class="comment-content">
                            <h3>${this.commenter}</h3>
                            <p>${this.comment}</p>
                            <div class="comment-content-footer">
                                <div class="comment-rating">
                                    <div class="like">
                                        <i class="far fa-thumbs-up"></i>
                                        <p>${this.likes}</p>
                                    </div>
                                    <button class="replyBtn">Reply</button>
                                </div>
                                <p class="commentDate">8 Months ago</p>
                            </div>
                        </div>
                    </div>
                    <div class="replyInput-section">
                    </div>
                </div>

                <div class="commentReply-wrapper">
                           
                        </div>

            `;

            for (let i = 0; i < this.replies.length; i++) {
                appendStr += `
                 <div class="replyComment">
                    <div class="comment-profile">
                        <img src="${this.replies[i].img}" alt="">
                    </div>
                    <div class="comment-content">
                        <h3>${this.replies[i].name}</h3>
                        <p>${this.replies[i].msg}</p>
                        <div class="comment-content-footer">
                            <div class="comment-rating">
                                <div class="like">
                                    <i class="far fa-thumbs-up"></i>
                                    <p></p>
                                </div>
                                <div class="dislike">
                                    <i class="far fa-thumbs-down"></i>
                                    <p>5k</p>
                                </div>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
                `
            }

            appendStr += `</div>`;
        $('.comment-body').append(appendStr);
    }

    get getCommenter() {
        return this.commenter;
    }
    get getLikes() {
        return this.likes;
    }
    get getProfile() {
        return this.profile;
    }
    get getComment() {
        return this.comment;
    }
    get getDate() {
        return this.date;
    }

    set setComment(comment) {
        this.comment = comment;
    }
    set setLike(likes) {
        this.likes = likes;
    }
    set setCommenter(commenter) {
        this.commenter = commenter;
    }
    set setDate(date) {
        this.date = date;
    }
    set setProfile(profile) {
        this.profile = profile;
    }
}

let userProfile = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJy9Ogr1snbeTlbYR1apA1Q9MLanyfdh-nfF%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=f65cd2ebf21f5a160471c3d99da65ab266fbfe9a33b39271cc9e0e0cd442924a&ipo=images';
let message1 = 'Im a crack head, boi';
let message2 = 'Im also crack head, boi';
let comment1 = new Comment("Tom S", 23, message1, '23/2/1', userProfile);
let comment2 = new Comment("chris P", 132, message2, '23/2/1', userProfile);

let reply1 = {
    img: "https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2019/01/Im-Jin-ah-Nana.jpg",
    name: "americanIdol",
    msg: "I saw this first, loved it first, so get lost!"
};

let arr = [comment1, comment2];
displayComments(arr);

let comments = $(".comment");

$('.userComment').keyup(function(event) {
    let comment = $('.userComment').val();
    if(event.which === 13 && comment !== '') {
        $('.comment-body').append(`
                <div class="commentWrapper">
                    <div class="comment">
                        <div class="commentContent">
                            <div class="comment-profile">
                                <img src="${userImage}" alt="">
                            </div>
                            <div class="comment-content">
                                <h3>${userName}</h3>
                                <p>${comment}</p>
                                <div class="comment-content-footer">
                                    <div class="comment-rating">
                                        <div class="like">
                                            <i class="far fa-thumbs-up"></i>
                                            <p>15k</p>
                                        </div>
                                        <button class="replyBtn">Reply</button>
                                    </div>
                                    <p class="commentDate">8 Months ago</p>
                                </div>
                            </div>
                        </div>
                        <div class="replyInput-section">
                        </div>
                    </div>
                    <div class="commentReply-wrapper">
                       
                    </div>
                </div>
        `)
        $('.userComment').val('');
        comments = $(".comment");
        console.log(comments);
        replyToStuff(comments);
        replyToStuff($(".replyComment"));
    }
})


function replyToStuff(comments) {
    for (let i = 0; i < comments.length; i++) {

        let btn = $(comments[i]).find('.replyBtn');
        $(btn).unbind('click');
    
        $(btn).on('click', function(e) {
            clicked = true;
            let comment = comments[i];

            console.log("this is the comment!" + $(comment).children().length)
    

    
            if (!($(comment).children().length > 2)) {
                $(comment).append(`
                    <input class="replyInput" type="text" placeholder="Write a reply...">
                `)
            }

            let inputVal = $('.replyInput').val();
            let inputField = $(comment).find('.replyInput')
    
    
            console.log(inputField)
             
            $(inputField).on('keypress', function(event) {
                if (event.which == 13) {
                    inputVal = $('.replyInput').val();
    
    
                    let reply = {
                        img: userImage,
                        name: userName,
                        msg: inputVal
                    };
    
                    postReply(reply, i);
                    $(inputField).remove();
                }
            })
        })
    }
}
replyToStuff(comments);


function postReply(reply, i) {
    let replyWrapper = $('.commentReply-wrapper');
    $(replyWrapper[i]).append(`
    <div class="replyComment">
        <div class="comment-profile">
            <img src="${reply.img}" alt="">
        </div>
        <div class="comment-content">
            <h3>${reply.name}</h3>
            <p>${reply.msg}</p>
            <div class="comment-content-footer">
            <div class="comment-rating">
                <div class="like">
                    <i class="far fa-thumbs-up"></i>
                    <p>24</p>
                </div>
                <button class="replyBtn">Reply</button>
            </div>
            <p class="commentDate">8 Months ago</p>
        </div>
        </div>
    </div>
    `);
}
// Create Comment



$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});
$('.follow-btn').click(function() {
    $('.follow-btn').toggleClass('Followed');
    $('.follow-btn').toggleText('Follow', 'Followed')
});
// Follow Btn



let popupUsername = $('.navUsername').text();
$('.usernameInPopup').text(popupUsername)
// Get user name for the popup notification


$(document).ready(function() {
    let likeCount = 0;
    let dislikeCount = 0;
  
    $('.likeButton').on('click', function() {
      if ($(this).hasClass('liked')) {
        likeCount--;
        $(this).removeClass('liked');
        $('.likedIcon').show()
        $('.likedFillIcon').hide();
      } else {
        likeCount++;
        $(this).addClass('liked');
        $('.likedIcon').hide()
        $('.likedFillIcon').show();

        $('.notificationPopup').addClass('popupCall')
        setTimeout(function() {
            $('.notificationPopup').removeClass('popupCall')
        }, 5000)
        // Triggers notification animation, then removes it after 5 seconds

        if ($('.dislikeButton').hasClass('disliked')) {
          dislikeCount--;

          $('.dislikedIcon').show()
          $('.dislikedFillIcon').hide()
        //   Fill icon if the like is clicked it get rid of the fill dislike icon
          $('.dislikeButton').removeClass('disliked');
        }
      }
      $('.likeCount').text(likeCount);
      $('.dislikeCount').text(dislikeCount);
    });
  
    $('.dislikeButton').on('click', function() {
      if ($(this).hasClass('disliked')) {
        dislikeCount--;
        $(this).removeClass('disliked');
        $('.dislikedIcon').show()
        $('.dislikedFillIcon').hide()
      } else {
        dislikeCount++;
        $(this).addClass('disliked');
        $('.dislikedIcon').hide()
        $('.dislikedFillIcon').show()

        $('.notificationPopup').addClass('popupCall')
        setTimeout(function() {
            $('.notificationPopup').removeClass('popupCall')
        }, 5000)
        // Triggers notification animation, then removes it after 5 seconds


        if ($('.likeButton').hasClass('liked')) {
          likeCount--;
          $('.likeButton').removeClass('liked');

          
          $('.likedFillIcon').hide();     
          $('.likedIcon').show();
        //   Fill icon if the dislike is clicked it get rid of the fill like icon
        }
      }
      $('.likeCount').text(likeCount);
      $('.dislikeCount').text(dislikeCount);
    });
  });
// like button function 





























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

    $('.skip-button').click(function() {
        video.currentTime += 5;
    });
    $('.back-button').click(function() {
        video.currentTime -= 5
    })
    // Skip foward and backward 

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