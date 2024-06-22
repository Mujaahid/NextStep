let peopleIMG = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrER8VJQH_ClH3Un3hV2Kf-UfYcFJBK7fsw&usqp=CAU",
    "data:image/jpeg;base64,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",
    "https://mymodernmet.com/wp/wp-content/uploads/2017/04/redheads-brian-dowling-22.jpg",
    "https://i.pinimg.com/736x/55/fa/e0/55fae06b254f3bb7fdb698750422a006.jpg"
    ];
let peopleName = [
    "Zhao Lu Si",
    "Wu Jinyan",
    "Red Head Women"
]
function displayComments(commentArr) {
    let count = 0;

    while (count < commentArr.length) {
        commentArr[count].displayComment();
        count++;
    }
}
class Comment { 
    constructor(poster, views, message, date, img) {

        this.poster = poster;
        this.views = views;
        this.message = message;
        this.date = date;
        this.img = img;
        this.replies = [];
    }

    addReply(reply) {
        this.getReplies.push(reply)
    }



    displayComment() {
        let appendStr = `<div class="comment">`;
            appendStr += `
            <div class="left">
                <div class="pic"><img src="${this.img}" alt=""></div>
                <h3>${this.poster}</h3>
            </div>
            <div class="right">
                <p>${this.message}</p>
                <button>reply</button>
            </div>
            `;

            for (let i = 0; i < this.replies.length; i++) {


                appendStr += `
                <div class="comment">
                    <div class="left">
                        <div class="pic"><img src="${this.replies[i].img}" alt=""></div>
                        <h3>${this.replies[i].name}</h3>
                    </div>
                    <div class="right">
                        <p>${this.replies[i].msg}</p>
                    </div>
                    
                    
                </div>
                
                `;
                
            }
            
            appendStr += `</div>`;

        $("body").append(appendStr);
    }

    get getImg() {
        return this.img;
    }
    get getPoster() {
        return this.poster;
    }

    get getView() {
        return this.views;
    }

    get getMessage() {
        return this.message;
    }

    get getDate() {
        return this.date;
    }

    get getReplies() {
        return this.replies;
    }


    set setPoster(poster) {
        this.poster = poster;
    }

    set setView(view) {
        this.views = view
    }

    set setMessage(message) {
        this.message = message;
    }

    set setDate(date) {
       this.date = date;
    }


}

let imgURL = "https://i.pinimg.com/1200x/00/b8/b3/00b8b31152aa1cbd5f305b62b11ff774.jpg";
let msg = "I love the creator of this site. I would love to marry him instantly!";
let msg2 = "I was here first!";
let comment1 = new Comment("yellowfever444", 67, msg2, "23/01/23", imgURL);
let comment2 = new Comment("yellowfever777", 123, msg, "23/01/23", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxbozD3NyjxJuQYaKhBT_KNKB1xXUG7GKgw&usqp=CAU");


let reply1 = {
    img: "https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2019/01/Im-Jin-ah-Nana.jpg",
    name: "americanIdol",
    msg: "I saw this first, loved it first, so get lost!"
};


let arr = [comment1, comment2];
displayComments(arr);

let comments = $(".comment");
for (let i = 0; i < comments.length; i++) {
    let btn = $(comments[i]).children(".right").children("button");

    console.log(btn);

    $(btn).on("click", function(e) {


        let comment = comments[i];
        console.log(comment);
        
        $(comment).append(`
            <input class="replyInput" type="text" placeholder="Write a reply...">
        `);

        
        let inputVal = "";
        let inputField = $(comment).find(".replyInput");

        console.log(inputField);

        $(inputField).on("keypress", function(event) {
            
            if (event.which == 13) {
                console.log("I was pressed!");
                inputVal = $("input").val();
                
                let random = Math.floor(Math.random() * 3);


                console.log(random);

                let reply2 = {
                    img: peopleIMG[random],
                    name: peopleName[random],
                    msg: inputVal
                };

                postReply(reply2, comment);
                $(inputField).remove();
            }
        });

        
    });


}


function postReply(reply, comment) {
    console.log(comment);
    $(comment).append(`
    <div class="comment">
        <div class="left">
            <div class="pic"><img src="${reply.img}" alt=""></div>
            <h3>${reply.name}</h3>
        </div>
        <div class="right">
            <p>${reply.msg}</p>
        </div>
        
        
    </div>
    `);
}