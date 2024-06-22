const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
}) 
// toggle dark theme

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



function getuserChatBox(chatbox) {
    if($(chatbox).children().length > 0) {
        $(chatbox).empty()
    } 
}
// Turns chat box off when another chat box is clicked

function videoOff(videoOff) {
    if($(videoOff).children().length > 0) {
        $(videoOff).empty()
    } 
}
// Restarts the modal, gets rid of the previous video
function imageOff(imageOff) {
    if($(imageOff).children().length > 0) {
        $(imageOff).empty()
    } 
}
// Restarts the modal, gets rid of the previous video

function docOff(docOff) {
    if($(docOff).children().length > 0) {
        $(docOff).empty()
    } 
}
// Restarts the modal, gets rid of the previous video




var contactList = [
    {
        contactName: 'Mohamed Samir',
        contactImage: 'https://mir-s3-cdn-cf.behance.net/user/115/13e5611023931.5eff0d3b4bac9.jpg',
        contactDescrip: 'Graphic Design, Branding, Illustration'.split(','),
        contactChat: [
            {chat: '', response: ''},
            {videoUrl: '', videoTitle: ''},
            {imageUrl: '', imageTitle: ''},
            {documentUrl: '', documentTitle: ''}
        ]
    },
    {
        contactName: 'Christian Antolin',
        contactImage: 'https://mir-s3-cdn-cf.behance.net/user/115/ab2644103319.5edd7724af834.png',
        contactDescrip: 'Art Director, Motion Graphics, Illustration'.split(','),
        contactChat: [
            {chat: '', response: ''},
            {videoUrl: '', videoTitle: ''},
            {imageUrl: '', imageTitle: ''},
            {documentUrl: '', documentTitle: ''}
        ]
    },
    {
        contactName: 'Daniel Castrillon',
        contactImage: 'https://mir-s3-cdn-cf.behance.net/user/115/38d0441518397.5ea8073bea22e.png',
        contactDescrip: 'Illustration, Typography, Character Design'.split(','),
        contactChat: [
            {chat: '', response: ''},
            {videoUrl: '', videoTitle: ''},
            {imageUrl: '', imageTitle: ''},
            {documentUrl: '', documentTitle: ''}
        ]
    },
    {
        contactName: 'Matthew Woodson',
        contactImage: 'https://mir-s3-cdn-cf.behance.net/user/115/fceda95643605.5664816603972.jpg',
        contactDescrip: 'Illustration, Film'.split(','),
        contactChat: [
            {chat: '', response: ''},
            {videoUrl: '', videoTitle: ''},
            {imageUrl: '', imageTitle: ''},
            {documentUrl: '', documentTitle: ''}
        ]
    },
    {
        contactName: 'Mike',
        contactImage: 'https://mir-s3-cdn-cf.behance.net/user/115/215057.53ac6f3dacec6.jpg',
        contactDescrip: 'Illustration, Graphic Design, UI/UX'.split(','),
        contactChat: [
            {chat: '', response: ''},
            {videoUrl: '', videoTitle: ''},
            {imageUrl: '', imageTitle: ''},
            {documentUrl: '', documentTitle: ''}
        ]
    },
    {
        contactName: 'Caramurú Baumgartner',
        contactImage: 'https://mir-s3-cdn-cf.behance.net/user/115/38d0441518397.5ea8073bea22e.png',
        contactDescrip: 'Illustration, Graphic Design, Art Direction'.split(','),
        contactChat: [
            {chat: '', response: ''},
            {videoUrl: '', videoTitle: ''},
            {imageUrl: '', imageTitle: ''},
            {documentUrl: '', documentTitle: ''}
        ]
    },
    {
        contactName: 'Antonella Malachite',
        contactImage: 'https://mir-s3-cdn-cf.behance.net/user/115/9b1ea310067539.5f555f44b67fa.jpg',
        contactDescrip: 'Graphic Design, Illustration, Branding'.split(','),
        contactChat: [
            {chat: '', response: ''},
            {videoUrl: '', videoTitle: ''},
            {imageUrl: '', imageTitle: ''},
            {documentUrl: '', documentTitle: ''}
        ]
    }
]
// Storing Contacts

for (let i = 0; i < contactList.length; i++) {
    $('.contact-body').append(`
    <div id="contactItems" class="contact-items">
        <div class="contact-info">
            <div class="contact-profile">
                <img class="contactProfile" src="${contactList[i].contactImage}">
            </div>
            <div id="contactName" class="contact-name">
                <h4 class="contactUserName">${contactList[i].contactName}</h4>
                <p>${contactList[i].contactDescrip}</p>
            </div>
        </div>
        <div id="contactSettings" class="contact-settings">
            <i class="fas fa-ellipsis-v"></i>
        </div>
        <div id="dropdown" class="contact-dropdown">
            <ul class="dropdownUl">
                <li id="deleteContact" class="delte-contact">Delete Contact</li>
                <li>Mute Notification</li>
            </ul>
        </div>
    </div>
    `)
}
// creating Contacts

for (let i = 0; i < contactList.length; i++) {
    let tempList = $('.contact-body > .contact-items');

    $(tempList[i]).on('click', (e) => {
        getuserChatBox('.chat-box-one')

        $('.chat-wrapper').append(`
            <div class="chat-box-one">
            <div class="chat-box-header">
                <div class="contactingUser">
                    <div class="friend-profile friend-profile-1">
                        <img src="${contactList[i].contactImage}" alt="">
                    </div>
                    <div class="contactingUser-description">
                        <h4>${contactList[i].contactName}</h4>
                        <p>${contactList[i].contactDescrip}</p>
                    </div>
                </div>
                <i class="fas fa-bars"></i>
            </div>
            <div id="ChatBox" class="chat-box">
                <div class="noChat-box">
                    <div class="noChat_svg">
                        <?xml version="1.0" encoding="UTF-8"?>
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 907.36 639.78">
                            <defs><style>.cls-1{fill:var(--primary-color);}.cls-2{fill:var(--dark-neu-color);}.cls-3{fill:#e0353e;}</style></defs>
                            <path class="cls-2" d="M479.54,291.79l-236.62,53.58-75.95,71.52c-7.19,6.77-19.01,3.16-21.2-6.47l-9.3-40.96-26.28,5.95c-30.73,6.96-61.28-12.31-68.23-43.04L1.42,153.28c-6.96-30.73,12.31-61.28,43.04-68.23L413.79,1.42c30.73-6.96,61.28,12.31,68.23,43.04l40.55,179.09c6.96,30.73-12.31,61.28-43.04,68.23Z"/>
                            <path class="cls-2" d="M620.89,435.33l89.63,26.99,51.72,56.01c4.89,5.3,13.7,3.27,15.78-3.63l8.87-29.38h0c45.68,13.76,93.86-12.12,107.61-57.8l9.17-30.46c13.75-45.68-12.12-93.86-57.8-107.61l-166-49.99c-45.68-13.75-93.86,12.12-107.61,57.8l-9.17,30.46c-13.75,45.68,12.12,93.86,57.8,107.61Z"/>
                            <path class="cls-1" d="M214.71,179.7h0c8.56,0,15.51,6.95,15.51,15.51h0c0,8.56-6.95,15.51-15.51,15.51h0c-8.56,0-15.51-6.95-15.51-15.51h0c0-8.56,6.95-15.51,15.51-15.51Z" transform="translate(-37.81 52.24) rotate(-12.76)"/>
                            <path class="cls-1" d="M262.18,168.95h0c8.56,0,15.51,6.95,15.51,15.51h0c0,8.56-6.95,15.51-15.51,15.51h0c-8.56,0-15.51-6.95-15.51-15.51h0c0-8.56,6.95-15.51,15.51-15.51Z" transform="translate(-34.26 62.45) rotate(-12.76)"/>
                            <path class="cls-1" d="M309.29,158.28h0c8.56,0,15.51,6.95,15.51,15.51h0c0,8.56-6.95,15.51-15.51,15.51h0c-8.56,0-15.51-6.95-15.51-15.51h0c0-8.56,6.95-15.51,15.51-15.51Z" transform="translate(-30.74 72.59) rotate(-12.76)"/>
                            <rect class="cls-1" x="671.49" y="337.19" width="31.02" height="31.02" rx="15.51" ry="15.51" transform="translate(132.93 -185.23) rotate(16.98)"/>
                            <path class="cls-1" d="M733.55,351.4h0c8.56,0,15.51,6.95,15.51,15.51h0c0,8.56-6.95,15.51-15.51,15.51h0c-8.56,0-15.51-6.95-15.51-15.51h0c0-8.56,6.95-15.51,15.51-15.51Z" transform="translate(139.11 -198.2) rotate(16.98)"/>
                            <path class="cls-1" d="M779.75,365.51h0c8.56,0,15.51,6.95,15.51,15.51h0c0,8.56-6.95,15.51-15.51,15.51h0c-8.56,0-15.51-6.95-15.51-15.51h0c0-8.56,6.95-15.51,15.51-15.51Z" transform="translate(145.24 -211.08) rotate(16.98)"/>
                            <path class="cls-3" d="M434.66,573.37l-68.68,20.97-39.51,43.12c-3.74,4.08-10.5,2.55-12.12-2.74l-6.89-22.52h0c-35,10.69-72.04-9.03-82.72-44.03l-7.13-23.34c-10.69-35,9.03-72.04,44.03-82.72l127.2-38.83c35-10.69,72.04,9.03,82.72,44.03l7.13,23.34c10.69,35-9.03,72.04-44.03,82.72Z"/>
                            <rect class="cls-1" x="371.88" y="498.4" width="23.8" height="23.8" rx="11.9" ry="11.9" transform="translate(899.85 886.29) rotate(163.02)"/>
                            <rect class="cls-1" x="336.17" y="509.3" width="23.8" height="23.8" rx="11.9" ry="11.9" transform="translate(833.17 918.05) rotate(163.02)"/>
                            <rect class="cls-1" x="300.74" y="520.12" width="23.8" height="23.8" rx="11.9" ry="11.9" transform="translate(766.99 949.56) rotate(163.02)"/>
                        </svg>
                    </div>
                    <h4>You Have Not Started A Conversation With <br> <span>${contactList[i].contactName}</span> </h4>
                </div>


            </div>
            <div class="chat-bar">
                    <input type="text" class="chat-bar-input input" placeholder="Type A Message...">
                    <div class="uploadOpt">
                        <div class="uploadOpt-btn">
                            <i class="fas fa-upload"></i>
                        </div>
                        <div class="uploadOpt-wrapper">
                            <div class="vidUploadBtn">
                                <i class="fa-solid videoUploadBtn-icon fa-video"></i>
                            </div>
                            <div class="imgUploadBtn">
                                <i class="fa-solid fa-image"></i>
                            </div>
                            <div class="docUploadBtn">
                                <i class="fas fa-file"></i>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        `)

        $(".chat-bar-input").keyup(function(event) {
            let message = $('.chat-bar-input').val();
            if(event.which === 13 && message !== '') {
                $('.noChat-box').css({
                    display: 'none'
                })
                // Makes svg go away after user input. 


                $('#ChatBox').append(`
                <div class="userChat-wrapper">
                    <p class="userChat-text chat">${message}</p>
                    <p class="chat-time">8:30 am</p>
                </div>
                `)
                $('.chat-bar-input').val('');

                var scroll_to_bottom = document.getElementById('ChatBox');
                function scrollBottom(element) {
                    element.scroll({ top: element.scrollHeight, behavior: "smooth"})
                }
                scrollBottom(scroll_to_bottom);
                // Scroll to bottom Function
            }
        })
        // User Input Message

        $('.uploadOpt-btn').on('click', function(e) {
            $('.uploadOpt-wrapper').slideDown(500)
            e.stopPropagation(e)
        })
        $('.uploadOpt-wrapper').on('click', function(e) {
            e.stopPropagation(e)
        })
        $(document).click(function(){
            $('.uploadOpt-wrapper').slideUp(600);
        });
        // Open upload btn

        $('.vidUploadBtn').on('click', function() {
            $('.uploadVideo-chatModal').css({
                display: 'block'
            })

            $('.uploadVideo-chatModal').append(`
                <div class="chatVideoModal">
                    <div class="userVideo-body">
                        <div class="video-display">
                            <video id="uploadSingleVideo" controls src=""></video>
                            <input type="file" accept="video/mp4,video/x-m4v,video/*" id="readSingleVideoUrl">
                        </div>

                    <div class="uploadVideoBtn">
                        <label for="readSingleVideoUrl">Upload Video</label>
                    </div>

                    <div class="userVideo-footer">
                        <input class="videoTitle_Input" type="text" placeholder="Title Of The Video...">
                        <button id="submitUserVideo">Upload</button>
                    </div>
                </div>
            `)
            // Creates the modal
    
            document.getElementById('readSingleVideoUrl').addEventListener('change', function(){
                if (this.files[0] ) {
                var picture = new FileReader();
                picture.readAsDataURL(this.files[0]);
                picture.addEventListener('load', function(event) {
                var videoUrl = document.querySelector('#uploadSingleVideo').setAttribute('src', event.target.result);
                document.querySelector('#uploadSingleVideo').style.display = 'block';
                    $('#submitUserVideo').on('click', function() {
                        let videoTitleInput = $('.videoTitle_Input').val()
                        $('#ChatBox').append(`
                            <div class="userChat-wrapper">
                                <div class="userChat-video">
                                    <video id="uploadSingleVideo" controls src="${videoUrl, event.target.result}"></video>
                                </div>
                                <h4 class="userVideo-title">${videoTitleInput}</h4>
                                <p class="chat-time">9:51 am</p>
                            </div>
                        `)
                        // Uploads video and title to chatbox

                        $('.noChat-box').css({
                            display: 'none'
                        })
                        // Makes svg go away after user input. 

                        videoOff('.uploadVideo-chatModal')

                        $('.uploadVideo-chatModal').css({
                            display: 'none'
                        })
                        // closes the modal
                    })
                });
                }
            });
            // Upload Function

            $('.chatVideoModal').on('click', function(e) {
                e.stopPropagation();
            })
            $('.uploadVideo-chatModal').on('click', function() {
                $('.uploadVideo-chatModal').css({
                    display: 'none'
                })
                videoOff('.uploadVideo-chatModal')
                var scroll_to_bottom = document.getElementById('ChatBox');
                function scrollBottom(element) {
                    element.scroll({ top: element.scrollHeight, behavior: "smooth"})
                }
                scrollBottom(scroll_to_bottom);
                // Scroll to bottom Function
            })
            // Close the modal only if you click on the background
        })
        // Upload Video to Chatbox

        $('.imgUploadBtn').on('click', function() {
            $('.uploadImage-chatModal').css({
                display: 'block'
            })

            $('.uploadImage-chatModal').append(`
                <div class="chatImageModal">
                    <div class="userImage-body">
                        <div class="image-display">
                            <img id="uploadSingleImage" src="" alt="">
                            <input type="file" id="readSingleImageUrl">
                        </div>
                        <div class="uploadImageBtn">
                            <label for="readSingleImageUrl">Upload Image</label>
                        </div>
                    </div>
                    <div class="userImage-footer">
                        <input class="imageTitle_Input" type="text" placeholder="Title Of The Image...">
                        <button id="submitUserImage">Upload</button>
                    </div>
                </div>
            `)
            // Creates the modal
    
            
            document.getElementById('readSingleImageUrl').addEventListener('change', function(){
                if (this.files[0] ) {
                var picture = new FileReader();
                picture.readAsDataURL(this.files[0]);
                picture.addEventListener('load', function(event) {
                var imageUrl = document.querySelector('#uploadSingleImage').setAttribute('src', event.target.result);
                document.querySelector('#uploadSingleImage').style.display = 'block';
                    $('#submitUserImage').on('click', function() {
                        let imageTitleInput = $('.imageTitle_Input').val()
                        $('#ChatBox').append(`
                            <div class="userChat-wrapper">
                                <div class="userChat-image">
                                    <img src="${imageUrl, event.target.result}" alt="">
                                </div>
                                <h4 class="userImage-title">${imageTitleInput}</h4>
                                <p class="chat-time">9:51 am</p>
                            </div>
                        `)
                        // Uploads video and title to chatbox

                        $('.noChat-box').css({
                            display: 'none'
                        })
                        // Makes svg go away after user input. 

                        imageOff('.uploadImage-chatModal')

                        $('.uploadImage-chatModal').css({
                            display: 'none'
                        })
                        // closes the modal
                    })
                })
                }
            });
            // Upload Function

            $('.chatImageModal').on('click', function(e) {
                e.stopPropagation();
            })
            $('.uploadImage-chatModal').on('click', function() {
                $('.uploadImage-chatModal').css({
                    display: 'none'
                })
                videoOff('.uploadImage-chatModal')
                var scroll_to_bottom = document.getElementById('ChatBox');
                function scrollBottom(element) {
                    element.scroll({ top: element.scrollHeight, behavior: "smooth"})
                }
                scrollBottom(scroll_to_bottom);
                // Scroll to bottom Function
            })
            // Close the modal only if you click on the background
        })
        // Upload Image to Chatbox


        $('.docUploadBtn').on('click', function() {
            $('.uploadDoc-chatModal').css({
                display: 'block'
            })
            $('.uploadDoc-chatModal').append(`
                <div class="chatDocModal">
                    <div class="docPlaceholder">
                        <input class="docInput" type="file" id="readSingleDocUrl" placeholder="Name Of Document">
                    </div>
                    <div class="uploadDocBtn">
                        <label for="readSingleDocUrl">Upload Document</label>
                    </div>
                    <div class="userDoc-footer">
                        <button id="submitUserDoc">Upload</button>
                    </div>
                </div>
            `) 

            // Creates the modal
            $('#readSingleDocUrl').change(function() {
                var filepath = this.value;
                var m = filepath.match(/([^\/\\]+)$/);
                var filename = m[1];
                $('.docInput').html(filename);

                $('#submitUserDoc').on('click', function() {
                    $('#ChatBox').append(`
                        <div class="userChat-wrapper">
                            <div class="userDoc-flex">
                                <div class="userChat-doc">
                                    <p><a id="downloadFunction">${filename}</a></p>
                                </div>
                                <div class="downloadDoc">
                                    <i class="fas downloadIcon fa-download"></i>
                                </div>
                            </div>
                            <p class="chat-time">9:51 am</p>
                        </div>
                    `)
                    // Uploads video and title to chatbox



                    $('.noChat-box').css({
                        display: 'none'
                    })
                    // Makes svg go away after user input. 

                    docOff('.uploadDoc-chatModal')

                    $('.uploadDoc-chatModal').css({
                        display: 'none'
                    })
                    // closes the modal
                })

            });


            // document.getElementById('readSingleDocUrl').addEventListener('change', function() {



            //     if (this.files[0] ) {
            //         var picture = new FileReader();
            //         picture.readAsDataURL(this.files[0]);
            //         picture.addEventListener('load', function(event) {
            //         var docUrl = document.querySelector('#readSingleDocUrl').setAttribute('src', event.target.result);
            //         console.log(docUrl, event.target.result.data)
            //         document.querySelector('#readSingleDocUrl').style.display = 'block';
            //         $('#submitUserDoc').on('click', function() {
            //             $('#ChatBox').append(`
            //                 <div class="userChat-wrapper">
            //                     <div class="userDoc-flex">
            //                         <div class="userChat-doc">
            //                             <p>${docUrl, event.target.result}</p>
            //                         </div>
            //                         <div class="downloadDoc">
            //                             <i class="fas downloadIcon fa-download"></i>
            //                         </div>
            //                     </div>
            //                     <p class="chat-time">9:51 am</p>
            //                 </div>
            //             `)















            //             // Try consoling the the file that gets selected / uploaded and find away to extract just the name.
            //             // Right now it uploads the whole URL we need the name only

















            //             // Uploads video and title to chatbox

            //             $('.noChat-box').css({
            //                 display: 'none'
            //             })
            //             // Makes svg go away after user input. 

            //             docOff('.uploadDoc-chatModal')

            //             $('.uploadDoc-chatModal').css({
            //                 display: 'none'
            //             })
            //             // closes the modal
            //         })
            //         })
            //     }
            // });

            $('.chatDocModal').on('click', function(e) {
                e.stopPropagation();
            })
            $('.uploadDoc-chatModal').on('click', function() {
                $('.uploadDoc-chatModal').css({
                    display: 'none'
                })
                videoOff('.uploadDoc-chatModal')
                var scroll_to_bottom = document.getElementById('ChatBox');
                function scrollBottom(element) {
                    element.scroll({ top: element.scrollHeight, behavior: "smooth"})
                }
                scrollBottom(scroll_to_bottom);
                // Scroll to bottom Function
            })
            // Close the modal only if you click on the background


        })
    })
}
// Creating chat box from the contact list that the user clicked


$('.addContact-btn').on('click', function(e) {
    $('.addContact-wrapper').slideDown(600)
    e.stopPropagation();
})
$('.addContact-wrapper').on('click', function(e) {
    e.stopPropagation();
})
$(document).click(function(){
    $('.addContact-wrapper').slideUp(600);
});
// Add Contact dropdown

$(document).ready(function(){
    $("#filter").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#contactBody .contact-items").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});
// Searching Contacts

$(document).ready(function() {
    $('.contact-settings').on('click', function(e) {
        let contactDropdown = $(e.target).parent().parent().children('.contact-dropdown')
         console.log("hello")
        $(contactDropdown).slideDown(500)
        e.stopPropagation();
    })
    $('.contact-dropdown').on('click', function(e) {
        e.stopPropagation();
    })
    $(document).on('click', function() {
        $('.contact-dropdown').slideUp(500)
    })
})
// Contact dropdown settings. 

$(document).ready(function() {
    $('.delte-contact').on('click', function(e) {
        let deleteContact = $(e.target).parent().parent().parent()
        $(deleteContact).delay(500).remove()
        getuserChatBox('.chat-box-one')
    })
})
// Delete Contact

// $(document).ready(function() {
//     $('.contact-items').on('click', function() {

//         $('.chat-wrapper').append(`
//             <div class="chat-box-one">
//             <div class="chat-box-header">
//                 <div class="contactingUser">
//                     <div class="friend-profile friend-profile-1">
//                         <img src="${contactList[0].contactImage}" alt="">
//                     </div>
//                     <div class="contactingUser-description">
//                         <h4>${contactList[0].contactName}</h4>
//                         <p>${contactList[0].contactDescrip}</p>
//                     </div>
//                 </div>
//                 <i class="fas fa-bars"></i>
//             </div>
//             <div id="ChatBox" class="chat-box">
//                 <div class="noChat-box">
//                     <div class="noChat_svg">
//                         <?xml version="1.0" encoding="UTF-8"?>
//                         <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 907.36 639.78">
//                             <defs><style>.cls-1{fill:var(--primary-color);}.cls-2{fill:var(--dark-neu-color);}.cls-3{fill:#e0353e;}</style></defs>
//                             <path class="cls-2" d="M479.54,291.79l-236.62,53.58-75.95,71.52c-7.19,6.77-19.01,3.16-21.2-6.47l-9.3-40.96-26.28,5.95c-30.73,6.96-61.28-12.31-68.23-43.04L1.42,153.28c-6.96-30.73,12.31-61.28,43.04-68.23L413.79,1.42c30.73-6.96,61.28,12.31,68.23,43.04l40.55,179.09c6.96,30.73-12.31,61.28-43.04,68.23Z"/>
//                             <path class="cls-2" d="M620.89,435.33l89.63,26.99,51.72,56.01c4.89,5.3,13.7,3.27,15.78-3.63l8.87-29.38h0c45.68,13.76,93.86-12.12,107.61-57.8l9.17-30.46c13.75-45.68-12.12-93.86-57.8-107.61l-166-49.99c-45.68-13.75-93.86,12.12-107.61,57.8l-9.17,30.46c-13.75,45.68,12.12,93.86,57.8,107.61Z"/>
//                             <path class="cls-1" d="M214.71,179.7h0c8.56,0,15.51,6.95,15.51,15.51h0c0,8.56-6.95,15.51-15.51,15.51h0c-8.56,0-15.51-6.95-15.51-15.51h0c0-8.56,6.95-15.51,15.51-15.51Z" transform="translate(-37.81 52.24) rotate(-12.76)"/>
//                             <path class="cls-1" d="M262.18,168.95h0c8.56,0,15.51,6.95,15.51,15.51h0c0,8.56-6.95,15.51-15.51,15.51h0c-8.56,0-15.51-6.95-15.51-15.51h0c0-8.56,6.95-15.51,15.51-15.51Z" transform="translate(-34.26 62.45) rotate(-12.76)"/>
//                             <path class="cls-1" d="M309.29,158.28h0c8.56,0,15.51,6.95,15.51,15.51h0c0,8.56-6.95,15.51-15.51,15.51h0c-8.56,0-15.51-6.95-15.51-15.51h0c0-8.56,6.95-15.51,15.51-15.51Z" transform="translate(-30.74 72.59) rotate(-12.76)"/>
//                             <rect class="cls-1" x="671.49" y="337.19" width="31.02" height="31.02" rx="15.51" ry="15.51" transform="translate(132.93 -185.23) rotate(16.98)"/>
//                             <path class="cls-1" d="M733.55,351.4h0c8.56,0,15.51,6.95,15.51,15.51h0c0,8.56-6.95,15.51-15.51,15.51h0c-8.56,0-15.51-6.95-15.51-15.51h0c0-8.56,6.95-15.51,15.51-15.51Z" transform="translate(139.11 -198.2) rotate(16.98)"/>
//                             <path class="cls-1" d="M779.75,365.51h0c8.56,0,15.51,6.95,15.51,15.51h0c0,8.56-6.95,15.51-15.51,15.51h0c-8.56,0-15.51-6.95-15.51-15.51h0c0-8.56,6.95-15.51,15.51-15.51Z" transform="translate(145.24 -211.08) rotate(16.98)"/>
//                             <path class="cls-3" d="M434.66,573.37l-68.68,20.97-39.51,43.12c-3.74,4.08-10.5,2.55-12.12-2.74l-6.89-22.52h0c-35,10.69-72.04-9.03-82.72-44.03l-7.13-23.34c-10.69-35,9.03-72.04,44.03-82.72l127.2-38.83c35-10.69,72.04,9.03,82.72,44.03l7.13,23.34c10.69,35-9.03,72.04-44.03,82.72Z"/>
//                             <rect class="cls-1" x="371.88" y="498.4" width="23.8" height="23.8" rx="11.9" ry="11.9" transform="translate(899.85 886.29) rotate(163.02)"/>
//                             <rect class="cls-1" x="336.17" y="509.3" width="23.8" height="23.8" rx="11.9" ry="11.9" transform="translate(833.17 918.05) rotate(163.02)"/>
//                             <rect class="cls-1" x="300.74" y="520.12" width="23.8" height="23.8" rx="11.9" ry="11.9" transform="translate(766.99 949.56) rotate(163.02)"/>
//                         </svg>
//                     </div>
//                     <h4>You Have Not Started A Conversation With <br> <span>${contactList[0].contactName}</span> </h4>
//                 </div>



//             </div>
//             <div class="chat-bar">
//                     <input type="text" class="chat-bar-input input" placeholder="Type A Message...">
//                     <button id="button"><i class="fas fa-paper-plane"></i></button>
//                     <div class="vidUploadBtn">
//                         <i class="fa-solid videoUploadBtn-icon fa-video"></i>
//                     </div>
//                     <div class="imgUploadBtn">
//                         <i class="fa-solid fa-image"></i>
//                     </div>
//                     <div class="docUploadBtn">
//                         <i class="fa-solid fa-file"></i>
//                     </div>
//             </div>
//         </div>
//         `)

//         $(".chat-bar-input").keyup(function(event) {
//             let message = $('.chat-bar-input').val();
//             if(event.which === 13 && message !== '') {
//                 $('.noChat-box').css({
//                     display: 'none'
//                 })
//                 // Makes svg go away after user input. 

//                 $('#ChatBox').append(`
//                 <div class="userChat-wrapper">
//                     <p class="userChat-text chat">${message}</p>
//                     <p class="chat-time">8:30 am</p>
//                 </div>
//                 `)
//                 $('.chat-bar-input').val('');

//                 var scroll_to_bottom = document.getElementById('ChatBox');
//                 function scrollBottom(element) {
//                     element.scroll({ top: element.scrollHeight, behavior: "smooth"})
//                 }
//                 scrollBottom(scroll_to_bottom);
//                 // Scroll to bottom Function
//             }
//         })
//         // User Input Message

//         $('.vidUploadBtn').on('click', function() {
//             $('.uploadVideo-chatModal').css({
//                 display: 'block'
//             })
//             // Opens the modal
//             $('.chatVideoModal').on('click', function(e) {
//                 e.stopPropagation();
//             })
//             $('.uploadVideo-chatModal').on('click', function() {
//                 $('.uploadVideo-chatModal').css({
//                     display: 'none'
//                 })
//             })
//             // Close the modal
            
//             document.getElementById('readSingleVideoUrl').addEventListener('change', function(){
//                 if (this.files[0] ) {
//                 var picture = new FileReader();
//                 picture.readAsDataURL(this.files[0]);
//                 picture.addEventListener('load', function(event) {
//                     var videoUrl = document.querySelector('#uploadSingleVideo').setAttribute('src', event.target.result);
//                     document.querySelector('#uploadSingleVideo').style.display = 'block';

//                     $('#submitUserVideo').on('click', function() {
//                         let videoTitleInput = $('.videoTitle_Input').val()
//                         $('#ChatBox').append(`
//                             <div class="userChat-wrapper">
//                                 <div class="userChat-video">
//                                     <i class="fas videoPlayIcon fa-play"></i>
//                                     <video id="uploadSingleVideo" controls src="${videoUrl, event.target.result}"></video>
//                                 </div>
//                                 <h4 class="userVideo-title">${videoTitleInput}</h4>
//                                 <p class="chat-time">9:51 am</p>
//                             </div>
//                         `)
//                         $('.videoTitle_Input').val('')
//                         $('.uploadVideo-chatModal').css({
//                             display: 'none'
//                         })
//                         $('.noChat-box').css({
//                             display: 'none'
//                         })
//                         // Makes svg go away after user input. 
//                     })
//                 });
//                 }
//             });
//         })
//         // Upload Video to Chatbox

//         $('.imgUploadBtn').on('click', function() {
//             $('.uploadImage-chatModal').css({
//                 display: 'block'
//             })
//             // Opens the modal
//             $('.chatImageModal').on('click', function(e) {
//                 e.stopPropagation();
//             })
//             $('.uploadImage-chatModal').on('click', function() {
//                 $('.uploadImage-chatModal').css({
//                     display: 'none'
//                 })
//             })
//             // Close the modal
            
//             document.getElementById('readSingleImageUrl').addEventListener('change', function(){
//                 if (this.files[0] ) {
//                 var picture = new FileReader();
//                 picture.readAsDataURL(this.files[0]);
//                 picture.addEventListener('load', function(event) {
//                     var imageUrl = document.querySelector('#uploadSingleImage').setAttribute('src', event.target.result);
//                     document.querySelector('#uploadSingleImage').style.display = 'block';

//                     $('#submitUserImage').on('click', function() {
//                         let imageTitleInput = $('.imageTitle_Input').val()
//                         $('#ChatBox').append(`

//                             <div class="userChat-wrapper">
//                             <div class="userChat-image">
//                                 <img src="${imageUrl, event.target.result}" alt="">
//                             </div>
//                             <h4 class="userImage-title">${imageTitleInput}</h4>
//                             <p class="chat-time">9:51 am</p>
//                         </div>

//                         `)
//                         $('.imageTitle_Input').val('')
//                         $('.uploadImage-chatModal').css({
//                             display: 'none'
//                         })
//                     })
//                 });
//                 }
//             });
//         })
//         // Upload Image to Chatbox
//         $('.startChat-svg').css({
//             display: "none"
//         })
//     })
// })
// Opening chat from Contact