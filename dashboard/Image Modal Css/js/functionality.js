let sendBtn = $(".textareaContainer a");
let userArray = [
    {
        username: "katie01",
        imageURL: "https://i.servimg.com/u/f79/19/16/92/45/tm/41207.jpg"
    },
    {
        username: "stellaxxx2",
        imageURL: "https://i.pinimg.com/originals/a5/03/a4/a503a43c67de780b102c545c0e3dd005.png"
    },
    {
        username: "daOGkyle",
        imageURL: "https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859"
    },
    {
        username: "markusboi",
        imageURL: "images/lion.jpg"
    }
];

$(sendBtn).click(() => {

    let comment = $("textarea").val();

    $(".noCommentsDiv").animate({
        bottom: "100%"
    }, 500);
    $(".innerCommentContainer").delay(500).animate({
        top: "0%"
    }, 500);

    
    $(".commentTrack").append(`
        <div class="comment">
            <div class="avatarContainer">
                <img src="${userArray[1].imageURL}" alt="Lion in a suit">
            </div>
            <div class="commentBody">
                <h5>${userArray[1].username}</h5>
                <p>${comment}</p>
                <footer>
                <div class="leftSide">
                    <i class="fas fa-clock icon"></i>
                    <p>5 days ago</p>
                </div>
                <div class="rightSide">
                    <div class="thumbsUp">
                        <a href="#"><i class="fas fa-thumbs-up icon"></i></a>
                        <p>4</p>
                    </div>
                    <div class="thumbsDown">
                        <a href="#"><i class="fas fa-thumbs-down icon"></i></a>
                        <p>0</p>
                    </div>
                
            <a href="#">Reply</a>
            </div>
                </footer>
            </div>
        </div>
    `);

    comment = $("textarea").val("");


});