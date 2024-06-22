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



var carouselList = [
    {
        videoName: 'The Beauty Of Wong Kar Wai',
        videoURL: 'the-beauty-of-wong-kar-wai.mp4',
        videoThumbnail: 'https://i.ytimg.com/vi/XNdalPtWBVw/maxresdefault.jpg',
        videoDescription: "The cinematography of Wong Kar Wai's work All DoP : Andrew Lau, Christopher Doyle, Pun-Leung Kwan, Ping Bin Lee, Darius Khondji & Philippe Le Sourd Song : Night Stack"
    },
    {
        videoName: 'The Beauty Of MacBeth',
        videoURL: '9convert.com - The Beauty Of Macbeth.mp4',
        videoThumbnail: 'https://i.ytimg.com/vi_webp/yBsgIiMK3DI/maxresdefault.webp',
        videoDescription: "Directed by Justin Kurzel Director of photography : Adam Arkapaw Song : Jed Kurzel - Turn Hell Hound As you probably know, I can't monetize my videos because the content isn't mine."
    },
    {
        videoName: 'The Beauty Of Razorback',
        videoURL: '9convert.com - The Beauty Of Razorback_v720P.mp4',
        videoThumbnail: 'https://i.ytimg.com/vi/sQ6mFUWdoKc/maxresdefault.jpg',
        videoDescription: "Soundtrack from the 1984 Russell Mulcahy film, 'Razorback,' with Gregory Harrison, Arkie Whiteley, Judy Morris, Chris Haywood, David Argue, John Howard & Bill Kerr. HD Film Tributes makes zero money from YouTube as obviously none of our uploads will ever be monetized by us. Any and all ad revenue that's generated from our channel goes directly to Google as well as to the various copyright owners; the film studios and the recording industry."
    }
]
// Carousel

$(document).ready(function() {
    $('.videoView').append(`
        <video poster="${carouselList[0].videoThumbnail}" src="${carouselList[0].videoURL}" controls></video>
    `)
    $('.videoView-name').append(`
        <h3>${carouselList[0].videoName}</h3>
    `)
    $('.truncate').append(`
        <p>${carouselList[0].videoDescription}</p>
    `)
})

function turnVideoOff(VideoOff) {
    if($(VideoOff).children().length > 0) {
        $(VideoOff).empty()
    }
}
function turnNameOff(NameOff) {
    if($(NameOff).children().length > 0) {
        $(NameOff).empty()
    }
}
function turnDescriptionOff(DescriptionOff) {
    if($(DescriptionOff).children().length > 0) {
        $(DescriptionOff).empty()
    }
}
// Turns off video if another video is clicked

for (let i = 0; i < carouselList.length; i++) {
    $('.playlist').append(`
        <div class="playlist-item">
            <video poster="${carouselList[i].videoThumbnail}" src="${carouselList[i].videoURL}"></video>
        </div>
    `)
}
// For each videos in the arrey will go into the Carousel list


for (let i = 0; i < carouselList.length; i++) {
    let tempList = $('.playlist > .playlist-item')

    $(tempList[i]).on('click', (e) => {
        turnVideoOff('.videoView')
        turnNameOff('.videoView-name')
        turnDescriptionOff('.truncate')

        $('.videoView').append(`
            <video poster="${carouselList[i].videoThumbnail}" src="${carouselList[i].videoURL}" controls></video>
        `)
        $('.videoView-name').append(`
            <h3>${carouselList[i].videoName}</h3>
        `)
        $('.truncate').append(`
            <p>${carouselList[i].videoDescription}</p>
        `)
    })
}
// Once the image is clicked the image will display