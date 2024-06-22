$(document).ready(function() {
    let navProfileImg = $('div.nav-profile img');
    // Get the src attribute of the image
    let srcAttr = navProfileImg.attr('src');
    // Set the src attribute of another img tag
    $('.accountProfile, .profilePreview').attr('src', srcAttr);
    // Gets Nav image profile
    let myString = $('.nav-name').text();
    $('.userRealName').text(myString);
    // Get nav user name. 

    function errorAnimation() {
        $('.error-message').removeClass('addAnimationBack');
        $('.error-message').addClass('addAnimation');
    }
    function errorAnimationBack() {
        $('.error-message').removeClass('addAnimation');
        $('.error-message').addClass('addAnimationBack');
    }

    var regexPatterns = {
        fullname: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        username: /^[a-zA-Z0-9]{4,16}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
        city: /^[a-zA-Z\s-]+$/,
        country: /^[a-zA-Z\s-]+$/,

        schoolName: /^[a-zA-Z\s']+$/u,
        major: /^[a-zA-Z\s-]{2,}$/u,
        academicAchievements: /^[a-zA-Z\s.,?!:'"-]{2,}$/u,
        degree: /^[a-zA-Z\s]{2,}$/u,

        bio: /^.{0,250}$/,

        currentPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        // password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        school: /^[a-zA-Z\s]{2,}$/
    };
    var errorMessages = {
        fullname: 'Please enter a valid name.',
        username: 'Please enter a valid username.',
        email: 'Please enter a valid email.',
        city: 'Please enter a valid city.',
        bio: 'Bio must conatao to a maximum of 250 characters.',
        currentPassword: 'This does not match your current password.'
    }
    function validateInput(inputField, regexPattern) {
        var userInput = inputField.value;
        var isValid = regexPattern.test(userInput);
        var fieldName = $(inputField).data('field');
        var errorMessageElement = $('.error-message[data-error-for="' + fieldName + '"]');
    
        if (isValid) {
            errorAnimationBack()
            $(inputField).removeClass('inputError').addClass('valid');
            errorMessageElement.text('');
        } else {
            $(inputField).removeClass('valid').addClass('inputError');
            errorAnimation()
            errorMessageElement.text(errorMessages[fieldName]);
        }
    }
    // Event handler for input field blur


    $('.inputDesign').on('blur', function() {
        var inputField = this;
        var fieldName = $(inputField).data('field');
        var regexPattern = regexPatterns[fieldName];
    
        if (regexPattern) {
            validateInput(inputField, regexPattern);
        }
    });
      
    $('.main-searchbar').click(function(){
        $('.main-nav-drop').slideDown(500);
    });
    $('body').click(function (event) {
        if(!$(event.target).closest('.main-searchbar').length && !$(event.target).is('.main-nav-drop')) {
          $(".main-nav-drop").slideUp();
        }     
    });

    $('.open-nav-job').click(function() {
        $('.main-searchbar-wrapper').slideUp(300)
        $('.jobs-searchbar-wrapper').slideDown(300)
    })
    $('.open-nav-channel').click(function() {
        $('.main-searchbar-wrapper').slideUp(300)
        $('.channels-search-wrapper').slideDown(300)
    })
    $('.open-nav-similar').click(function() {
        $('.main-searchbar-wrapper').slideUp(300)
        $('.similar-searchbar-wrapper').slideDown(300)
    })

    $('.open-jobs').click(function() {
        $('.searchbar-wrapper').slideUp(300)
        $('.jobs-searchbar-wrapper').slideDown(300)
    })
    $('.open-channels').click(function() {
        $('.searchbar-wrapper').slideUp(300)
        $('.channels-search-wrapper').slideDown(300)
    })
    $('.open-content').click(function() {
        $('.searchbar-wrapper').slideUp(300)
        $('.similar-searchbar-wrapper').slideDown(300)
    })
    // main nav dropdownd

    $('.job-searchbar').click(function(){
        $('.job-nav-drop').slideDown(500);
    });
    $('body').click(function (event) {
        if(!$(event.target).closest('.job-searchbar').length && !$(event.target).is('.job-nav-drop')) {
          $(".job-nav-drop").slideUp();
        }     
     });

     $('.channels-searchbar').click(function(){
        $('.channels-nav-drop').slideDown(500);
    });
    $('body').click(function (event) {
        if(!$(event.target).closest('.channels-searchbar').length && !$(event.target).is('.channels-nav-drop')) {
          $(".channels-nav-drop").slideUp();
        }     
     });
     $('.similar-nav-searchbar').click(function(){
        $('.similar-nav-drop').slideDown(500);
    });
    $('body').click(function (event) {
        if(!$(event.target).closest('.similar-nav-searchbar').length && !$(event.target).is('.similar-nav-drop')) {
          $(".similar-nav-drop").slideUp();
        }     
    });

    // Sub nav dropdown functions
    
    // $(".nav_profile_drop").click(function(e){
    //     $(".profile_dropdown").slideDown(600);
    //     e.stopPropagation();
    // });
    // $(".profile_dropdown").click(function(e){
    //     e.stopPropagation();
    // });
    // $(document).click(function(){
    //     $(".profile_dropdown").slideUp(600);
    // });
    // // Nav dropdown
    
    $('.settingsModal').hide();
    $('.profileModal').show();

    $('.profileBtn').addClass('active')


    $('.profileBtn').on('click', function() {
        $('.profileBtn').removeClass('.settingOpt-btn').addClass('.settingOpt-btn-hover')
        $('.settingsModal').hide();
        $('.profileModal').show();
    })
    $('.educationBtn').on('click', function() {
        $('.educationBtn').removeClass('.settingOpt-btn').addClass('.settingOpt-btn-hover')
        $('.settingsModal').hide();
        $('.educationModal').show();
    })
    $('.resumeBtn').on('click', function() {
        $('.settingsModal').hide();
        $('.resumeModal').show();
    })
    $('.socialBtn').on('click', function() {
        $('.settingsModal').hide();
        $('.socialModal').show();
    })
    $('.walletBtn').on('click', function() {
        $('.settingsModal').hide();
        $('.walletModal').show();
    })
    $('.notificationBtn').on('click', function() {
        $('.settingsModal').hide();
        $('.notificationsModal').show();
    })
    $('.messageBtn').on('click', function() {
        $('.settingsModal').hide();
        $('.messagingModal').show();
    })
    $('.passwordBtn').on('click', function() {
        $('.settingsModal').hide();
        $('.passwordModal').show();
    })
    $('.accountBtn').on('click', function() {
        $('.settingsModal').hide();
        $('.accountModal').show();
    })
    // Buttons that navigate the page
    
    
    $('.settingOpt').click(function() {
        // Remove the 'active' class from all buttons
        $('.settingOpt').removeClass('active');
        
        // Add the 'active' class to the clicked button
        $(this).addClass('active');
    });
    // Button Styles
    

    $(document).on('change', '#uploadUserProfile', function() {
        let file = this.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        // On file selection, read the file and set the image src for all 'newProfile' img tags
        reader.onload = function(e) {
            let img_src = e.target.result;
            $('.newProfile').attr('src', img_src);
        }
    });
    // Upload Profile

    $(document).on('change', '#read-bannerImageUrl', function() {
        let file = this.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        // On file selection, read the file and set the image src for all 'newProfile' img tags
        reader.onload = function(e) {
            let img_src = e.target.result;
            $('#uploadBannerImage').attr('src', img_src);
        }
    });
    // Upload Profile

    
    let fullTimeCheckBox = $('#fullTime')
    $(fullTimeCheckBox).on('click', function(e) {
        if(e.target.checked) {
            $('.hireType-body').show(300)
        } else {
            $('.hireType-body').hide(300)
        }
    })
    
    let freelanceCheckBox = $('#freelance')
    $(freelanceCheckBox).on('click', function(e) {
        if(e.target.checked) {
            $('.freelancehireType-body').show(300)
        } else {
            $('.freelancehireType-body').hide(300)
        }
    })
    
    let contractCheckBox = $('#contract')
    $(contractCheckBox).on('click', function(e) {
        if(e.target.checked) {
            $('.contracthireType-body').show(300)
        } else {
            $('.contracthireType-body').hide(300)
        }
    })
    // Checkbox button functions. 
    
    
    
    $('#schoolName').on('click', function(e) {
        $('.dropDown-schoolName').slideDown(300)
        e.stopPropagation();
    })
    // Click on to find school. 
    $.getJSON('https://gist.githubusercontent.com/hakimelek/147f364c449104ba66da9a3baca9d0c0/raw/7e914fc578d3176f1f752f571f5b3761ea2b22fa/us_institutions.json', function(data) {
        $.each(data, function(key, value) {
            $('.dropDown-schoolName').append($('<p class="schoolName-items"></p>').val(value.institution).html(value.institution))
        })
    })
    // List of school API
    $('#schoolName').on('keyup', function() {
        let findSchool = $(this).val().toLowerCase();
    
        $('.dropDown-schoolName .schoolName-items').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(findSchool) > - 1)
        })
    })
    $(document).on('click', '.schoolName-items', function(e) {
        e.stopPropagation();
        $('.schoolWrapper').removeClass('inputError').addClass('valid');
        let selectedSchool = $(this).text();
        $('#schoolName').val(selectedSchool);
        $('.dropDown-schoolName').slideUp(300)
    });
    $(document).click(function(){
        $('.dropDown-schoolName').slideUp(300)
    });
    // Search the school. 
    $('#currentlySchool').on('change', function() {
        console.log($(this).prop('checked'));
        if($(this).is(':checked')) {
            $('.currentlyInSchool-wrapper').show(300);
            $('.completedSchool-wrapper').hide(300);
            $('#completedSchool').prop('checked', false);
        } else {
            $('.currentlyInSchool-wrapper').hide(300);
        }
    })
    $('#completedSchool').on('change', function() {
        console.log($(this).prop('checked'));
        if($(this).is(':checked')) {
            $('.completedSchool-wrapper').show(300);
            $('.currentlyInSchool-wrapper').hide(300);
            $('#currentlySchool').prop('checked', false);
        } else {
            $('.completedSchool-wrapper').hide(300);
        }
    })
    // education check box


    $('.degreeInputField').on('click', function(e) {
        $('.dropDown-degree').slideDown(300)
        e.stopPropagation();
    })
    $(document).on('click', '.degree-items', function(e) {
        e.stopPropagation();
        $('.degreeInputField').removeClass('inputError').addClass('valid');
        let selectedDegree = $(this).text();
        $('.degreeInputField > input').val(selectedDegree)
        $('.dropDown-degree').slideUp(300)
    })
    $(document).click(function(){
        $('.dropDown-degree').slideUp(300)
    });
    // Degree
    // Education Functions

    $('.careerFieldInputField').on('click', function(e) {
        $('.dropDown-careerField').slideDown(300)
        e.stopPropagation();
    })
    $(document).on('click', '.careerField-items', function(e) {
        e.stopPropagation();
        $('.careerFieldInputField').removeClass('inputError').addClass('valid');
        let selectedCareer = $(this).text();
        $('.careerFieldInputField > input').val(selectedCareer)
        $('.dropDown-careerField').slideUp(300)
    })
    $(document).click(function(){
        $('.dropDown-careerField').slideUp(300)
    });
    // Career Field

    $('.skillInput').keyup(function(event) {
        let addSkill = $('.skillInput').val();
        if(event.which === 13 && addSkill !== '') {
            $('.skill-body').append(`
                <div class="skill-item">
                    <span class="close-skill">
                        <i class="fas fa-times"></i>
                    </span>
                    <p>${addSkill}</p>
                </div>
            `)
            $('.skillInput').val('');
        }
    
        $('.close-skill').on('click', function(e) {
            let deleteSkill = $(e.target).parent().parent();
            $(deleteSkill).remove()
        })
    })
    $('#jobName').on('click', function(e) {
        $('.dropDown-jobName').slideDown(300);
        e.stopPropagation()
    })
    $.getJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/occupations.json', function(jobData) {
        $.each(jobData.occupations, function(key, value) {
            $('.dropDown-jobName').append($('<p class="jobName-item"></p>').text(value));
          });
    })
    $('#jobName').on('keyup', function() {
        let findJob = $(this).val().toLowerCase();

        $('.dropDown-jobName .jobName-item').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(findJob) > - 1)
        })
    })
    $(document).on('click', '.jobName-item', function(e) {
        e.stopPropagation();
        let selectedJob = $(this).text();
        $('#jobName').val(selectedJob);

        $('.newJobTitle').text(selectedJob)

        $('.jobNameField').removeClass('inputError').addClass('valid');
        $('.dropDown-jobName').slideUp(300);
    })
    $(document).on('click', function() {
        $('.dropDown-jobName').slideUp(300);
    })
    // Job Search
    // Resume function
    $('#websiteInput').keyup(function(event) {
        let link = $('#websiteInput').val();
        if (event.which === 13 && link !== '') {
          $('.social-icon-wrapper').append(`
            <div class="socialIcon-item webSocial">
                <span class="deleteIcon deleteWebSocial">
                    <i class="fas fa-times"></i>
                </span>
                <a href="${link}">
                    <div class="socialIcon-content">
                    <i class="fa-solid socialIcon fa-globe"></i>
                    <p>Website</p>
                    </div>
                </a>
            </div>
          `);
          $('#websiteInput').val('');
        }
    });
    // Personal Website
    $('#behanceInput').keyup(function(event) {
        let link = $('#behanceInput').val();
        if(event.which === 13 && link !== '') {
            $('.social-icon-wrapper').append(`
                <div class="socialIcon-item behanceSocial">
                    <span class="deleteIcon deleteBehanceSocial">
                        <i class="fas fa-times"></i>
                    </span>
                    <a href="${link}">
                        <div class="socialIcon-content">
                            <i class="fa-brands socialIcon fa-behance"></i>
                            <p>Behance</p>
                        </div>
                    </a>
                </div>
            `)
            $('#behanceInput').val('');
        }
    })
    // Behance
    $('#pinterestInput').keyup(function(event) {
        let link = $('#pinterestInput').val();
        if(event.which === 13 && link !== '') {
            $('.social-icon-wrapper').append(`
                <div class="socialIcon-item pinterestSocial">
                    <span class="deleteIcon deletePinterestSocial">
                        <i class="fas fa-times"></i>
                    </span>
                    <a href="${link}">
                        <div class="socialIcon-content">
                        <i class="fab socialIcon fa-pinterest"></i>
                            <p>Pinterest</p>
                        </div>
                    </a>
                </div>
            `)
            $('#pinterestInput').val('');
        }
    })
    // Pinterest
    $('#dribbbleInput').keyup(function(event) {
        let link = $('#dribbbleInput').val();
        if(event.which === 13 && link !== '') {
            $('.social-icon-wrapper').append(`
                <div class="socialIcon-item dribbbleSocial">
                    <span class="deleteIcon deleteDribbbleSocial">
                        <i class="fas fa-times"></i>
                    </span>
                    <a href="${link}">
                        <div class="socialIcon-content">
                        <i class="fab socialIcon fa-dribbble"></i>
                            <p>Dribbble</p>
                        </div>
                    </a>
                </div>
            `)
            $('#dribbbleInput').val('');
        }
    })
    // Dribbble
    $('#instagramInput').keyup(function(event) {
        let link = $('#instagramInput').val();
        if(event.which === 13 && link !== '') {
            $('.social-icon-wrapper').append(`
                <div class="socialIcon-item instagramSocial">
                    <span class="deleteIcon deleteInstagramSocial">
                        <i class="fas fa-times"></i>
                    </span>
                    <a href="${link}">
                        <div class="socialIcon-content">
                        <i class="fab socialIcon fa-instagram"></i>
                            <p>Instagram</p>
                        </div>
                    </a>
                </div>
            `)
            $('#instagramInput').val('');
        }
    })
    // Instagram
    $('#facebookInput').keyup(function(event) {
        let link = $('#facebookInput').val();
        if(event.which === 13 && link !== '') {
            $('.social-icon-wrapper').append(`
                <div class="socialIcon-item facebookSocial">
                    <span class="deleteIcon deleteFacebookSocial">
                        <i class="fas fa-times"></i>
                    </span>
                    <a href="${link}">
                        <div class="socialIcon-content">
                        <i class="fab socialIcon fa-facebook"></i>
                            <p>Facebook</p>
                        </div>
                    </a>
                </div>
            `)
            $('#facebookInput').val('');
        }
    })
    // Facebook
    $('#twitterInput').keyup(function(event) {
        let link = $('#twitterInput').val();
        if(event.which === 13 && link !== '') {
            $('.social-icon-wrapper').append(`
            <div class="socialIcon-item twitterSocial">
                <span class="deleteIcon deleteTwitterSocial">
                    <i class="fas fa-times"></i>
                </span>
                <a href="${link}">
                    <div class="socialIcon-content">
                        <i class="fab socialIcon fa-twitter"></i>
                        <p>Twitter</p>
                    </div>
                </a>
            </div>
            `)
            $('#twitterInput').val('');
        }
    })
    // Twitter
    $('.social-icon-wrapper').on('click', '.deleteIcon', function() {
        $(this).closest('.socialIcon-item').remove();
    });

    let firstStepMax = 500; 
    let secondStepMax = 700; 
    let thirdStepMax = 900; 
    // Maximum credit value
    let innerBarOne = $('.barAmount-one').get(0); 
    let innerBarTwo = $('.barAmount-two').get(0); 
    let innerBarThree = $('.barAmount-three').get(0); 
    function setCreditAmount() {
        let totalAmount = parseInt($('.totalAmount').text());

        let percentageOne = (totalAmount / firstStepMax) * 100;
        let percentageTwo = (totalAmount / secondStepMax) * 100;
        let percentageThree = (totalAmount / thirdStepMax) * 100;

        innerBarOne.style.width = `${percentageOne}%`;
        innerBarTwo.style.width = `${percentageTwo}%`;
        innerBarThree.style.width = `${percentageThree}%`;

        $('.userAmount').text(`${totalAmount}`)
    }
    setCreditAmount()
    function maxAmount() {
        let userAmountOne = parseInt($('.userAmountOne').text());
        let userAmountTwo = parseInt($('.userAmountTwo').text());
        let userAmountThree = parseInt($('.userAmountThree').text());

        if (userAmountOne >= firstStepMax) {
            $('.userAmountOne').text('500');
            innerBarOne.style.width = `100%`
            $('.creditAmountOne').addClass('creditAmountOne')
        } else {
            $('.creditAmountOne').removeClass('creditAmountOne')
        }

        if (userAmountTwo >= secondStepMax) {
            $('.userAmountTwo').text('700');
            innerBarTwo.style.width = `100%`
            $('.creditAmountTwo').addClass('creditAmountTwo')
        } else {
            $('.creditAmountTwo').removeClass('creditAmountTwo')
        }

        if (userAmountThree >= thirdStepMax) {
            $('.userAmountThree').text('900');
            innerBarThree.style.width = `100%`
            $('.creditAmountThree').addClass('creditAmountThree')
        } else {
            $('.creditAmountThree').removeClass('creditAmountThree')
        }
    }
    maxAmount()


    $('#creditCardInput').on('input', function() {
        let inputValue = $(this).val();
        // Remove any non-digit characters from the input value
        let digitsOnly = inputValue.replace(/\D/g, '');
        // Format the credit card number in groups of 4 digits
        let formattedValue = '';
        for (let i = 0; i < digitsOnly.length; i++) {
          formattedValue += digitsOnly[i];
          if ((i + 1) % 4 === 0 && i !== digitsOnly.length - 1) {
            formattedValue += ' ';
          }
        }
        // Update the input field value with the formatted value
        $(this).val(formattedValue);
    });
    // Credit card format













    function slideDown() {
        $('.errorMessage').show()
        $('.errorMessage').removeClass('errorReverseAnimat')
        $('.errorMessage').addClass('errorOnAnimat')
        $('.errorMessage').css({
          top: '-10px'
        })
    }
    // Function For error to slide Down
    function slideUp() {
        $('.errorMessage').css({
            top: '-45px'
        })
        $('.errorMessage').removeClass('errorOnAnimat')
        $('.errorMessage').addClass('errorReverseAnimat')
    }



    let passwordInput = $('#password');
    let togglePassword = $('.togglePassword')
    togglePassword.click(function() {
        let type = passwordInput.attr('type')

        if(type === 'password') {
            passwordInput.attr('type', 'text');
            $('.seePassword').hide();
            $('.hidePassword').show();
        } else {
            passwordInput.attr('type', 'password');
            $('.seePassword').show();
            $('.hidePassword').hide();
        }
    })
    let passwordConfirmInput = $('#confirmPassword');
    let toggleConfirmPassword = $('.toggleConfirmPassword')
    toggleConfirmPassword.click(function() {
        let type = passwordConfirmInput.attr('type')

        if(type === 'password') {
            passwordConfirmInput.attr('type', 'text');
            $('.seeConfirmPassword').hide();
            $('.hideConfirmPassword').show();
        } else {
            passwordConfirmInput.attr('type', 'password');
            $('.seeConfirmPassword').show();
            $('.hideConfirmPassword').hide();
        }
    })
    // View password / Hide password

    let passwordFields = $('.passwordInputField')
    let errorPassword = $('.errorPasswordMessage')
    let storedPassword = '';
    passwordInput.on('blur', function() {
        let password = $(this).val().trim();
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
        if (passwordRegex.test(password)) {
            slideUp()
            passwordFields.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                errorPassword.text('')
            }, 300)
            storedPassword = password;
        } else {
            let errorpasswordMessage = '';
            if(password.length < 8) {
                errorpasswordMessage = 'Password must have at least 8 characters'
                slideDown()
                passwordFields.removeClass('valid').addClass('inputError');
            } else if (!/[A-Z]/.test(password)) {
                errorpasswordMessage = 'Password must have at least 1 capital letter'
                slideDown()
                passwordFields.removeClass('valid').addClass('inputError');
            } else if (!/[a-z]/.test(password)) {
                errorpasswordMessage = 'Password must have at least 1 lowercase letter'
                slideDown()
                passwordFields.removeClass('valid').addClass('inputError');
            } else if (!/\d/.test(password)) {
                errorpasswordMessage = 'Password must have at least one number'
                slideDown()
                passwordFields.removeClass('valid').addClass('inputError');
            } else if (!/\W/.test(password)) {
                errorpasswordMessage = 'Password must have at least one ! @ # $ &'
                slideDown()
                passwordFields.removeClass('valid').addClass('inputError');
            } else if (/\s/.test(password)) {
                errorpasswordMessage = 'Password must not have any whitespace'
                slideDown()
                passwordFields.removeClass('valid').addClass('inputError');
            } else {
                slideUp()
                passwordFields.removeClass('inputError').addClass('valid');
                setTimeout(function() {
                    errorPassword.text('')
                }, 300)
            }
            errorPassword.text(errorpasswordMessage)
        }
    })
    // password validation

    let confirmPasswordInput = $('#confirmPassword')
    let errorConfirmPasswordMessage = $('.errorConfirmPasswordMessage')
    let confirmPasswordField = $('.confirmPasswordField')
    // Confirm Password Variables 
    confirmPasswordInput.on('blur', function() {
        let confirmPassword = $(this).val().trim();
        if (confirmPassword === storedPassword && storedPassword !== '') {
            slideUp()
            confirmPasswordField.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                errorConfirmPasswordMessage.text('')
            }, 300)
        } else {
            slideDown()
            confirmPasswordField.removeClass('valid').addClass('inputError');
            errorConfirmPasswordMessage.text('Passwords do not match')
        }
    })
    // confirm password validation















    let searchUsers = [
        {
            userProfile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Andrew_Jackson_Daguerrotype-crop.jpg/1024px-Andrew_Jackson_Daguerrotype-crop.jpg',
            userName: 'Andrew Jackson',
            userDescription: '7th U.S. President'
        },
        {
            userProfile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/President_Hoover_portrait.jpg/1024px-President_Hoover_portrait.jpg',
            userName: 'Herbert Hoover',
            userDescription: '31st U.S. President'
        },
        {
            userProfile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Fillmore.jpg/1200px-Fillmore.jpg',
            userName: 'Millard Fillmore',
            userDescription: '13th U.S. President'
        },
    ]
    // List of users that will be blocked. 
    for (let i = 0; i < searchUsers.length; i++) {
        $('.userSearch-dropdown').append(`
            <div class="userSearch-item">
                <div class="userSearch-content">
                    <div class="userSearch-profile">
                        <img src="${searchUsers[i].userProfile}" alt="">
                    </div>
                    <div class="userSearch-name">
                        <h5 class="username" >${searchUsers[i].userName}</h5>
                        <p>${searchUsers[i].userDescription}</p>
                    </div>
                </div>
                <div class="block-btn">
                    <p>Block</p>
                </div>
            </div>
        `)
        let searchList = $('.userSearch-item > .block-btn');
        
        $(searchList[i]).on('click', () => {
            $('.blocking-wrapper').append(`
                <div class="blockeduser-item">
                    <div class="userSearch-content">
                        <div class="userSearch-profile">
                            <img src="${searchUsers[i].userProfile}" alt="">
                        </div>
                        <div class="userSearch-name">
                            <h5>${searchUsers[i].userName}</h5>
                            <p>${searchUsers[i].userDescription}</p>
                        </div>
                    </div>
                    <span class="unblock-btn">Unblock</span>
                </div>
            `)
    
            $('.unblock-btn').on('click', function(e) {
                let unblock = $(e.target).parent();
                $(unblock).remove()
                $('#userSearchDropdown').append(`
                <div class="userSearch-item">
                    <div class="userSearch-content">
                        <div class="userSearch-profile">
                            <img src="${searchUsers[i].userProfile}" alt="">
                        </div>
                        <div class="userSearch-name">
                            <h5 class="username" >${searchUsers[i].userName}</h5>
                            <p>${searchUsers[i].userDescription}</p>
                        </div>
                    </div>
                    <div class="block-btn">
                        <p>Block</p>
                    </div>
                </div>
            `)
            })
        })
    }
    // Storing the searched users
    
    
    
    // Listen for keyup event on filter input field
    $('#filter').on('keyup', function() {
          // Get the search query
          var query = $(this).val().toLowerCase();
      
          // Show the user search dropdown
          $('#userSearchDropdown').show();
      
          // Loop through each user search item
          $('.userSearch-item').each(function() {
            // Get the user name text
            var nameText = $(this).find('.userSearch-name').text().toLowerCase();
      
            // Check if the user name matches the search query
            if (nameText.indexOf(query) !== -1) {
              // If it does, show the user search item
              $(this).show();
            } else {
              // If it doesn't, hide the user search item
              $(this).hide();
            }
          });
    });
      
    // Listen for click event on block button
    $('#userSearchDropdown').on('click', '.block-btn', function(e) {
          // Hide the user search dropdown
          $('#filter').val('');
          $('#userSearchDropdown').hide();
    
          $('.no-block').hide();
          $('.blockedUser-title').show();
          let userSearchItem = $(e.target).parent().parent()
          $(userSearchItem).remove()
    });
      
    // Listen for click event on document
    $(document).on('click', function(event) {
          // Check if the click event target is outside the user search dropdown
          if (!$(event.target).closest('#userSearchDropdown').length) {
            // If it is, hide the user search dropdown
            $('#userSearchDropdown').hide();
          }
    });
    // Searching users to block


    $(".account-footer span").on('click', function(e){
        $(".accountModal-background").show();
        e.stopPropagation();
    });
    $(".deleteAccountWrapper").click(function(e){
        e.stopPropagation();
    });
    $(document).on('click', function(){
        $(".accountModal-background").hide();
    });
    $('.cancelDeleteAccount').on('click', function() {
        $(".accountModal-background").hide();
    })
    // Delete Account
})



/*===========================
        Social Media
 ============================*/
 function linkSocialMediaAccounts (list) {
    for (let i = 0; i < list.length; i++) {
        const socialMediaFieldName = $(list[i]).find("p").text();
        const socialMediaHREF = $(list[i]).attr("href");
        let socialMediaOBJ = {
            fieldName: socialMediaFieldName,
            href: socialMediaHREF,
            className: ""
        };
        socialMediaInputs.push(socialMediaOBJ);



    }
}
const socialMediaInputsList = $(".socialInput-item input");
const socialSaveBtn = $(".social-save");
let socialMediaInputs = [];
$(socialSaveBtn).on("click", function() {

    let socialMediaIcon = $(".socialIcon-item").children("a");


    linkSocialMediaAccounts(socialMediaIcon);

    console.log(socialMediaInputs);
    $.ajax({
        method: "POST",
        url: "/users/profile/update/update-profile/add-socialMedia",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify(socialMediaInputs),
        success: (r) => {
            console.log(r.field);
            socialMediaInputs = [];
        },
        error: (e) => {
            console.log(e);
        }
    });

});