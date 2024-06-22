let commentBtn = $(".addComment");
let commentBox = $("textarea");
let wasBtnClicked = false;

// console.log(sendBtn);



commentBtn.click(() => {
    if (wasBtnClicked == false) {
        $(".textareaContainer a .icon").delay(200).animate({
            opacity: 1
        });
        $("textarea").animate({
            height: "100%",
            opacity: 1
        });
        wasBtnClicked = true;
    } else {
        $(".textareaContainer a .icon").delay(200).animate({
            opacity: 0
        });
        $("textarea").animate({
            height: "0%",
            opacity: 0
        });
        wasBtnClicked = false;
    }
});


