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
        imageName: 'Animating Balls lol',
        imageURL: 'https:i.pinimg.com/originals/12/c7/31/12c731eea637b8f439c2f049326a7711.gif'
    },
    {
        imageName: 'Donald Trump 2023',
        imageURL: 'https://media.newyorker.com/photos/59097e818b51cf59fc424249/master/w_1600,c_limit/170306_r29511.jpg'
    },
    {
        imageName: 'Space Thing',
        imageURL: 'https://i.pinimg.com/564x/3d/84/40/3d8440c3ddcb9906896da7d1ec039e00.jpg'
    },
    {
        imageName: 'Borja Gonzalez',
        imageURL: 'https://pbs.twimg.com/media/EC_exUpWwAAIewC?format=jpg&name=large'
    },
    {
        imageName: 'Sara Kipin',
        imageURL: 'https://64.media.tumblr.com/37cdfd1a391864834375eb01132cfbbd/tumblr_o5g3nxo1wR1qhmfh4o2_r1_1280.jpg'
    },
    {
        imageName: 'Animal Character Illustrations',
        imageURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/14b3a677691307.5eac099761067.jpg'
    },
    {
        imageName: 'Gentleman Outlaw: Photo',
        imageURL: 'https://64.media.tumblr.com/02edca06714fb2eefb91672f111c3a3b/47f28bb273dbbe35-0c/s1280x1920/a824aa77b543b1d7a399741815e126628380a32b.jpg'
    },
]
// Carousel

$(document).ready(function() {
    $('.imageView').append(`
        <img src="${carouselList[0].imageURL}" alt="">
    `)
    $('.imageView-name').append(`
        <h3>${carouselList[0].imageName}</h3>
    `)
})

function turnImageOff(ImageOff) {
    if($(ImageOff).children().length > 0) {
        $(ImageOff).empty()
    }
}
function turnNameOff(NameOff) {
    if($(NameOff).children().length > 0) {
        $(NameOff).empty()
    }
}
// Turns off image if another image is clicked

for (let i = 0; i < carouselList.length; i++) {
    $('.imageView-carousel').append(`
        <div class="imageCarouselView-preview">
            <img class="MainPreview" src="${carouselList[i].imageURL}" alt="">
        </div>
    `)
}
// For each images in the arrey will go into the Carousel list


for (let i = 0; i < carouselList.length; i++) {
    let tempList = $('.imageView-carousel > .imageCarouselView-preview')


    $(tempList[i]).on('click', (e) => {
        turnImageOff('.imageView')
        turnNameOff('.imageView-name')

        $('.imageView').append(`
            <img src="${carouselList[i].imageURL}" alt="">
        `)
        $('.imageView-name').append(`
            <h3>${carouselList[i].imageName}</h3>
        `)
    })
}
// Once the image is clicked the image will display