$(document).ready(function() {
    $('.nav-profile-wrapper').click(function() {
        $('.nav-dropdown').slideDown(500)
    })
    $('body').click(function (event) {
        if(!$(event.target).closest('.nav-profile-wrapper').length && !$(event.target).is('.nav-profile-wrapper')) {
          $(".nav-dropdown").slideUp(900);
        }     
    });
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', () => {
         document.body.classList.toggle('dark-theme');
    })
    // ^^^ remove this later ^^^

    function getUserImage() {
        let navProfileImg = $('.nav-profile img');
        let srcAttr = navProfileImg.attr('src');
        $('.userProfileImage').attr('src', srcAttr);
    }
    getUserImage()
    function getUserName() {
        let navUserName = $('.nav-profile-wrapper h5');
        let textAttr = navUserName.text();
        $('.userName').text(textAttr);
    }
    // Nav Profile Image being placed


    $('.filterIcon').on('click', function(e) {
        $('.filterWrapperOpen').slideToggle(400);
        e.stopPropagation();
    });
    $(".filterWrapperOpen").click(function(e){
        e.stopPropagation();
    });
    $(document).on('click', function(){
        $(".filterWrapperOpen").slideUp(400)
    });
    $('#networkSearchInput').on('keyup', function() {
        let value = $(this).val().toLowerCase();
        $('.networkItem-wrapper .networkPost').each(function() {
            let networkPost = $(this);
            let networkPostTitle = networkPost.find('.networkPost-body h3').text().toLowerCase();
            // You can add other elements you want to filter here
            // Example: let networkPostSubtitle = networkPost.find('.networkPost-body p').text().toLowerCase();
            // Then use a condition like (networkPostTitle.indexOf(value) > -1 || networkPostSubtitle.indexOf(value) > -1)
            networkPost.toggle(networkPostTitle.indexOf(value) > -1);
        });
    });

    $.getJSON('https://raw.githubusercontent.com/Mujaahid/Occupation-API/main/occupation.json', function(jobTitle) {
        let name = jobTitle.occupations[0].name;
        let titleChip = $('.searchPostInput');
        titleChip.append(`
            <span class="searchChip">
                <i class="fas closeSearchChip fa-times"></i>
                ${name}
            </span>
        `);
    });
    $.getJSON('https://raw.githubusercontent.com/Mujaahid/Occupation-API/main/occupation.json', function(jobData) {
        let skills = jobData.occupations[0].skills;
        let filterWrapper = $('.filterWrapper');
        skills.forEach(skill => {
          filterWrapper.append(`
            <label class="filterItems">
              <input type="checkbox" name="checkbox" />
              <p>${skill}</p>
            </label>
          `);
        });
    });

    // Search Functions
    $(document).on('click', '.closeSearchChip', function() {
        $('.searchPostWrapper').hide();
        $('.newSearchWrapper').show();
    })
    $('.closeBack').on('click', function() {
        $('.searchPostWrapper').show();
        $('.newSearchWrapper').hide();
    })
    // New Search
    let newsTitle = $('.searchChip').text()
    $('.NewsTitleText').text(newsTitle)
    // Occupation text being placed
    $('.closeActive').on('click', function() {
        $('.openActive').show();
        $('.activeUserContainer').hide(300);
        $('.closeActive').hide();
    })
    $('.openActive').on('click', function() {
        $('.closeActive').show();
        $('.activeUserContainer').show(300);
        $('.openActive').hide();
    })
    // Close Active Users
    $('.closeNews').on('click', function() {
        $('.openNews').show();
        $('.bigNewsBody').hide(300);
        $('.closeNews').hide();
    })
    $('.openNews').on('click', function() {
        $('.closeNews').show();
        $('.bigNewsBody').show(300);
        $('.openNews').hide();
    })
    let storedNewsArticles = [
        {
            articleProfile: 'https://media.wired.com/photos/64a6fb1fdaed59ebbf460b60/master/w_1920,c_limit/Threads-Could-Kill-Twitter-Business-74583405.jpg',
            articleType: 'Technology',
            articleTitle: 'How Threads Could Kill Twitter'
        },
        {
            articleProfile: '',
            articleType: 'Technology',
            articleTitle: 'Can Threads make more money than Elon Musk’s Twitter?'
        },
        {
            articleProfile: 'https://media.wired.com/photos/64a7157090167265276c8906/master/w_1920,c_limit/brakelight_science_GettyImages-1213695332-(1).jpg',
            articleType: 'Technology',
            articleTitle: 'All the Ways to Slow a Car (Even Some Bad Ways)'
        },
    ]
    for (let i = 0; i < storedNewsArticles.length; i++) {
        $('.bigNewsBody').append(`
            <div class="bigNewsItem">
                <div class="bigNewsProfile">
                    <img src="${storedNewsArticles[i].articleProfile}" alt="">
                </div>
                <div class="bigNewsArticle">
                    <p class="subjects">${storedNewsArticles[i].articleType}</p>
                    <h5>${storedNewsArticles[i].articleTitle}</h5>
                </div>
            </div>
        `)
    }
    // Store and Print News Articles 


    let videoData = [];
    let imageData = [];
    $('.createPostInput').on('click', function() {
        $('.createPostModal').empty();
        $('.createPostBackground').show();

        $.getJSON('https://raw.githubusercontent.com/Mujaahid/Occupation-API/main/occupation.json', function(jobData) {
            let name = jobData.occupations[0].name;
            let titleChip = $('.createTag-title');
            titleChip.append(`
                <span>${name}<i class="fas createTagPlus fa-plus"></i></span>
            `);
        });
        $(document).on('click', '.deleteChip', function(e) {
            let deleteChip = $(e.target).parent().parent();
            deleteChip.remove();
        })
        $('.createPostBackground').append(`
            <div class="createPostModal">
                <div class="createPost-header">
                    <h3>Create A Post.</h3>
                </div>
                <div class="selectField">
                    <div class="selectFlex">
                        <i class="fas fa-search"></i>
                        <input id="nameSearch" placeholder="Select Field." type="text">
                    </div>
                    <i class="fas fa-angle-down"></i>
                    <div class="hideSelectDrop">
                        <div class="selectFieldDropdown">

                        </div>
                    </div>

                </div>
                <div class="createPost-body">
                    <div class="createTitle">
                        <input class="postTitle" placeholder="Create A Title..." type="text">
                    </div>
                    <div class="createParagraph">
                        <textarea class="textArea postParagraph" placeholder="Create A Paragraph..." cols="30" rows="10"></textarea>
                    </div>
                    <div class="createUpload">
                        <span class="uploadVideoPost">                    
                            <i class="fas fa-video"></i>
                        </span>
                        <span class="uploadImagePost">
                            <i class="far fa-images"></i>
                        </span>
                    </div>
                </div>
                <div class="createPost-footer">
                    <div class="createPostFooter-top">
                        <div class="createTag-title">
                        </div>
                    </div>
                    <div class="createPostFooter-bottom">
                        <span class="cancelPost">Cancel</span>
                        <span class="createPostButton">Post</span>
                    </div>
                </div>
            </div>
        `);
        $('.selectField').on('click', function(e) {
            $('.hideSelectDrop').slideDown(300);
            // e.stopPropagation();
        })
        $.getJSON('https://raw.githubusercontent.com/Mujaahid/Occupation-API/main/occupation.json', function(fieldName) {
            $.each(fieldName.occupations, function(index, occupation) {
              let name = occupation.name;
              $('.selectFieldDropdown').append(`<span class="selectItem">${name}</span>`);
            });
        });
        $('#nameSearch').on('keyup', function() {
            let findName = $(this).val().toLowerCase();
            $('.selectFieldDropdown .selectItem').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(findName) > - 1)
            })
        })
        // select Field


        $(document).on('click', '.uploadVideoPost', function() {
            $('.postUploadVideo-background').empty();
            $('.postUploadVideo-background').show();
            $('.postUploadVideo-background').append(`
                <div class="postUploadVideo">
                    <div class="videoDropZone">
                        <i class="fa-solid uploadVideoIcon fa-play"></i>
                        <input type="file" id="videoInput" accept="video/*" multiple>
                        <label for="videoInput">Click To Upload.</label>
                    </div>
                    <div class="playlistPreviewWrapper">
                    </div>
                    <div class="postUploadVideo-footer">
                        <span class="cancelVideoUpload">Cancel</span>
                        <span class="saveVideoUpload">Save</span>
                    </div>
                </div>
            `)
            function handleVideoUpload(event) {
                let videoFiles = event.target.files;
                for (let i = 0; i < videoFiles.length; i++) {
                    let file = videoFiles[i];
                    let videoURL = URL.createObjectURL(file);
                    let uniqueIdentifier = Date.now() + i;
                    let inputId = `thumbnailInput-${uniqueIdentifier}`; // Unique ID for each input element
                    $('.playlistPreviewWrapper').append(`
                        <div class="playlistPreviewItem" data-identifier="${uniqueIdentifier}">
                            <div class="deleteVideo"><i class="far fa-trash-alt"></i></div>
                                <div class="playlistPreview"> 
                                    <video poster="" src="${videoURL}"></video>
                                </div>
                                <p class="fileTitle">${file.name}</p>
                                <div class="thumbnailWrapper">
                                    <i class="fa-regular fa-image"></i>
                                    <input type="file" class="thumbnailInput" accept="image/*" id="${inputId}">
                                    <label for="${inputId}">Add Thumbnail</label>
                                </div>
                            </div>
                        </div>
                    `);
                    videoData.push({
                        uniqueIdentifier: uniqueIdentifier,
                        videoURL: videoURL,
                        posterURL: ''
                    });
                }
            }
            $(document).on('change', '.thumbnailInput', handleThumbnailUpload);
            $(document).on('click', '.deleteVideo', function(e) {
                let deleteVideo = $(e.target).closest('.playlistPreviewItem');
                deleteVideo.remove();
            })
            function handleThumbnailUpload(event) {
                let thumbnailFile = event.target.files[0];
                let thumbnailURL = URL.createObjectURL(thumbnailFile);
                let playlistPreviewItem = $(event.target).closest('.playlistPreviewItem');
                playlistPreviewItem.find('video').attr('poster', thumbnailURL);

                let uniqueIdentifier = playlistPreviewItem.data('identifier');
                let videoDataIndex = videoData.findIndex(item => item.uniqueIdentifier === uniqueIdentifier);

                // Check if the corresponding video data is found before setting the posterURL
                if (videoDataIndex !== -1) {
                    videoData[videoDataIndex].posterURL = thumbnailURL;
                } else {
                    console.error(`Video data not found for identifier: ${uniqueIdentifier}`);
                }
            }
            $('#videoInput').on('change', handleVideoUpload);
            $(document).on('click', '.saveVideoUpload', function() {
                $('.postUploadVideo-background').hide();
            });
            $(document).on('click', '.cancelVideoUpload', function() {
                $('.postUploadVideo').empty();
                $('.postUploadVideo-background').hide();
                videoData.length = 0;
            })
        })
        // Upload Video

        $(document).on('click', '.uploadImagePost', function() {
            $('.postUploadImage-background').empty();
            $('.postUploadImage-background').show();
            $('.postUploadImage-background').append(`
                <div class="postUploadImage">
                    <div class="imageDropZone">
                        <i class="far uploadImageIcon fa-image"></i>
                        <input type="file" id="imageInput" accept="image/*" multiple>
                        <label for="imageInput">Click To Upload.</label>
                    </div>
                    <div class="galleryPreviewWrapper">
                    </div>
                    <div class="postUploadVideo-footer">
                    <span class="cancelImageUpload">Cancel</span>
                    <span class="saveImageUpload">Save</span>
                    </div>
                </div>
            `)
            function handleImageUpload(event) {
                let imageFiles = event.target.files;
                for (let i = 0; i < imageFiles.length; i++) {
                    let file = imageFiles[i];
                    let imageURL = URL.createObjectURL(file);
                    let uniqueImageIdentifier = Date.now() + i;
                    $('.galleryPreviewWrapper').append(`
                    <div class="galleryPreviewItem" data-identifier="${uniqueImageIdentifier}">
                        <div class="deleteImage"><i class="far fa-trash-alt"></i></div>
                            <div class="galleryPreview">
                                <img src="${imageURL}" alt="">
                            </div>
                            <p class="fileTitle">${file.name}</p>
                        </div>
                    </div>
                    `);
                    imageData.push({
                        imageURL: imageURL
                    })
                }
            }
            $(document).on('click', '.deleteImage', function(e) {
                let deleteImage = $(e.target).closest('.galleryPreviewItem');
                deleteImage.remove();
            })
            $('#imageInput').on('change', handleImageUpload);
            $(document).on('click', '.saveImageUpload', function() {
                $('.postUploadImage-background').hide();
            });
            $(document).on('click', '.cancelImageUpload', function() {
                $('.postUploadImage').empty();
                $('.postUploadImage-background').hide();
                videoData.length = 0;
            })
        })

        let selectedJobTitle;
        $(document).on('click', '.selectItem', function(e) {
            e.stopPropagation();
            let selectName = $(this).text();
            $('#nameSearch').val(selectName);

            $('.hideSelectDrop').slideUp(300)
            selectedJobTitle = $(this).text().trim(); // Assign the selected job title to the variable
            updateSelectedJobAndSkills(selectedJobTitle);
        })
        function updateSelectedJobAndSkills(selectedJobTitle) {
            $.getJSON('https://raw.githubusercontent.com/Mujaahid/Occupation-API/main/occupation.json', function(jobData) {
              let selectedOccupation = jobData.occupations.find(occupation => occupation.name === selectedJobTitle);
              let titleChip = $('.createTag-title');
              titleChip.empty(); // Clear the existing content before appending the new one
              titleChip.append(`
                <span>${selectedJobTitle}<i class="fas createTagPlus fa-plus"></i></span>
              `);
          
              // Clear the existing skills before appending the new ones
              $('.tagBody-wrapper').empty();
          
              selectedOccupation.skills.forEach((skill) => {
                $('.tagBody-wrapper').append(`
                  <span class="addPostTag"><i class="fas plusAddIcon fa-plus"></i> ${skill}</span>
                `);
              });
            });
        }
        // Choose Field, and Update

        $(document).on('click', '.createTag-title', function() {
            $('.createPost-tag').remove();
            updateSelectedJobAndSkills(selectedJobTitle)
            console.log(updateSelectedJobAndSkills(selectedJobTitle))
            $('.createPost-tagsModalbackground').show();
            $('.createPost-tagsModalbackground').append(`
                <div class="createPost-tag">
                    <div class="tagBody-wrapper">

                    </div>
                    <div class="tagFooter-wrapper">
                        
                    </div>
                    <div class="tagFooter">
                        <span class="cancelFooterTag">Cancel</span>
                        <span class="saveFooterTag">Save</span>
                    </div>
                </div>
            `)


            $('.createPost-tag').on('click', '.addPostTag', function(e) {
                let addTag = $(this);
                let tagContent = addTag.text();
                addTag.remove();
                $('.tagFooter-wrapper').append(`
                    <span class="addPostTag">
                        <i class="fas removeAddTag fa-times"></i> ${tagContent}
                    </span>
                `);
            });
            $('.createPost-tag').on('click', '.removeAddTag', function(e) {
                e.stopPropagation();
                let deleteTag = $(this).closest('.addPostTag');
                let clonedTag = deleteTag.clone().text();
                deleteTag.remove();
                $('.tagBody-wrapper').append(`
                    <span class="addPostTag">
                        <i class="fas plusAddIcon fa-plus"></i> ${clonedTag}
                    </span>
                `);
            });
            $(document).on('click', '.cancelFooterTag', function() {
                $('.createPost-tag').empty();
                $('.createPost-tag').remove();
                $('.tagFooter-wrapper').empty()
                $('.createPost-tagsModalbackground').hide();
            })
            // Adding tags to the create post.
        })
        $(document).on('click', '.cancelPost', function() {
            $('.createPost-tag').empty();
            // $('.createPost-tag').remove();
            $('.createPostModal').empty();
            $('.createPostModal').remove();
            $('.createPostBackground').hide();
        })
        let tagsArray = [];
        function saveFooterTags() {
            let footerTags = $('.tagFooter-wrapper').text();
            tagsArray = footerTags.split(/\s+/);
        }
        $(document).on('click', '.saveFooterTag', function() {
            $('.createPost-tagsModalbackground').hide();
            saveFooterTags();
        });
        function placeTags(targetElement) {
            $('.tagFooter-wrapper span').each(function() {
                let tagContent = $(this).text();
                tagsArray.push(tagContent);
                targetElement.append(`<span class="networkTags">${tagContent}</span>`);
            });
        }
        // Adding and removing tags
  
        $(document).off('click', '.createPostButton').on('click', '.createPostButton', function() {
            let postTitleValue = $('.postTitle').val();
            let postParagraphValue = $('.postParagraph').val();

            let tagFooter = $('.tagFooter-wrapper');
            if (tagFooter.length <= 0) {
                $('.createTag-title').addClass('createTag-titleError');
            } else {
                $('.createPostModal').empty();
                $('.createPostModal').remove();
                $('.createPostBackground').hide();

                let uniqueIdentifierPost = Date.now(); 
                // You can use any other unique identifier as per your requirement
         
                $('.networkItem-wrapper').prepend(`
                    <div class="userNetworkPost networkArticle" data-identifier="${uniqueIdentifierPost}" data-title="${postTitleValue}" data-paragraph="${postParagraphValue}">
                            <div class="newtworkPost-header">
                            <div class="networkPost-headerLeft">
                                <img class="networkProfile userProfileImage" src="" alt="">
                                <div class="networkBio">
                                    <h4 class="userName"></h4>
                                    <p><span>    </span> | <span>     </span></p>
                                </div>
                            </div>
                            <div class="networkPost-headerRight">
                                <p>now</p>
                            </div>
                        </div>
            
                        <div class="networkPost-body">
                            <h3>${postTitleValue}</h3>
                            <p>${postParagraphValue}</p>
                            ${videoData.length > 0 ? `
                                <div class="videoPostWrapper">
                                    <div class="videoPost singleVideoPost">

                                            <video class="video" poster="${videoData[0].posterURL}" src="${videoData[0].videoURL}"  ></video>
                                    </div>
                                    ${videoData.length > 1 ? `
                                    <div class="videoPlaylistPost">
                                        ${videoData.slice(1, 4).map((data, index) => `
                                            <div class="videoPlaylistItem">
                                                <i class="fas fa-play playIcon"></i>
                                                ${data.posterURL ? `<img src="${data.posterURL}" alt="">` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : ''}
                                </div>
                            ` : ''}

                            ${imageData.length > 0 ? `
                                <div class="ImagePostWrapper">
                                    <div class="imagePost singleImagePost">
                                        <img src="${imageData[0].imageURL}" alt="">
                                    </div>
                                ${imageData.length > 1 ? `
                                    <div class="ImageGalleryPost">
                                    ${imageData.slice(1, 4).map((data, index) => `
                                        <div class="imagePlaylistItem">
                                            <img src="${data.imageURL}" alt="">
                                        </div>
                                        `).join('')}
                                    </div>
                                ` : ''}
                                </div>
                            ` : ''}
                            <div class="networkPost-footer">
                                <div class="networkTagsWrapper">
            
                                </div>
                                <div class="networkIconItemWrapper">
                                    <div class="networkIconItem-right">
                                        <div class="networkIconItem networkIconItemComment">
                                            <i class="fas networkIcon commentIcon  fa-comments"></i>
                                            <p>    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
                // Get the specific .networkTagsWrapper in the newly created post
                let targetElement = $(`[data-identifier="${uniqueIdentifierPost}"] .networkTagsWrapper`);
                placeTags(targetElement);
                getUserImage();
                getUserName()
            }
        });
    })
    // Create Post

    $(document).on('click', '.userNetworkPost', function() {
        let index = $('.userNetworkPost').index(this);
        let postTitleValue = $(this).data('title');
        let postParagraphValue = $(this).data('paragraph');
        userNetworkPostClick(index, postTitleValue, postParagraphValue);
    });
    
    function userNetworkPostClick(index, postTitleValue, postParagraphValue) {
        $('.enhancedPostWrapper').empty();
        $('.enhancedPostWrapper').show();
        $('.enhancedPostWrapper').append(`
        <div class="enhancedPost">
        <div class="closeEnhancedPost"><i class="fas fa-times"></i></div>
        <div class="enhancedNetworkPost">
            <div class="networkRepost">
                <i class="fas repostIcon fa-retweet"></i>
                <p>George Simister</p>
            </div>
            <div class="newtworkPost-header">
                <div class="networkPost-headerLeft">
                    <img class="networkProfile userProfileImage" src="" alt="">
                    <div class="networkBio">
                        <h4 class="userName"></h4>
                        <p> <span>User Occupation</span> | <span>Type of </span></p>
                    </div>
                </div>
                <div class="networkPost-headerRight">
                 
                </div>
            </div>
            <div class="networkPost-body">
                <p>3 Hours ago</p>
                <h3>${postTitleValue}</h3>
                <p>${postParagraphValue}</p>

            <div class="enhancedImagePostWrapper">
                ${videoData.length > 0 ? `
                    <div class="enhancedVideo">
                        <video class="video" poster="${videoData[0].posterURL}" src="${videoData[0].videoURL}"  ></video>
                    </div>
                    ${videoData.length > 1 ? `
                        <div class="enhancedVideoPlaylistPost">



                            ${videoData.map((data, index) => `
                                <div class="enhancedPlaylistItem">
                                    <i class="fas fa-play playIcon"></i>
                                    <img src="${data.posterURL}" alt="">
                                    <source src="${data.videoURL}">
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                ` : ''}

                ${imageData.length > 0 ? `
                    <div class="enhancedImagePostWrapper">
                        <div class="enhancedImage">
                            <img src="${imageData[0].imageURL}" alt="">
                        </div>
                    ${imageData.length > 1 ? `
                        <div class="enhancedGalleryWrapper">
                        ${imageData.map((data, index) => `
                            <div class="enhancedGalleryItem">
                                <img src="${data.imageURL}" alt="">
                            </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    </div>
                ` : ''}
            </div>
    
            </div>
            <div class="networkPost-footer">
                <div class="networkTagsWrapper">
                </div>
                <div class="networkIconItemWrapper enhancedFooter">
                    <div class="networkIconItem-right">
                        <div class="networkIconItem networkIconItemComment">
                            <i class="fas networkIcon commentIcon  fa-comments"></i>
                            <p>123</p>
                        </div>
        
                        <div class="networkIconItem networkIconItemRepost">
                            <i class="fas networkIcon repostIcon fa-retweet"></i>
                            <p>123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="commentWrapper">
            <div class="comment-header">
                <div class="createComment-wrapper">
                    <div class="createComment-profile">
                        <img class="userProfileImage" src="" alt="">
                    </div>
                    <input type="text" class="createCommentInput" placeholder="Create Comment...">
                </div>
                <div class="commentHeader-content">
                    <div class="commentHeader-left">
                        <p>Sort by</p>
                        <i class="fas fa-sort-amount-up"></i>
                    </div>
                    <div class="commentHeader-right">
                        <p>Comments <span class="commentValue"></span></p>
                    </div>
                </div>
            </div>
            <div class="comment-body">
                <div class="commentItemWrapper">
                    <div class="commentItem">
                        <div class="commentItemProfile">
                            <img src="https://yt3.ggpht.com/5tw7XyuT1KCvObTayfbOxHWIstaEj-Lf0FqyLmyURKumkEVCbleXtGpwoA5P8gLH-un17EoHjw=s88-c-k-c0x00ffffff-no-rj" alt="">
                        </div>
                        <div class="commentItem-right">
                            <div class="commentItemHeader">
                                <h4>@kinderjunior8235</h4>
                                <p>Back-end | <span>Part-time</span></p>
                            </div>
                            <div class="commentItemBody">
                                <p>I always tell people that Cavs team was a Super Team, but they seem to forget K Love was a perennial All Star and putting up major numbers Pre Cavaliers. You can't have three ball dominate players on the court and not expect one or two of them to take a backseat.</p>
                            </div>
                            <div class="commentItemFooter">
                                <div class="likeButton">
                                    <p>142</p>
                                    <i class="far fa-thumbs-up"></i>
                                </div>
                                <div class="dislikeButton">
                                    <i class="far fa-thumbs-down"></i>
                                </div>
                                <p class="replyButton">12 Reply</p>
                            </div>
                        </div>
                    </div>
                    <div class="replyCommentItem">
                        <div class="commentItemProfile">
                            <img src="https://yt3.ggpht.com/5tw7XyuT1KCvObTayfbOxHWIstaEj-Lf0FqyLmyURKumkEVCbleXtGpwoA5P8gLH-un17EoHjw=s88-c-k-c0x00ffffff-no-rj" alt="">
                        </div>
                        <div class="commentItem-right">
                            <div class="commentItemHeader">
                                <h4>@kinderjunior8235</h4>
                                <p>Back-end | <span>Part-time</span></p>
                            </div>
                            <div class="commentItemBody">
                                <p>I always tell people that Cavs team was a Super Team, but they seem to forget K Love was a perennial All Star and putting up major numbers Pre Cavaliers. You can't have three ball dominate players on the court and not expect one or two of them to take a backseat.</p>
                            </div>
                            <div class="commentItemFooter">
                                <div class="likeButton">
                                    <p>142</p>
                                    <i class="far fa-thumbs-up"></i>
                                </div>
                                <div class="dislikeButton">
                                    <i class="far fa-thumbs-down"></i>
                                </div>
                                <p class="replyButton">12 Reply</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `);
        $('.enhancedGalleryItem').on('click', function () {
            $('.enhancedGalleryItem').removeClass('activeGalleryItem');
            $(this).addClass('activeGalleryItem');
    
            let imageSrc = $(this).find('img').attr('src');
            $('.enhancedImage img').attr('src', imageSrc);
        });
        // Select and show Image Gallery Item
        $(".enhancedPlaylistItem").on('click', function() {
            $('.enhancedPlaylistItem').removeClass('activeGalleryItem');
            $(this).addClass('activeGalleryItem')
            let videoSrc = $(this).find('source').attr('src');
            $('.enhancedVideo video').attr('src', videoSrc)
            let videoThumbnail = $(this).find('img').attr('src');
            $('.enhancedVideo video').attr('poster', videoThumbnail)
        })
        // Select and show Video Gallery Item
        getUserImage();
        getUserName()
    }
    // Open Created Post



    let storedPost = [
        {
            postTime: '3 hours ago',
            followStatus: false,
            userProfile: 'https://i.pinimg.com/564x/36/24/44/362444053e5765906f0dbf6acfb24c7b.jpg',
            userName: 'Depression Cherry',
            userOccupation: 'Graphic Designer',
            userOccupationType: 'Full-time',
            postContent: [
                { postTitle: 'Posters - Polaris Music Prize' },
                { postParagraph: 'A not-for-profit organization that honours, celebrates and rewards creativity and diversity in Canadian recorded music. Polaris recognizes and markets albums of the highest artistic integrity, without regard to musical genre, professional affiliation, or sales history.' },
                {
                postVideo: [
                    {
                      videoURL: '',
                      videoThumbnail: '',
                    },
                ],
                },
                { postPlaylist: [
                  ],
                },
                { postImage: [] },
                { postGallery: [] },
                { networkTags: [] },
            ],
            postRatings: [
                { postLikes: 110},
                { postComments: [
                    {
                      id: 101,
                      commentProfile: "https://i.pinimg.com/564x/d5/c6/07/d5c6072a4d40a2aece53e8d0e574481c.jpg",
                      text: "Very nice.",
                      user: "Mors Vincit Omnia",
                      date: "1 hour ago",
                      replies: [],
                    },
                    {
                      id: 102,
                      commentProfile: "https://cdn.dribbble.com/users/631066/screenshots/14225904/media/9205f1c5b9f309db1f67552e2239366c.png?resize=1600x1200&vertical=center",
                      text: "This is the second Main comment",
                      user: "MisterShot",
                      date: "3 Months ago",
                      replies: [
                        { 
                            id: 1001, 
                            text: "nice", 
                            user: "decadot",
                            replyProfile: "https://i.pinimg.com/564x/47/6a/f3/476af30e60f6628b1e4fe9735f29da3b.jpg", 
                            date: "2 seconds ago" 
                        },
                        { 
                            id: 1002, 
                            text: "When starting this I had little to no idea of what I was doing but I'm pretty surprised how fun this turned out to look like. Visiting my lovely ittri s... Electrocution [Goretober 02]", 
                            user: "OrangeSavannah",
                            replyProfile: "https://i.pinimg.com/564x/d0/af/fc/d0affc326458026709bd7e88c0ef42ac.jpg", 
                            date: "2 seconds ago" 
                        },
                      ],
                    },
                ],},
                {postViews: []},
                {postRepost: 234},
            ]
        },
        {
            postTime: '18 hours ago',
            userProfile: 'https://i.pinimg.com/564x/d1/fb/22/d1fb22526a0307a72e7fcabfa98d72c2.jpg',
            userName: 'Mumbai',
            userOccupation: 'UI / UX Designer',
            userOccupationType: 'Full-time',
            postContent: [
                { postTitle: 'pop-culture' },
                { postParagraph: 'See more of pop-culture’s content on VSCO.' },
                {
                  postVideo: [
                    {
                      videoURL: '',
                      videoThumbnail: '',
                    },
                  ],
                },
                { postPlaylist: [
                  ],
                },
                { postImage: [] },
                { postGallery: [] },
                { networkTags: [] },
            ],
            postRatings: [
                { postLikes: 49},
                { postComments: [
                    {
                      id: 101,
                      commentProfile: "https://i.pinimg.com/564x/f3/20/06/f32006a460f775f5ffc699b224cb05b1.jpg",
                      text: "This is the main comment",
                      user: "Mr.Chane",
                      date: "3 hours ago",
                      replies: [],
                    },
                ],},
                {postViews: []},
                {postRepost: 58},
            ]
        },
        {
            postTime: '3 Months ago',
            userProfile: 'https://mir-s3-cdn-cf.behance.net/user/230/08907d11808187.5e24d6452647c.jpg',
            userName: 'Finn Hagemann',
            userOccupation: 'CGI Artist',
            userOccupationType: 'Freelance',
            postContent: [
                { postTitle: 'Lotus Eletre: Full Product Assets' },
                { postParagraph: 'Freelance 3D Artist' },
                {
                  postVideo: [
                    {
                      videoURL: '',
                      videoThumbnail: '',
                    },
                  ],
                },
                { postPlaylist: [
                  ],
                },
                { postImage: [] },
                { postGallery: [] },
                { networkTags: [] },
              ],
            postRatings: [
                { postLikes: 900},
                { postComments: [
                    {
                      id: 101,
                      commentProfile: "https://i.pinimg.com/564x/b1/cc/cb/b1cccb71e6a4837059767029c7bb780f.jpg",
                      text: "This is the main comment",
                      user: "Juliana Santos",
                      date: "3 hours ago",
                      replies: [
                        { 
                            id: 1001, 
                            text: "COOOOOOOL!@@!#!#", 
                            user: "Mike Savage",
                            replyProfile: "https://cdnb.artstation.com/p/assets/images/images/024/486/009/large/mike-savage-1-1.jpg?1582580964", 
                            date: "2 hours ago" 
                        },
                        { 
                            id: 1002, 
                            text: "This is amazing", 
                            user: "Jolene Morgan",
                            replyProfile: "https://i.pinimg.com/564x/8a/47/e4/8a47e4f3099c751be9d4ae3af4e5d818.jpg", 
                            date: "19 hours ago" 
                        },
                        { 
                            id: 1003, 
                            text: "nice", 
                            user: "╰𝔖𝔗𝔜𝔤𝔤ℌ𝔈𝔗╯",
                            replyProfile: "https://i.pinimg.com/564x/b0/11/89/b011892a67afa7f65d2506aca2228381.jpg", 
                            date: "2 days ago" 
                        },
                        { 
                            id: 1004, 
                            text: "I'm just an image of an F14 Tomcat", 
                            user: "TOMCat",
                            replyProfile: "https://i.pinimg.com/originals/9b/ff/47/9bff47f9d5ba315a54e832da9c671673.jpg", 
                            date: "2 seconds ago" 
                        },
                      ],
                    },
                    {
                      id: 102,
                      commentProfile: "https://cdn.dribbble.com/users/631066/screenshots/14225904/media/9205f1c5b9f309db1f67552e2239366c.png?resize=1600x1200&vertical=center",
                      text: "This is the second Main comment",
                      user: "MisterShot",
                      date: "3 Months ago",
                      replies: [
                        { 
                            id: 1004, 
                            text: "When starting this I had little to no idea of what I was doing but I'm pretty surprised how fun this turned out to look like. Visiting my lovely ittri s... Electrocution [Goretober 02]", 
                            user: "OrangeSavannah",
                            replyProfile: "https://i.pinimg.com/564x/d0/af/fc/d0affc326458026709bd7e88c0ef42ac.jpg", 
                            date: "2 seconds ago" 
                        },
                      ],
                    },
                ],},
                {postViews: []},
                {postRepost: 435},
            ]
        },
        {
            postTime: '1 Year ago',
            userProfile: 'https://yt3.ggpht.com/kyK_rak3MH9mTXdEjuXbAkiBUd_x-RECTY58Gd0IPqCB7WWQ9Uj5sArCrGUmepqOXlMJEEvbjQ=s88-c-k-c0x00ffffff-no-rj',
            userName: 'Dolly D',
            userOccupation: 'CGI Artist',
            userOccupationType: 'Freelance',
            postContent: [
                { postTitle: 'More Post' },
                { postParagraph: 'Motion Design' },
                { postVideo: [
                    {
                      videoURL: '',
                      videoThumbnail: '',
                    },
                  ],
                },
                { postPlaylist: [ 
                    {
                        videoURL: '',
                        videoThumbnail: '',
                    }
                  ],
                },
                { postImage: [] },
                { postGallery: [] },
                { networkTags: [] },
            ],
            postRatings: [
                { postLikes: 11},
                { postComments: [],},
                {postViews: []},
                {postRepost: 15},
            ]
        },
        {
            postTime: '1 day ago',
            userProfile: 'https://yt3.ggpht.com/ytc/AOPolaTezFAIIoOvZIuFlf2hG-a7S3axB5Gb5p_XM8OWjw=s88-c-k-c0x00ffffff-no-rj',
            userName: 'Agnes O',
            userOccupation: 'Graphic Motion Designer',
            userOccupationType: 'Full-time',
            postContent: [
                { postTitle: 'Kodak' },
                { postParagraph: 'Freelance 3D Artist' },
                {
                  postVideo: [
                    {
                      videoURL: '',
                      videoThumbnail: '',
                    },
                  ],
                },
                { postPlaylist: [
                    {
                        videoURL: '',
                        videoThumbnail: '',
                    }
                  ],
                },
                { postImage: [] },
                { postGallery: [] },
                { networkTags: [] },
            ],
            postRatings: [
                { postLikes: 112},
                { postComments: [
                    {
                      id: 101,
                      commentProfile: "https://i.pinimg.com/564x/b1/cc/cb/b1cccb71e6a4837059767029c7bb780f.jpg",
                      text: "This is the main comment",
                      user: "Juliana Santos",
                      date: "3 hours ago",
                      replies: [
                        { 
                            id: 1001, 
                            text: "COOOOOOOL!@@!#!#", 
                            user: "Mike Savage",
                            replyProfile: "https://cdnb.artstation.com/p/assets/images/images/024/486/009/large/mike-savage-1-1.jpg?1582580964", 
                            date: "2 hours ago" 
                        },
                        { 
                            id: 1002, 
                            text: "This is amazing", 
                            user: "Jolene Morgan",
                            replyProfile: "https://i.pinimg.com/564x/8a/47/e4/8a47e4f3099c751be9d4ae3af4e5d818.jpg", 
                            date: "19 hours ago" 
                        },
                        { 
                            id: 1003, 
                            text: "nice", 
                            user: "╰𝔖𝔗𝔜𝔤𝔤ℌ𝔈𝔗╯",
                            replyProfile: "https://i.pinimg.com/564x/b0/11/89/b011892a67afa7f65d2506aca2228381.jpg", 
                            date: "2 days ago" 
                        },
                        { 
                            id: 1004, 
                            text: "I'm just an image of an F14 Tomcat", 
                            user: "TOMCat",
                            replyProfile: "https://i.pinimg.com/originals/9b/ff/47/9bff47f9d5ba315a54e832da9c671673.jpg", 
                            date: "2 seconds ago" 
                        },
                      ],
                    },
                    {
                      id: 102,
                      commentProfile: "https://cdn.dribbble.com/users/631066/screenshots/14225904/media/9205f1c5b9f309db1f67552e2239366c.png?resize=1600x1200&vertical=center",
                      text: "This is the second Main comment",
                      user: "MisterShot",
                      date: "3 Months ago",
                      replies: [
                        { 
                            id: 1004, 
                            text: "When starting this I had little to no idea of what I was doing but I'm pretty surprised how fun this turned out to look like. Visiting my lovely ittri s... Electrocution [Goretober 02]", 
                            user: "OrangeSavannah",
                            replyProfile: "https://i.pinimg.com/564x/d0/af/fc/d0affc326458026709bd7e88c0ef42ac.jpg", 
                            date: "2 seconds ago" 
                        },
                      ],
                    },
                ],},
                {postViews: []},
                {postRepost: 9},
            ]
        },
    ]
    storedPost.forEach(storedPost => {
        storedPost.creationDate = new Date(storedPost.postTime);
    });
    function getTotalCommentsAndReplies() {
        for (let i = 0; i < storedPost.length; i++) {
            let postComments = storedPost[i].postRatings.find((rating) => rating.hasOwnProperty('postComments'));
            postComments = postComments ? postComments.postComments : []; // If postComments exist, get the array, otherwise, use an empty array
            let postReplies = postComments.reduce((total, comment) => total + comment.replies.length, 0);
            let totalCommentsAndReplies = postComments.length + postReplies;
            storedPost[i].totalCommentsAndReplies = totalCommentsAndReplies;
        }
    }
    getTotalCommentsAndReplies();
    // Now you can access the total comments and replies for each post
    // For example, to access the total for the second post:
    let totalForSecondPost = storedPost[1].totalCommentsAndReplies;
    let totalForThirdPost = storedPost[2].totalCommentsAndReplies;
    let totalForFourthPost = storedPost[3].totalCommentsAndReplies;
    let totalForFifthPost = storedPost[4].totalCommentsAndReplies;
      
      
    let fetchedVideoURL = ['https://packaged-media.redd.it/y4qg76nylbv61/pb/m2-res_480p.mp4?m=DASHPlaylist.mpd&v=1&e=1689793200&s=dfa91e32d64671db6b7e6d26f4eedd3c5fcd5bdc#t=0'];
    let fetchThumbnail = ['https://external-preview.redd.it/mjVMsDDz3lpV2AiBtuN_J2OFtmb0FpgjhuD2II_6vrA.png?width=640&crop=smart&format=pjpg&auto=webp&s=3f39c1a0b0dcaa917662c8ce9a85bb92d5832313']
    storedPost[3].postContent[2].postVideo[0].videoURL = fetchedVideoURL[0];
    storedPost[3].postContent[2].postVideo[0].videoThumbnail = fetchThumbnail[0];

    let fetchsecondVideoUrl = ['https://packaged-media.redd.it/9fw4ls8d1pl61/pb/m2-res_480p.mp4?m=DASHPlaylist.mpd&v=1&e=1689843600&s=041677a26968c23768d7871393d392e8c1d4f324#t=0']
    let fetchThumbnailTwo = ['https://external-preview.redd.it/0VQwFg998tF14ezINzA0KujptOj32JVfqTKzLaY6KvE.png?width=960&crop=smart&format=pjpg&auto=webp&s=ba5b6f40fac1dfa353e245f375128943a2641fe6']
    storedPost[4].postContent[2].postVideo[0].videoURL = fetchsecondVideoUrl[0];
    storedPost[4].postContent[2].postVideo[0].videoThumbnail = fetchThumbnailTwo[0];

    let fetchPlaylist = [
        {
            videoURL: 'https://packaged-media.redd.it/yod9m9nhko1a1/pb/m2-res_480p.mp4?m=DASHPlaylist.mpd&v=1&e=1689789600&s=69ed2cd4dcf6a6778b3bf61e40bd658b10bc6ff7#t=0',
            videoThumbnail: 'https://external-preview.redd.it/yPxoPEuttVj2vopJz6B_NAL-idkro5kOMlQe01aaNBs.png?width=640&crop=smart&format=pjpg&auto=webp&s=cf02d2119d725f715506c43a663aa6fa9623e788',
        },
        {
            videoURL: 'https://packaged-media.redd.it/6ri0cojn3qa61/pb/m2-res_480p.mp4?m=DASHPlaylist.mpd&v=1&e=1689782400&s=f69f91dcaab43dbac8d3d0516a839bcd61708f41#t=0',
            videoThumbnail: 'https://external-preview.redd.it/wy1TSqWPC9YaIjWMlq7b13LWTT5uWbOK9mRIPqTsaQg.png?width=640&crop=smart&format=pjpg&auto=webp&s=4e25589524ea51335aa9ee01f318eae336642008',
        },
        {
            videoURL: 'https://packaged-media.redd.it/3m4y55sgnp571/pb/m2-res_480p.mp4?m=DASHPlaylist.mpd&v=1&e=1689843600&s=4b01dac47405db379fedc1f8c8811138faec9b25#t=0',
            videoThumbnail: 'https://external-preview.redd.it/Vn_4wszIEJfC5nOBJUkGsLFKbwcQ4c6dKTQvVo9i_E8.png?width=960&crop=smart&format=pjpg&auto=webp&s=77fcc8f09f4b9e9292b3c5e8e5ce5557bacb3534',
        }, 
        {
            videoURL: 'https://packaged-media.redd.it/uk9wpu2h8zq41/pb/m2-res_480p.mp4?m=DASHPlaylist.mpd&v=1&e=1689840000&s=3daf2d74c91233474ddf893ee47fe19c06684b9d#t=0',
            videoThumbnail: 'https://external-preview.redd.it/UK3x4Bpx2pBghzsu2TkK9vhWrJQp15ytVuxpuUIylqo.png?width=640&crop=smart&format=pjpg&auto=webp&s=f72a15b736d7fee4537c03cd419a412e43153756'
        }
    ];
    storedPost[4].postContent[3].postPlaylist = fetchPlaylist;

    let fetchedImageURL = ['https://dfjx2uxqg3cgi.cloudfront.net/img/eps/E6138_2x/c/E6138_00.jpg?20200806034013'];
    storedPost[0].postContent[4].postImage = fetchedImageURL;
    let fetchedImageURLtwo = ['https://i.pinimg.com/originals/a6/32/9d/a6329d8db48c9862a82914c452abbde3.gif'];
    storedPost[1].postContent[4].postImage = fetchedImageURLtwo;
    let fetchedImageURLThree = ['https://mir-s3-cdn-cf.behance.net/project_modules/fs/1d2441173961901.64999e474108f.jpg'];
    storedPost[2].postContent[4].postImage = fetchedImageURLThree;
    // Fetch Images
    let fetchedImageGallery = [
        'https://dfjx2uxqg3cgi.cloudfront.net/img/eps/E6138_2x/c/E6138_03.jpg?20200806034013', 
        'https://dfjx2uxqg3cgi.cloudfront.net/img/eps/E6138_2x/c/E6138_06.jpg?20200806034013',
        'https://dfjx2uxqg3cgi.cloudfront.net/img/eps/E6138_2x/c/E6138_01.jpg?20200806034013',
        'https://dfjx2uxqg3cgi.cloudfront.net/img/eps/E6138_2x/c/E6138_02.jpg?20200806034013'
    ]
    storedPost[0].postContent[5].postGallery = fetchedImageGallery;
    let fetchedImageGalleryTwo = [
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8f29f3173961901.64999cead2a46.jpg', 
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e96604173961901.64999e4743bef.jpg',
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b53dfb173961901.64999e4741e98.jpg',
        'https://th.bing.com/th/id/R.9e8b5225d8ffdb4a10c13637d9d8a6a2?rik=9gGlWx4ziuYaSg&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/OIP.K-wb7TXHYf2FNs0foSbhWAAAAA?pid=ImgDet&rs=1'

    ]
    storedPost[2].postContent[5].postGallery = fetchedImageGalleryTwo;
    // Fetch Gallery

    let fetchedNetworkTags = ['Back-end', 'Java', 'Jobs', 'Tech'];
    storedPost[0].postContent[6].networkTags = fetchedNetworkTags;
    let fetchedNetworkTagsTwo = ['Single', 'Bird', 'Digital', 'Car',];
    storedPost[1].postContent[6].networkTags = fetchedNetworkTagsTwo;
    let fetchedNetworkTagsThree = ['3D', 'Art', 'Modeling', 'Car', 'CGI'];
    storedPost[2].postContent[6].networkTags = fetchedNetworkTagsThree;
    let fetchedNetworkTagsFour = ['Affter Effects', 'Visual Effects'];
    storedPost[3].postContent[6].networkTags = fetchedNetworkTagsFour;
    let fetchedNetworkTagsFive = ['Art', 'Motion', 'Graphic', 'CGI'];
    storedPost[4].postContent[6].networkTags = fetchedNetworkTagsFive;
    // Fetch tags Four

    for (let i = 0; i < storedPost.length; i++) {
        $('.networkItem-wrapper').append(`
            <div class="networkPost networkArticle">
                <div class="networkRepost">
                    <i class="fas repostIcon fa-retweet"></i>
                    <a href="#"><p>George Simister</p></a>
                </div>
                <div class="networkContent">
                    <div class="newtworkPost-header">
                        <div class="networkPost-headerLeft">
                            <img class="networkProfile" src="${storedPost[i].userProfile}" alt="">
                            <div class="networkBio">
                                <h4>${storedPost[i].userName}</h4>
                                <p> <span>${storedPost[i].userOccupation}</span> | <span>${storedPost[i].userOccupationType}</span></p>
                            </div>
                        </div>
                        <div class="networkPost-headerRight">
                            <div class="followBtn regularMode">
                                <p>Follow</p>
                            </div>
                            <div class="connectToUserWrapper connectRegularMode">
                                <p class="connectToUser">Connect</p>
                                <i class="fas fa-plus"></i>
                            </div>
                        </div>
                    </div>

                    <div class="networkPost-body">
                        <p class="TimeAdded">${storedPost[i].postTime}</p>
                        <h3>${storedPost[i].postContent[0].postTitle}</h3>
                        <p>${storedPost[i].postContent[1].postParagraph}</p>
                        ${storedPost[i].postContent[4].postImage.length > 0 ? `
                                <div class="ImagePostWrapper">
                                    <div class="imagePost singleImagePost">
                                        <img src="${storedPost[i].postContent[4].postImage}" alt="">
                                    </div>
                                ${storedPost[i].postContent[5].postGallery.length > 0 ? `
                                    <div class="ImageGalleryPost">
                                        <div class="imagePlaylistItem">
                                            <img src="${storedPost[i].postContent[5].postGallery[0]}" alt="">
                                        </div>
                                        <div class="imagePlaylistItem">
                                            <img src="${storedPost[i].postContent[5].postGallery[1]}" alt="">
                                        </div>
                                        <div class="imagePlaylistItem">
                                            <img src="${storedPost[i].postContent[5].postGallery[2]}" alt="">
                                        </div>
                                    </div>
                                ` : ''}
                                </div>
                        ` : ''}

                        ${storedPost[i].postContent[2].postVideo[0].videoURL.length > 0 ? `
                            <div class="videoPostWrapper">
                                <div class="videoPost singleVideoPost">
                                    <video class="video" poster="${storedPost[i].postContent[2].postVideo[0].videoThumbnail}" src="${storedPost[i].postContent[2].postVideo[0].videoURL}" ></video>
                                </div>
                                ${storedPost[i].postContent[3].postPlaylist[0].videoURL.length > 0 ? `
                                    <div class="videoPlaylistPost">
                                        ${storedPost[i].postContent[3].postPlaylist.slice(0,3).map(item => `
                                            <div class="videoPlaylistItem">
                                                <i class="fas fa-play playIcon"></i>
                                                <img src="${item.videoThumbnail}" alt="">
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        ` : ''}
                        <div class="networkPost-footer">
                            <div class="networkTagsWrapper">

                            </div>
                            <div class="networkIconItemWrapper">
                                <div class="networkIconItem-right">
                                    <div class="networkIconItem networkIconItemComment">
                                        <i class="fas networkIcon commentIcon  fa-comments"></i>
                                        <p>${storedPost[i].totalCommentsAndReplies}</p>
                                    </div>
                                    <div class="networkIconItem networkIconItemLike">
                                        <div class="likeButtonWrapper">
                                            <i style="display: none;" class="fas fa-heart likedIcon"></i>
                                            <i class="far likeIcon fa-heart"></i>
                                        </div>
                                        <p class="likeCount">${storedPost[i].postRatings[0].postLikes}</p>
                                    </div>
                                    <div class="networkIconItem networkIconItemRepost">
                                        <i class="fas networkIcon repostIcon fa-retweet"></i>
                                        <p>${storedPost[i].postRatings[3].postRepost}</p>
                                        <div class="repostMenu">
                                            <div class="repostMenuContent">
                                                <p class="repostButton">Repost</p>
                                                <p class="addToRepost">Add To Repost</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="networkIconItem-left">
                                    <i class="fas fa-ellipsis-v"></i>
                                    <div class="postSettings-dropdownWrapper">
                                        <div class="postSettings-dropdown">
                                            <span class="postSettingsDropdown-item">Follow ${storedPost[i].userName}</span>
                                            <span class="postSettingsDropdown-item">Connect with ${storedPost[i].userName}</span>
                                            <span class="postSettingsDropdown-item reportPost"><i class="fas reportIcon fa-flag"></i>Report</span>
                                            <span class="postSettingsDropdown-item blockUser">Not Interested In ${storedPost[i].userName}</span>
                                            <span class="postSettingsDropdown-item">Unfollow ${storedPost[i].userName}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
        let currentNetworkTagsWrapper = $(`.networkItem-wrapper .networkPost:nth-child(${i + 1}) .networkTagsWrapper`);
        storedPost[i].postContent[6].networkTags.forEach(tag => {
            currentNetworkTagsWrapper.append(`
                <span class="networkTags">${tag}</span>
            `);
        });
        $('.networkPost-headerRight').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
        $('.networkIconItemWrapper').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
    }
    // Making the Post 


    $('.networkIconItemWrapper').on('click', '.networkIconItem-left', function() {
        let postSettingsDropdown = $(this).find('.postSettings-dropdownWrapper');
        postSettingsDropdown.show();
    })
    $('.networkIconItem-left').on('click', '.reportPost', function(e) {
        e.preventDefault();
        e.stopPropagation();
        let postIndex = $(this).closest('.networkPost').index();
        handleReportPostClick(postIndex);
    });
    function handleReportPostClick(i) {
        $('.reportBackgroundModal').empty();
        $('.reportBackgroundModal').show();
        $('.reportBackgroundModal').append(`
            <div class="reportModal">
                <div class="reportModal-header">
                    <h4>Reporting ${storedPost[i].userName}</h4>
                    <p>Thank you for reporting and addressing content that goes against our guidelines. </p>
                </div>
                <div class="userRules">

                </div>
                <div class="reportModal-body">
                    <div class="reportTags-wrapper">
                        <span class="reportTagsChip" data-modal-target="HarassmentModal">Harassment</span>
                        <span class="reportTagsChip" data-modal-target="ThreateningModal">Threatening</span>
                        <span class="reportTagsChip" data-modal-target="HateModal">Hate</span>
                        <span class="reportTagsChip" data-modal-target="AbuseModal">Minor Abuse or Sexualization</span>
                        <span class="reportTagsChip" data-modal-target="PersonalInfoModal">Sharing Personal Information</span>
                        <span class="reportTagsChip" data-modal-target="CopyrightModal">Copyright Violation</span>
                        <span class="reportTagsChip" data-modal-target="TrademarkModal">Trademark Violation</span>
                        <span class="reportTagsChip" data-modal-target="SelfHarmModal">Self-harm or Suicide</span>
                        <span class="reportTagsChip" data-modal-target="SpamModal">Spam</span>
                    </div>
                    <div class="policyWrapper">
                        <p>View our <a class="reportLink" href="https://www.behance.net/mujaahidrafeeqw">Terms of Service</a> and our Policies.</p>
                    </div>
                </div>
                <div class="reportModal-footer">
                    
                </div>
            </div>
        `);
        $(document).on('click', '.reportBackgroundModal', function() {
            $(this).hide();
        })
        $(document).on('click', '.reportModal', function(e) {
            e.stopPropagation();
        })
    }
    let modalContent = {
        Harassment: `
          <div class="HarassmentModal">
            <div class="HarassmentModal-header">
                <div class="back">
                    <i class="fas fa-arrow-left"></i>
                    <p>Back to Report.</p>
                </div>
                <h4>Who is the harassment towards?</h4>
            </div>
            <div class="modal-content">
                <label class="reportCheckBox">
                    <input type="checkbox" name="checkbox" />
                    <p>You</p>
                </label>
                <label class="reportCheckBox">
                    <input type="checkbox" name="checkbox" />
                    <p>Someone Else</p>
                </label>
            </div>
            <div class="HarassmentModal-footer">
                <span class="cancel">Cancel</span>
                <span class="submitReport">Submit</span>
            </div>
          </div>
        `,
        Threatening: `
            <div class="ThreateningModal">
                <div class="ThreateningModal-header">
                    <div class="back">
                        <i class="fas fa-arrow-left"></i>
                        <p>Back to Report.</p>
                    </div>
                    <h4>Who is the threat towards?</h4>
                </div>
                <div class="modal-content">
                    <label class="reportCheckBox">
                        <input type="checkbox" name="checkbox" />
                        <p>You</p>
                    </label>
                    <label class="reportCheckBox">
                        <input type="checkbox" name="checkbox" />
                        <p>Someone Else</p>
                    </label>
                </div>
                <div class="ThreateningModal-footer">
                    <span class="cancel">Cancel</span>
                    <span class="submitReport">Submit</span>
                </div>
            </div>
        `
    };
    $('.reportBackgroundModal').on('click', '.reportTagsChip', function() {
        let reportTagValue = $(this).text().trim(); 
        if (modalContent.hasOwnProperty(reportTagValue)) {
            $('.HarassmentModal-background').show();
            $('.HarassmentModal-background').append(modalContent[reportTagValue]);
            console.log("Gets appended")
        }
    });
    $('.reportBackgroundModal').on('click', '.reportTagsChip', function() {
        console.log('ThreateningModal')
        let reportTagValue = $(this).text().trim(); 
        if (modalContent.hasOwnProperty(reportTagValue)) {
            $('.ThreateningModal-background').show();
            $('.ThreateningModal-background').append(modalContent[reportTagValue]);
        }
    });
    $(document).on('click', '.back', function() {
        $(this).parent().parent().parent().remove();
        $(this).parent().parent().remove()
    })
    // Report Function

  
    $('.networkPost-headerRight').on('click', '.followBtn.regularMode', function() {
        $(this).toggleClass('followedBtn');
        if ($(this).hasClass('followedBtn')) {
            $(this).find('p').text('Following');
            console.log("Following 1st")
        } else {
            $(this).find('p').text('Follow');
            console.log("Not Following 2nd ")
        }
    })
    // Follow

    $('.networkPost-headerRight').on('click', '.connectToUserWrapper.connectRegularMode', function() {
        $(this).toggleClass('connectingBtn');
        if($(this).hasClass('connectingBtn')) {
            $(this).find('p').text('Pending...');
        } else {
            $(this).find('p').text('Connect')
        }
    })
    // Connect 
    $('.networkIconItemWrapper').on('click', '.networkIconItemRepost', function() {
        let repostMenu = $(this).find('.repostMenu');
        repostMenu.show();
    })
    $('.networkIconItemWrapper').on('click', '.repostButton', function() {
        console.log("repost")
        let post = $(this).closest('.networkPost'); // Get the parent network post element

    
        // Create a new post element using the same HTML structure
        let repostedPost = post.clone();
    
        // Update any necessary content or attributes
        // ...
    
        // Prepend the reposted post element to the appropriate location
        $('.networkItem-wrapper').prepend(repostedPost);



        // $('.networkItem-wrapper').prepend(`
        // <div class="networkPost networkArticle">
        //     <div class="networkRepost">
        //         <i class="fas repostIcon fa-retweet"></i>
        //         <a href="#"><p>George Simister</p></a>
        //     </div>
        //     <div class="networkContent">
        //         <div class="newtworkPost-header">
        //             <div class="networkPost-headerLeft">
        //                 <img class="networkProfile" src="" alt="">
        //                 <div class="networkBio">
        //                     <h4></h4>
        //                     <p> <span></span> | <span>${storedPost[i].userOccupationType}</span></p>
        //                 </div>
        //             </div>
        //             <div class="networkPost-headerRight">
        //                 <div class="followBtn regularMode">
        //                     <p>Follow</p>
        //                 </div>
        //                 <div class="connectToUserWrapper connectRegularMode">
        //                     <p class="connectToUser">Connect</p>
        //                     <i class="fas fa-plus"></i>
        //                 </div>
        //             </div>
        //         </div>

        //         <div class="networkPost-body">
        //             <p class="TimeAdded">${storedPost[i].postTime}</p>
        //             <h3>${storedPost[i].postContent[0].postTitle}</h3>
        //             <p>${storedPost[i].postContent[1].postParagraph}</p>
        //             ${storedPost[i].postContent[4].postImage.length > 0 ? `
        //                     <div class="ImagePostWrapper">
        //                         <div class="imagePost singleImagePost">
        //                             <img src="${storedPost[i].postContent[4].postImage}" alt="">
        //                         </div>
        //                     ${storedPost[i].postContent[5].postGallery.length > 0 ? `
        //                         <div class="ImageGalleryPost">
        //                             <div class="imagePlaylistItem">
        //                                 <img src="${storedPost[i].postContent[5].postGallery[0]}" alt="">
        //                             </div>
        //                             <div class="imagePlaylistItem">
        //                                 <img src="${storedPost[i].postContent[5].postGallery[1]}" alt="">
        //                             </div>
        //                             <div class="imagePlaylistItem">
        //                                 <img src="${storedPost[i].postContent[5].postGallery[2]}" alt="">
        //                             </div>
        //                         </div>
        //                     ` : ''}
        //                     </div>
        //             ` : ''}

        //             ${storedPost[i].postContent[2].postVideo[0].videoURL.length > 0 ? `
        //                 <div class="videoPostWrapper">
        //                     <div class="videoPost singleVideoPost">
        //                         <video class="video" poster="${storedPost[i].postContent[2].postVideo[0].videoThumbnail}" src="${storedPost[i].postContent[2].postVideo[0].videoURL}" ></video>
        //                     </div>
        //                     ${storedPost[i].postContent[3].postPlaylist[0].videoURL.length > 0 ? `
        //                         <div class="videoPlaylistPost">
        //                             ${storedPost[i].postContent[3].postPlaylist.slice(0,3).map(item => `
        //                                 <div class="videoPlaylistItem">
        //                                     <i class="fas fa-play playIcon"></i>
        //                                     <img src="${item.videoThumbnail}" alt="">
        //                                 </div>
        //                             `).join('')}
        //                         </div>
        //                     ` : ''}
        //                 </div>
        //             ` : ''}
        //             <div class="networkPost-footer">
        //                 <div class="networkTagsWrapper">

        //                 </div>
        //                 <div class="networkIconItemWrapper">
        //                     <div class="networkIconItem-right">
        //                         <div class="networkIconItem networkIconItemComment">
        //                             <i class="fas networkIcon commentIcon  fa-comments"></i>
        //                             <p>${storedPost[i].totalCommentsAndReplies}</p>
        //                         </div>
        //                         <div class="networkIconItem networkIconItemLike">
        //                             <div class="likeButtonWrapper">
        //                                 <i style="display: none;" class="fas fa-heart likedIcon"></i>
        //                                 <i class="far likeIcon fa-heart"></i>
        //                             </div>
        //                             <p class="likeCount">${storedPost[i].postRatings[0].postLikes}</p>
        //                         </div>
        //                         <div class="networkIconItem networkIconItemRepost">
        //                             <i class="fas networkIcon repostIcon fa-retweet"></i>
        //                             <p>${storedPost[i].postRatings[3].postRepost}</p>
        //                             <div class="repostMenu">
        //                                 <div class="repostMenuContent">
        //                                     <p class="repostButton">Repost</p>
        //                                     <p class="addToRepost">Add To Repost</p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="networkIconItem-left">
        //                         <i class="fas fa-ellipsis-v"></i>
        //                         <div class="postSettings-dropdownWrapper">
        //                             <div class="postSettings-dropdown">
        //                                 <span class="postSettingsDropdown-item">Follow ${storedPost[i].userName}</span>
        //                                 <span class="postSettingsDropdown-item">Connect with ${storedPost[i].userName}</span>
        //                                 <span class="postSettingsDropdown-item reportPost"><i class="fas reportIcon fa-flag"></i>Report</span>
        //                                 <span class="postSettingsDropdown-item blockUser">Not Interested In ${storedPost[i].userName}</span>
        //                                 <span class="postSettingsDropdown-item">Unfollow ${storedPost[i].userName}</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // `);
    })
    $('.networkIconItemWrapper').on('click', '.addToRepost', function() {
        $('.addToRepost-background').show();
    })
    // Repost a post


    let likeData = [];
    console.log(likeData)
    function likeToggle(likeButtonWrapper) {
        let pElement = likeButtonWrapper.next('.likeCount');
        let isLiked = likeButtonWrapper.find('.likedIcon').is(':visible');
        let currentValue = parseInt(pElement.text());
        console.log(likeButtonWrapper)

        if (isLiked) {
            likeButtonWrapper.find('.likedIcon').hide()
            likeButtonWrapper.find('.likeIcon').show()
            pElement.text(currentValue - 1);
        } else {
            likeButtonWrapper.find('.likedIcon').show()
            likeButtonWrapper.find('.likeIcon').hide()
            pElement.text(currentValue + 1);
        } 


        let postId = likeButtonWrapper.closest('.networkPost').index();

        // Check if the post is already in the likeData array
        let existingLikeData = likeData.find(data => data.postId === postId);
    
        if (existingLikeData) {
            // Update the existing data
            existingLikeData.likes = currentValue + (isLiked ? -1 : 1);
            existingLikeData.liked = !isLiked;
        } else {
            // Add new data for the post to the likeData array
            likeData.push({ postId: postId, likes: currentValue + (isLiked ? -1 : 1), liked: !isLiked });
        }
    
        console.log(likeData);
    }
    $('.networkIconItemWrapper').on('click', '.likeButtonWrapper', function() {
        let likeButtonWrapper = $(this);
        likeToggle(likeButtonWrapper);
    });
    // Like Function

    let functionPost = $('.networkItem-wrapper > .networkPost');
    function handleNetworkPostClick(i) {
        $('.enhancedPostWrapper').empty();
        $('.enhancedPostWrapper').show();
        let followStatusClass = functionPost.eq(i).find('.followBtn').hasClass('followedBtn') ? 'followedBtn' : '';
        let connectStatusClass = functionPost.eq(i).find('.connectToUserWrapper').hasClass('connectingBtn') ? 'connectingBtn' : '';
        let updatedGallery = [storedPost[i].postContent[4].postImage, ...storedPost[i].postContent[5].postGallery];
        $('.enhancedPostWrapper').append(`
            <div class="enhancedPost" data-post-id="${i}">
            <div class="closeEnhancedPost"><i class="fas fa-times"></i></div>
            <div class="enhancedNetworkPost">
                <div class="networkRepost">
                    <i class="fas repostIcon fa-retweet"></i>
                    <p>George Simister</p>
                </div>
                <div class="enhanced-newtworkPost-header">
                    <div class="networkPost-headerLeft">
                        <img class="networkProfile" src="${storedPost[i].userProfile}" alt="">
                        <div class="networkBio">
                            <h4>${storedPost[i].userName}</h4>
                            <p> <span>${storedPost[i].userOccupation}</span> | <span>${storedPost[i].userOccupationType}</span></p>
                        </div>
                    </div>
                    <div class="networkPost-headerRight">
                        <div class="followBtn enhancedMode ${followStatusClass}">
                            <p>${followStatusClass ? 'Following' : 'Follow'}</p>
                        </div>
                        <div class="connectToUserWrapper connectEnhancedMode ${connectStatusClass}">
                            <p class="connectToUser">${connectStatusClass ? 'Pending...' : 'Connect'}</p>
                            <i class="fas fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div class="enhanced-networkPost-body">
                    <div class="netowrkTextBlock">
                        <p class="TimeAdded">${storedPost[i].postTime}</p>
                        <h3>${storedPost[i].postContent[0].postTitle}</h3>
                        <p>${storedPost[i].postContent[1].postParagraph}</p>
                    </div>
                    <div class="enhancedImagePostWrapper">

                        ${storedPost[i].postContent[4].postImage.length > 0 ? `
                            <div class="enhancedImage">
                                <img src="${storedPost[i].postContent[4].postImage}" alt="">
                            </div>
                            

                            ${updatedGallery.length > 0 ? `
                            <div class="enhancedGalleryWrapper">
                                ${updatedGallery.map((data, index) => `
                                    <div class="enhancedGalleryItem">
                                        <img src="${data}" alt="">
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                        ` : ''}

                        ${storedPost[i].postContent[2].postVideo[0].videoURL.length > 0 ? `
                            <div class="enhancedVideo">
                                <video class="video" poster="${storedPost[i].postContent[2].postVideo[0].videoThumbnail}" src="${storedPost[i].postContent[2].postVideo[0].videoURL}" controls>
                                </video>
                            </div>
                            ${storedPost[i].postContent[3].postPlaylist[0].videoURL.length > 0 ? `
                                <div class="enhancedVideoPlaylistPost">
                                    ${storedPost[i].postContent[3].postPlaylist.map(item => `
                                        <div class="enhancedPlaylistItem">
                                            <i class="fas fa-play playIcon"></i>
                                            <img src="${item.videoThumbnail}" alt="">
                                            <source src="${item.videoURL}">
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        ` : ''}
                    </div>
                </div>
                <div class="networkPost-footer">
                    <div class="networkTagsWrapper">
                    </div>
                    <div class="networkIconItemWrapper enhancedFooter">
                        <div class="networkIconItem-right">
                            <div class="networkIconItem networkIconItemComment">
                                <i class="fas networkIcon commentIcon  fa-comments"></i>
                                <p>${storedPost[i].totalCommentsAndReplies}</p>
                            </div>
                            <div class="networkIconItem enhancedNetworkIconItemLike">
                                <div class="enhancedlikeButtonWrapper">
                                    <i style="display: none;" class="fas fa-heart likedIcon"></i>
                                    <i class="far likeIcon fa-heart"></i>
                                </div>
                                <p>${storedPost[i].postRatings[0].postLikes}</p>
                            </div>
                            <div class="networkIconItem networkIconItemRepost">
                                <i class="fas networkIcon repostIcon fa-retweet"></i>
                                <p>123</p>
                            </div>
                        </div>
                        <div class="reportButton">
                            <i class="fas fa-flag"></i>
                            <p>Report</p>
                            <div class="postSettings-dropdownWrapper">
                                <div class="postSettings-dropdown">
                                    <span class="postSettingsDropdown-item">Follow ${storedPost[i].userName}</span>
                                    <span class="postSettingsDropdown-item">Connect with ${storedPost[i].userName}</span>
                                    <span class="postSettingsDropdown-item reportPost"><i class="fas reportIcon fa-flag"></i>Report</span>
                                    <span class="postSettingsDropdown-item blockUser">Not Interested In ${storedPost[i].userName}</span>
                                    <span class="postSettingsDropdown-item">Unfollow ${storedPost[i].userName}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="commentWrapper">
                <div class="comment-header">
                    <div class="createComment-wrapper">
                        <div class="createComment-profile">
                            <img class="userProfileImage" src="" alt="">
                        </div>
                        <input type="text" class="createCommentInput" placeholder="Create Comment...">
                    </div>
                    <div class="commentHeader-content">
                        <div class="commentHeader-right">
                        <p><span class="commentValue">${storedPost[i].totalCommentsAndReplies} ${storedPost[i].totalCommentsAndReplies === 1 ? 'Comment' : 'Comments'}</span></p>
                        </div>
                    </div>
                </div>
             
                    ${storedPost[i].postRatings[1].postComments.length > 0 ? `
                        <div class="comment-body">
                            ${storedPost[i].postRatings[1].postComments.map(comment => `
                                <div class="commentItemWrapper">
                                    <div class="commentItem">
                                        <div class="commentItemProfile">
                                            <img src="${comment.commentProfile}" alt="">
                                        </div>
                                        <div class="commentItem-right">
                                            <div class="commentItemHeader">
                                                <h4>${comment.user}</h4>
                                                <p>Back-end | <span>Part-time</span></p>
                                            </div>
                                            <div class="commentItemBody">
                                            <p>${comment.text}</p>
                                            </div>
                                            <div class="commentItemFooter">
                                                <div class="commentItemFooter-top">
                                                    <div class="rateCommentLike">
                                                        <p>142</p>
                                                        <i class="far fa-thumbs-up"></i>
                                                    </div>
                                                    <div class="rateCommentUnlike">
                                                        <i class="far fa-thumbs-down"></i>
                                                    </div>
                                                </div>
                                                <div class="replyButton">
                                                    <p >${comment.replies.length} ${comment.replies.length === 1 ? 'Reply' : 'Replies'}</p>
                                                </div>
                                            </div>
                                            <div class="replyInputWrapper">
                                            </div>
                                        </div>
                                    </div>
                                    ${comment.replies.length > 0 ? `
                                        <div class="replyWrapper">
                                        ${comment.replies.map(reply => `
                                            <div class="replyCommentItem">
                                                <div class="replyCommentFlex">
                                                    <div class="commentItemProfileReply">
                                                        <img src="${reply.replyProfile}" alt="">
                                                    </div>
                                                    <div class="commentItem-right">
                                                        <div class="commentItemHeader">
                                                            <h4>${reply.user}</h4>
                                                            <p>Back-end | <span>Part-time</span></p>
                                                        </div>
                                                        <div class="commentItemBody">
                                                            <p>${reply.text}</p>
                                                        </div>
                                                        <div class="commentItemFooter">
                                                            <div class="commentItemFooter-top">
                                                                <div class="rateCommentLike">
                                                                    <p>142</p>
                                                                    <i class="far fa-thumbs-up"></i>
                                                                </div>
                                                                <div class="rateCommentUnlike">
                                                                    <i class="far fa-thumbs-down"></i>
                                                                </div>
                                                            </div>
                                                            <div class="subReplyButton">
                                                                <p>Reply</p>
                                                            </div>
                                                            <div class="subReplyInputWrapper">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="replyToReplyWrapper">
                                                </div>
                                            </div>
                                        `).join('')}
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
            </div>
            </div>
        `);
        getUserImage()

        $('.networkPost-headerRight').on('click', '.followBtn.enhancedMode', function() {
            let followButton = $(this);
            let postId = followButton.closest('.enhancedPost').data('post-id');

            // Toggle the class in both regular and enhanced mode
            followButton.toggleClass('followedBtn');
            let isFollowed = followButton.hasClass('followedBtn');
        
            // Update the button text in the regular mode
            followButton.find('p').text(isFollowed ? 'Following' : 'Follow');
        
            // Update the button text in the enhanced mode
            let enhancedFollowButton = $('.enhancedPostWrapper').find(`[data-post-id="${postId}"] .followBtn`);
            enhancedFollowButton.toggleClass('followedBtn', isFollowed);
            enhancedFollowButton.find('p').text(isFollowed ? 'Following' : 'Follow');

            functionPost.eq(i).find('.followBtn').toggleClass('followedBtn');
            if (functionPost.eq(i).find('.followBtn').hasClass('followedBtn')) {
                functionPost.eq(i).find('.followBtn p').text('Following');
                console.log("Following")
            } else {
                functionPost.eq(i).find('.followBtn p').text('Follow');
                console.log("Not Following")
            }
        });
        // Follow in enhance
        $('.networkPost-headerRight').on('click', '.connectToUserWrapper.connectEnhancedMode', function() {
            let connectButton = $(this);
            let postId = connectButton.closest('.enhancedPost').data('post-id');

            connectButton.toggleClass('connectingBtn');
            let isConnected = connectButton.hasClass('connectingBtn');

            connectButton.find('p').text(isConnected ? 'Pending...' : 'Connect');

            let enhacedConnectButton = $('.enhancedPostWrapper').find(`[data-post-id="${postId}"] .connectToUserWrapper`)
            enhacedConnectButton.toggleClass('connectingBtn', isConnected);
            enhacedConnectButton.find('p').text(isConnected ? 'Pending...' : 'Connect');

            functionPost.eq(i).find('.connectToUserWrapper').toggleClass('connectingBtn');
            if (functionPost.eq(i).find('.connectToUserWrapper').hasClass('connectingBtn')) {
                functionPost.eq(i).find('.connectToUserWrapper p').text('Pending...');
                console.log("connecting")
            } else {
                functionPost.eq(i).find('.connectToUserWrapper p').text('Connect');
                console.log("not connecting")
            }
        })
        // Connect in enhance

        $('.enhancedGalleryItem').off('click');
        // Remove previous click event handlers from .enhancedGalleryItem
        $('.enhancedGalleryItem').on('click', function () {
            $('.enhancedGalleryItem').removeClass('activeGalleryItem');
            $(this).addClass('activeGalleryItem');
    
            let imageSrc = $(this).find('img').attr('src');
            $('.enhancedImage img').attr('src', imageSrc);
        });
        // Select and show Image Gallery Item
        $(".enhancedPlaylistItem").on('click', function() {
            $('.enhancedPlaylistItem').removeClass('activeGalleryItem');
            $(this).addClass('activeGalleryItem')
            let videoSrc = $(this).find('source').attr('src');
            $('.enhancedVideo video').attr('src', videoSrc)
            let videoThumbnail = $(this).find('img').attr('src');
            $('.enhancedVideo video').attr('poster', videoThumbnail)
        })
        // Select and show Video Gallery Item
    }
    $(document).on('click', '.closeEnhancedPost', function () {
        $('.enhancedPostWrapper').hide();
    });
    functionPost.each((i, post) => {
        $(post).on('click', () => {
            handleNetworkPostClick(i);
        });
    });

    $(document).on('click', '.enhancedPostWrapper', function () {
        $(this).hide();
    });
    $(document).on('click', '.enhancedPost', function(e) {
        e.stopPropagation();
    });
    // Click on the post.




    $(document).on('click', '.replyButton', function() {
        // let commentItem = $(this).parents('.commentItem');
        let commentItem = $(this).closest('.commentItem');
        let replyInputWrapper = commentItem.find('.replyInputWrapper');
        replyInputWrapper.empty();
        replyInputWrapper.append(`
          <div class="replyImage">
            <img class="userProfileImage" src="" alt="">
          </div>
          <input class="replyInput" type="text" placeholder="Add Reply...">
        `);
        replyInputWrapper.show();
        getUserImage()
    });
    $(document).on('click', '.subReplyButton', function(event) {
        event.stopPropagation();
        let subCommentItem = $(this).closest('.replyCommentItem');
        let subReplyInputWrapper = subCommentItem.find('.subReplyInputWrapper');
        subReplyInputWrapper.empty();
        subReplyInputWrapper.append(`
            <div class="replyImage">
                <img class="userProfileImage" src="" alt="">
            </div>
            <input class="replyToReplyInput" type="text" placeholder="Add Reply...">
        `);
        subReplyInputWrapper.show();
        getUserImage();
    })

    $(document).keyup('.createCommentInput', function(e) {
        let commentVal = $('.createCommentInput').val();
        if(e.which === 13 && commentVal !== '') {
            $('.comment-body').prepend(`
            <div class="commentItemWrapper">
                <div class="commentItem">
                    <div class="commentItemProfile">
                        <img class="userProfileImage">
                    </div>
                    <div class="commentItem-right">
                        <div class="commentItemHeader">
                            <h4 class="userName"></h4>
                            <p>Back-end | <span>Part-time</span></p>
                        </div>
                        <div class="commentItemBody">
                            <p>${commentVal}</p>
                        </div>
                        <div class="commentItemFooter">
                            <div class="commentItemFooter-top">
                                <div class="rateCommentLike">
                                    <p>142</p>
                                    <i class="far fa-thumbs-up"></i>
                                </div>
                                <div class="rateCommentUnlike">
                                    <i class="far fa-thumbs-down"></i>
                                </div>
                            </div>
                            <div class="replyButton">
                                <p>Reply</p>
                            </div>

                        </div>
                        <div class="replyInputWrapper"></div>
                    </div>
       
                </div>
            </div>
            `)
        $('.createCommentInput').val('')
        }
        getUserImage();
        getUserName()
    })
    // Create comments
    $(document).on('keyup', '.replyInput', function(e) {
        if (e.which === 13) {
          let replyInput = $(this); // Get the specific replyInput element being used
          let replyVal = replyInput.val();
          if (replyVal !== '') {
            let commentItemWrapper = replyInput.closest('.commentItemWrapper');
            let replyWrapper = commentItemWrapper.find('.replyWrapper');
            if (replyWrapper.length === 0) {
              commentItemWrapper.append(`
                <div class="replyWrapper">
                </div>
              `);
              replyWrapper = commentItemWrapper.find('.replyWrapper');
            }
            replyWrapper.prepend(`
            <div class="replyCommentItem">
                <div class="replyCommentFlex">
                        <div class="commentItemProfileReply">
                            <img class="userProfileImage" src="" alt="">
                        </div>
                        <div class="commentItem-right">
                            <div class="commentItemHeader">
                                <h4 class="userName"></h4>
                                <p>Back-end | <span>Part-time</span></p>
                            </div>
                            <div class="commentItemBody">
                                <p>${replyVal}</p>
                            </div>
                            <div class="commentItemFooter">
                                <div class="commentItemFooter-top">
                                    <div class="rateCommentLike">
                                        <p>142</p>
                                        <i class="far fa-thumbs-up"></i>
                                    </div>
                                    <div class="rateCommentUnlike">
                                        <i class="far fa-thumbs-down"></i>
                                    </div>
                                </div>
                                <div class="subReplyButton">
                                    <p>Reply</p>
                                </div>
                                <div class="subReplyInputWrapper">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="replyToReplyWrapper"></div>
            </div>
            `);
            getUserImage();
            getUserName();
            replyInput.val('');
            $('.replyInputWrapper').empty()
          }
        }
    });
    // Reply to comment
    $(document).on('keyup', '.replyToReplyInput', function(e) {
        if (e.which === 13) {
            let subReplyInput = $(this);
            let subReplyVal = subReplyInput.val();
            if (subReplyVal !== '') {
                let subCommentItem = $(this).closest('.replyCommentItem');
                let replyToReplyWrapper = subCommentItem.find('.replyToReplyWrapper');
                replyToReplyWrapper.append(`
                <div class="replyCommentItem">
                    <div class="replyCommentFlex">
                        <div class="commentItemProfileReply">
                            <img class="userProfileImage" src="" alt="">
                        </div>
                        <div class="commentItem-right">
                            <div class="commentItemHeader">
                                <h4 class="userName"></h4>
                                <p>Back-end | <span>Part-time</span></p>
                            </div>
                            <div class="commentItemBody">
                                <p>${subReplyVal}</p>
                            </div>
                            <div class="commentItemFooter">
                                <div class="commentItemFooter-top">
                                    <div class="rateCommentLike">
                                        <p>142</p>
                                        <i class="far fa-thumbs-up"></i>
                                    </div>
                                    <div class="rateCommentUnlike">
                                        <i class="far fa-thumbs-down"></i>
                                    </div>
                                </div>
                                <div class="subReplyButton">
                                    <p>Reply</p>
                                </div>
                                <div class="subReplyInputWrapper">
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="replyToReplyWrapper">
                    </div>
                </div>
                `);
                getUserImage();
                getUserName();
                subReplyInput.val('');
                $('.subReplyInputWrapper').empty()
            }
        }
    });


    $('.networkIconItemComment').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        let post = $(this).closest('.networkPost');
        let postIndex = post.index();
        handleNetworkPostClick(postIndex);
    })
    // CLick on comment to open enhanced mode



    function openBlockUser(postIndex) {
        $('.blockUserBackgroundModal').empty(); // Remove any previously appended modals
        $('.blockUserBackgroundModal').show();
        $('.blockUserBackgroundModal').append(`
            <div class="blockUserModal">
                <div class="networkPost-headerCenter">
                    <img class="networkProfile" src="${storedPost[postIndex].userProfile}" alt="">
                    <div class="networkBio">
                        <h4>${storedPost[postIndex].userName}</h4>
                        <p> <span>${storedPost[postIndex].userOccupation}</span> | <span>${storedPost[postIndex].userOccupationType}</span></p>
                    </div>
                </div>
                <div class="blockUserModal-body">
                    <p>Are you sure you want to block ${storedPost[postIndex].userName}?</p>
                </div>
                <div class="blockUserModal-footer">
                    <span class="userBlock">Cancel</span>
                    <span class="userBlock blockUserButton" data-post-index="${postIndex}">Block</span>
                </div>
            </div>
        `);
    
        $('.blockUserModal .userBlock').on('click', function() {
            $('.blockUserBackgroundModal').hide();
            $('.blockUserModal').remove();
        });
    }
    // Click event handler for .blockUserButton
    $(document).on('click', '.blockUserButton', function(e) {
        e.preventDefault();
        e.stopPropagation();
        let postIndex = $(this).data('post-index');
        handleBlockUser(postIndex);
    });
    // Function to handle blocking user
    function handleBlockUser(postIndex) {
        $('.networkPost').eq(postIndex).find('.networkPost-body').hide();
        $('.networkPost').eq(postIndex).find('.networkPost-footer').hide();
    }
    $('.blockUser').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        let postIndex = $(this).closest('.networkPost').index();
        openBlockUser(postIndex);
    });
    // Block User


    function filterPosts() {
        console.log('filter tags')
        let selectedTags = [];
        console.log(selectedTags)
        $('.filterItems:checked').each(function() {
            selectedTags.push($(this).val());
            console.log("value being pushed into the array")
        });
      
        // Show all networkPost elements
        // $('.networkPost').show();

        if (selectedTags.length > 0) {
            console.log("not sure")
          $('.networkPost').each(function() {
            let postTags = $(this).data('tags').split(',');
            let shouldHide = !selectedTags.some(tag => postTags.includes(tag));
            if (shouldHide) {
              $(this).hide();
            }
          });
        }
    }
    $('.filterWrapper').on('click', '.filterItems', function () {
        filterPosts();
    });



    $('.postSettingsWrapper-slider ').hide()
    $('.postSettingsItems').on('click', function() {
        $('.postSettingsWrapper-slider ').show()
        let targetLeft = $(this).position().left;
        let targetWidth = $(this).outerWidth();

        $('.postSettingsWrapper-slider').css({
            transform: `translateX(${targetLeft}px)`,
            width: `${targetWidth}px`
        });

        // $('.postSettingsItems').removeClass('active');
        // $(this).addClass('active')
    })
    // Filter animation

    function sortArticlesByLikes() {
        let networkArticles = $('.networkItem-wrapper .networkArticle').toArray();
        networkArticles.sort((a, b) => {
          let likesA = parseInt($(a).find('.networkIconItemLike p').text().trim());
          let likesB = parseInt($(b).find('.networkIconItemLike p').text().trim());
          return likesB - likesA;
        });
        let wrapper = $('<div>');
        networkArticles.forEach((article) => {
          wrapper.append(article);
        });
        $('.networkItem-wrapper').empty().append(wrapper.children());
    }
    $(document).on('click', '.hot', function() {
        sortArticlesByLikes();
    });

    function followingFilter() {
        $('.networkPost').hide();
        $('.networkPost .networkPost-headerRight .followedBtn').closest('.networkPost').show();
    }
    $('.followingFilter').on('click', followingFilter)

    function renderPosts(posts) {
        // Clear the existing posts in the UI
        $('.networkItem-wrapper').empty();
    
        // Loop through the sorted posts and render each one
        for (const post of posts) {
            // Render the post using the post data
            const postElement = `<div class="networkPost">${post.userName} - ${post.creationDate}</div>`;
            $('.networkItem-wrapper').append(postElement);
        }
    }
    
    function sortNewestToOldest() {
        storedPost.sort((a, b) => b.creationDate - a.creationDate);
        renderPosts(storedPost); // Re-render the posts with the sorted order

    }
    $('.new').on('click', sortNewestToOldest);

    function connectFilter() {
        $('.networkPost').hide();
        $('.networkPost .networkPost-headerRight .connectingBtn').closest('.networkPost').show();
    }
    $('.connectedFilter').on('click', connectFilter)
})