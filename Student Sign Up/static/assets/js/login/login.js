let btn1 = $(".btn1");
let btn2 = $(".closeLoginBtn");


$(btn1).click(() => {
    $(".loginWrapper").show();
})
  

$(btn2).click(() => {
    $(".loginWrapper").fadeOut(300);
})
  
