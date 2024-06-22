$(document).ready(function() {
    $('#formId').on('keydown', function(event) {
        if (event.which === 13) {
          event.preventDefault();
        }
    });

    function slideDown() {
        $('.errorMessage').show()
        $('.errorMessage').removeClass('errorReverseAnimat')
        $('.errorMessage').addClass('errorOnAnimat')
        $('.errorMessage').css({
          top: '0px'
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
    // Function For error to slide Up

    let fullNameInput = $('#fullname');
    let errorFullnameDiv = $('.errorFullnameMessage');
    fullNameInput.on('blur', function() {
        let fullname = $(this).val().trim();
        let fullNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

        let errorFullnameMessage = '';
        if (fullNameRegex.test(fullname)) {
            slideUp()
            fullNameInput.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                errorFullnameDiv.text('')
            }, 300)
        } else {
            errorFullnameMessage = 'Please enter a valid full name'
            slideDown()
            fullNameInput.removeClass('valid').addClass('inputError');
        }
        errorFullnameDiv.text(errorFullnameMessage)
    })
    // fullname validation

    let usernameInput = $('#username');
    let errorUsername = $('.errorUsernameMessage');
    usernameInput.on('blur', function() {
        let username = $(this).val().trim();
        let regex = /^[a-zA-Z0-9]{5,10}$/;
        if (regex.test(username)) {
            slideUp()
            usernameInput.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                errorUsername.text('');
            }, 300)
            // If user input is correct hide any error
        } else {
            let errorMessage = '';
            if (username.length < 5) {
            errorMessage = 'Username must have at least 5 characters';
            console.log('Username must have at least 5 characters')
            slideDown()
            usernameInput.removeClass('valid').addClass('inputError');
            } else if (username.length > 10) {
            errorMessage = 'Username must have at most 10 characters';
            slideDown()
            usernameInput.removeClass('valid').addClass('inputError');
            } else {
            errorMessage = 'Username can only contain letters and numbers';
            slideDown()
            usernameInput.removeClass('valid').addClass('inputError');
            }
            errorUsername.text(errorMessage);
        }
        // check if user input is correct
    });

    // username validation
    let emailInput = $('#email');
    let errorEmail = $('.errorEmailMessage');
    emailInput.on('blur', function() {
        let email = $(this).val().trim();
        let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        let errorEmailMessage = '';
        if (emailRegex.test(email)) {
            slideUp()
            emailInput.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                emailInput.text('');
            }, 300)
        } else {
            errorEmailMessage = 'Please enter a valid Email.'
            slideDown()
            emailInput.removeClass('valid').addClass('inputError');
        }
        errorEmail.text(errorEmailMessage)
    })
    // email validation

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

    let degreeField = $('#degree')
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

    function formatInputValue(inputElement) {
        let inputValue = inputElement.value;
        let formattedValue = '';
        let digitsOnly = inputValue.replace(/\D/g, '');
        
        if (digitsOnly.length >= 1) {
          formattedValue = digitsOnly.slice(0, 2);
          
          if (digitsOnly.length > 2) {
            formattedValue += '/' + digitsOnly.slice(2, 4);
          }
        }
        
        inputElement.value = formattedValue;
    }
      
    let expectedYearField = $('#expectedYearField');
    expectedYearField.on('input', function() {
      formatInputValue(this);
    });
    
    let graduation = $('#graduation');
    graduation.on('input', function() {
      formatInputValue(this);
    });
    
    $('#currentlySchool').on('change', function() {
      if ($(this).is(':checked')) {
        $('.currentlyInSchool-wrapper').show(300);
        $('.completedSchool-wrapper').hide(300);
        $('#completedSchool').prop('checked', false);
        degreeField.val('').trigger('input'); // Clear and trigger 'input' event
        expectedYearField.val('').trigger('input'); // Clear and trigger 'input' event
        graduation.val('').trigger('input'); // Clear and trigger 'input' event
        $('.degreeInputField').removeClass('valid');
      } else {
        $('.currentlyInSchool-wrapper').hide(300);
      }
    });
    
    $('#completedSchool').on('change', function() {
      if ($(this).is(':checked')) {
        $('.completedSchool-wrapper').show(300);
        $('.currentlyInSchool-wrapper').hide(300);
        $('#currentlySchool').prop('checked', false);
        expectedYearField.val('').trigger('input'); // Clear and trigger 'input' event
        graduation.val('').trigger('input'); // Clear and trigger 'input' event
      } else {
        degreeField.val('').trigger('input'); // Clear and trigger 'input' event
        $('.degreeInputField').removeClass('valid');
        $('.completedSchool-wrapper').hide(300);
      }
    });
    // Check box

    let majorFields = $('.majorInputField')
    let errorMajor = $('.errorMajorMessage')
    $('#major').on('blur', function() {
        let major = $(this).val().trim();
        let majorRegex = /^[a-zA-Z\s&,.'-]+$/

        let errorMajorMessage = '';
        if (majorRegex.test(major)) {
            slideUp()
            majorFields.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                errorMajor.text('')
            }, 300)
        } else {
            errorMajorMessage = 'Please enter a valid major'
            slideDown()
            majorFields.removeClass('valid').addClass('inputError');
        } 
        errorMajor.text(errorMajorMessage)
    })
    // Major

    let relevantCourseworkFields = $('#relevantCoursework')
    let errorRelevantCoursework = $('.errorRelevantCourseworkMessage')
    relevantCourseworkFields.on('blur', function() {
        let relevantCoursework = $(this).val().trim();
        let relevantCourseworkRegex = /^[\w\s&.,()-]+$/

        let relevantCourseworkMessage = '';
        if (relevantCourseworkRegex.test(relevantCoursework)) {
            slideUp()
            relevantCourseworkFields.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                errorRelevantCoursework.text('')
            }, 300)
        } else {
            relevantCourseworkMessage = 'Please enter a valid Course'
            slideDown()
            relevantCourseworkFields.removeClass('valid').addClass('inputError');
        } 
        errorRelevantCoursework.text(relevantCourseworkMessage)
    })
    // Relevant Coursework
    // SLIDE Two
    

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

        $('.jobNameField').removeClass('inputError').addClass('valid');
        $('.dropDown-jobName').slideUp(300);
    })
    $(document).on('click', function() {
        $('.dropDown-jobName').slideUp(300);
    })
    // Job Search

    function scrollToBottom(elementId) {
        let element = $('#' + elementId);
        element.scrollTop(element.prop('scrollHeight'));
    }
    let maxChips = 7;
    let currentChips = 0;
    function updateChipsLeft() {
        let chipsLeft = maxChips - currentChips;
        $('.chipsLeft').text(`Skills left: ${chipsLeft}`);
    }
    $('#skill').keyup(function(e) {
      let skillInput = $('#skill').val();
      if (e.which === 13 && skillInput !== '' && currentChips < maxChips) {
        e.preventDefault();
        $('.skillChips-wrapper').append(`
          <div class="skillChip-item">
              <p>${skillInput}</p>
              <span class="deleteChip"><i class="fas fa-times"></i></span>
          </div>
        `);
        currentChips++;
        updateChipsLeft()
        scrollToBottom('skillContainer');
        $('#skill').val('');
      }
    });
    $('.skillChips-wrapper').on('click', '.deleteChip', function(e) {
      let deleteChip = $(e.target).parent().parent();
      $(deleteChip).remove();
      currentChips--;
      updateChipsLeft()
    });
    // Add skill


    function openModalWrapperAnimation() {
        $('.jopXpModalWrapper').removeClass('closeModalWrapper');
        $('.jopXpModalWrapper').show();
        $('.jopXpModalWrapper').addClass('openModalWrapper');
    }
    function openModalAnimation() {
        $('.jobXpModal-item').addClass('openModal');
    }
    function closeModalWrapperAnimation() {
        $('.jopXpModalWrapper').show();
        $('.jobXpModal-item').removeClass('closeModal');
        $('.jopXpModalWrapper').removeClass('openModalWrapper');
        $('.jopXpModalWrapper').addClass('closeModalWrapper');
    }
    function closeModalAnimation() {
        $('.jobXpModal-item').removeClass('openModal');
        $('.jobXpModal-item').addClass('closeModal');
        setTimeout(function() {
            $('.jopXpModalWrapper').hide();
        },300)
    }
    // Modal open function


    $('.addJobXp').on('click', function() {
        openModalWrapperAnimation()
        openModalAnimation()
    });
    
    $('.jobXpModal-cancel').on('click', function() {
        closeModalAnimation()
        closeModalWrapperAnimation()
        setTimeout(function() {
            $('.jopXpModalWrapper').hide();
        }, 300)
        resetModalInputs();
    });
    // Hide Add Job Experience Modal


    let companyName = '';
    let errorCompanyName = $('.errorCompanyNameMessage');
    let userCompanyName = $('#companyName')
    userCompanyName.on('blur', function() {
        companyName = $(this).val().trim();
        let companyNameRegex = /^[A-Za-z\s]+$/;
        let errorCompanyNameMessage = '';
        if (companyNameRegex.test(companyName)) {
            slideUp()
            userCompanyName.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                errorCompanyName.text('');
            }, 300)
        } else {
            errorCompanyNameMessage = 'Please enter a valid company name'
            slideDown()
            userCompanyName.removeClass('valid').addClass('inputError');
        }
        errorCompanyName.text(errorCompanyNameMessage)
    })
    // Comapny Name
    let positionTitle = '';
    let errorPositionTitle = $('.errorJobTitleMessage');
    let userPosition = $('#jobTitle');
    userPosition.on('blur', function() {
        positionTitle = $(this).val().trim();
        let positionRegex = /^[a-zA-Z0-9\s\-\.,\(\)]+$/;
        let errorPositionTitleMessage = '';
        if (positionRegex.test(positionTitle)) {
            slideUp()
            userPosition.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                errorPositionTitle.text('');
            }, 300)
        } else {
            errorPositionTitleMessage = 'No special characters'
            slideDown()
            userPosition.removeClass('valid').addClass('inputError');
        }
        errorPositionTitle.text(errorPositionTitleMessage)
    })
    // Comapny Position
    let jobEmail = '';
    let errorCompanyEmail = $('.errorCompanyEmailMessage');
    let companyEmail = $('#JobEmail');
    companyEmail.on('blur', function() {
        jobEmail = $(this).val().trim();
        let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        let errorCompanyEmailMessage = '';
        if (emailRegex.test(jobEmail)) {
            slideUp()
            companyEmail.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                errorCompanyEmail.text('');
            }, 300)
        } else {
            errorCompanyEmailMessage = 'Enter a valid email.'
            slideDown()
            companyEmail.removeClass('valid').addClass('inputError');
        }
        errorCompanyEmail.text(errorCompanyEmailMessage)
    })
    // Comapny Email
    let startDate = '';
    let errorStartDate = $('.errorStartDateMessage');
    let startDateInput = $('#startDate');
    startDateInput.on('blur', function() {
        startDate = $(this).val().trim();
        let startDateRegex = /^\d{4}$/;
        let errorStartDateMessage = '';
        if (startDateRegex.test(startDate)) {
            slideUp()
            startDateInput.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                errorStartDate.text('');
            }, 300)
        } else {
            errorStartDateMessage = 'Enter a valid Date.'
            slideDown()
            startDateInput.removeClass('valid').addClass('inputError');
        }
        errorStartDate.text(errorStartDateMessage)
    })

    let endDate = ''
    let errorEndDate = $('.errorEndDateMessage');
    let endDateInput = $('#endDate');
    endDateInput.on('blur', function() {
        endDate = $(this).val().trim();
        let endDateRegex = /^\d{4}$/;
        let errorEndDateMessage = '';
        if (endDateRegex.test(endDate)) {
            slideUp()
            endDateInput.removeClass('inputError').addClass('valid');
            setTimeout(function() {
                errorEndDate.text('');
            }, 300)
        } else {
            errorEndDateMessage = 'Enter a valid Date.'
            slideDown()
            endDateInput.removeClass('valid').addClass('inputError');
        }
        errorEndDate.text(errorEndDateMessage)
    })
    // Comapny Email
    $('.jobXpModal-save').on('click', function() {
        let totalModalInputFields = $('.modalInputFields').length;
        let validModalInputFields = 0;
        $('.modalInputFields').each(function() {
                if($(this).hasClass('valid')) {
                validModalInputFields ++;
            } 
        });
        if (validModalInputFields === totalModalInputFields) {
            $('.jopXpModalWrapper').hide();
            appendJobExperience(companyName, positionTitle, jobEmail, startDate, endDate);
            resetModalInputs();
        } else {
            alert("Correct the Fields")
        }
    })
    // Save Job Experience

    $('.jobXpWrapper').on('click', '.closeJobExItem', function(e) {
        let deleteJobXp = $(e.target).closest('.jobXp-item');
        $(deleteJobXp).remove();
    });
    // Delete Job Experience
    
    $('.jobXpWrapper').on('click', '.editJobExItem', function(e) {
        $('.editJobXpWrapper').show();
        let editJobExperienceModal = `
            <div class="editJobXp">
                <div class="jobExModal-header">
                    <h3>Edit Job Experience</h3>
                </div>
                <div class="companyNameWrapper inputWrapper">
                    <p class="outerPlaceholder">Company Name</p>
                    <input type="text" id="editCompanyName" class="editInputField" placeholder="Company Name">
                    <div style="display: none;" class="errorCompanyNameMessage errorMessage">
                        <p></p>
                    </div>
                </div>
                <div class="jobTitleWrapper inputWrapper">
                    <p class="outerPlaceholder">Job Title</p>
                    <input type="text" class="editInputField" id="editJobTitle" placeholder="Job Position">
                    <div style="display: none;" class="errorJobTitleMessage errorMessage">
                        <p></p>
                    </div>
                </div>
                <div class="jobDescriptionWrapper inputWrapper">
                    <p class="outerPlaceholder">Job Email</p>
                    <input type="text" class="editInputField" id="editJobEmail" placeholder="Job Email ">
                    <div style="display: none;" class="errorJobEmailMessage errorMessage">
                        <p></p>
                    </div>
                </div>
                <div class="flexWrapper editDateFlex inputWrapper">
                    <div class="startDateWrapper">
                        <p class="outerPlaceholder">Start Date</p>
                        <div class="startDateFields">
                            <input type="number" class="editInputField" id="editStartDate" placeholder="2000">
                        </div>
                        <div style="display: none;" class="errorStartDateMessage errorMessage">
                            <p></p>
                        </div>
                    </div>
                    <div class="endDateWrapper">
                        <p class="outerPlaceholder">End Date</p>
                        <div class="endDateFields">
                            <input type="number" class="editInputField" id="editEndDate" placeholder="2023">
                        </div>
                        <div style="display: none;" class="errorEndDateMessage errorMessage">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="jobXpModal-footer">
                    <span class="edit-jobXpModal-cancel">Cancel</span>
                    <span class="edit-jobXpModal-save">Save</span>
                </div>
            </div>
        `;
        // Create the edit job experience modal HTML

        $('.editJobXpWrapper').append(editJobExperienceModal);
        // Append the edit job experience modal to the document or body



        let editComapnyNameInput = $('#editStartDate');
        let editCompanyNameDiv = $('.errorCompanyNameMessage');
        editComapnyNameInput.on('blur', function() {
            let editCompanyName = $(this).val().trim();
            let companyNameRegex = /^[a-zA-Z0-9\s]+$/;
    
            let editCompanyNameMessage = '';
            if (companyNameRegex.test(editCompanyName)) {
                slideUp()
                editComapnyNameInput.removeClass('inputError').addClass('valid');
                setTimeout(function() {
                    editCompanyNameDiv.text('')
                }, 300)
            } else {
                editCompanyNameMessage = 'Please enter a valid company name'
                slideDown()
                editComapnyNameInput.removeClass('valid').addClass('inputError');
            }
            editCompanyNameDiv.text(editCompanyNameMessage)
        })
        // Comapany Name validation
        let editJobTitleInput = $('#editJobTitle');
        let editJobTitleDiv = $('.errorJobTitleMessage');
        editJobTitleInput.on('blur', function() {
            let editJobTitleName = $(this).val().trim();
            let companyNameRegex = /^[a-zA-Z0-9\s\-\.,\(\)]+$/;
    
            let editJobTitleDivMessage = '';
            if (companyNameRegex.test(editJobTitleName)) {
                slideUp()
                editJobTitleInput.removeClass('inputError').addClass('valid');
                setTimeout(function() {
                    editJobTitleDiv.text('')
                }, 300)
            } else {
                editJobTitleDivMessage = 'Please enter a valid job title.'
                slideDown()
                editJobTitleInput.removeClass('valid').addClass('inputError');
            }
            editJobTitleDiv.text(editJobTitleDivMessage)
        })
        // Job Title validation
        let editJobEmailInput = $('#editJobEmail');
        let errorJobEmailDiv = $('.errorJobEmailMessage');
        editJobEmailInput.on('blur', function() {
            let editJobTitleName = $(this).val().trim();
            let companyNameRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    
            let errorJobEmailMessage = '';
            if (companyNameRegex.test(editJobTitleName)) {
                slideUp()
                editJobEmailInput.removeClass('inputError').addClass('valid');
                setTimeout(function() {
                    errorJobEmailDiv.text('')
                }, 300)
            } else {
                editJobTitleDivMessage = 'Please enter a valid email.'
                slideDown()
                editJobEmailInput.removeClass('valid').addClass('inputError');
            }
            errorJobEmailDiv.text(errorJobEmailMessage)
        })
        // Job Email validation
        let editStartDateInput = $('#editStartDate');
        let errorStartDateDiv = $('.errorStartDateMessage');
        editStartDateInput.on('blur', function() {
            let startDateNumber = $(this).val().trim();
            let startDateRegex = /^\d{4}$/;
    
            let errorStartDateMessage = '';
            if (startDateRegex.test(startDateNumber)) {
                slideUp()
                editStartDateInput.removeClass('inputError').addClass('valid');
                setTimeout(function() {
                    errorStartDateDiv.text('')
                }, 300)
            } else {
                errorStartDateMessage = 'Invalid date.'
                slideDown()
                editStartDateInput.removeClass('valid').addClass('inputError');
            }
            errorStartDateDiv.text(errorStartDateMessage)
        })
        // Start Date validation
        let editEndDateInput = $('#editEndDate');
        let errorEndDateDiv = $('.errorEndDateMessage');
        editEndDateInput.on('blur', function() {
            let endDateNumber = $(this).val().trim();
            let endDateRegex = /^\d{4}$/;
    
            let errorEndDateMessage = '';
            if (endDateRegex.test(endDateNumber)) {
                slideUp()
                editEndDateInput.removeClass('inputError').addClass('valid');
                setTimeout(function() {
                    editEndDateInput.text('')
                }, 300)
            } else {
                errorEndDateMessage = 'Invalid date.'
                slideDown()
                editEndDateInput.removeClass('valid').addClass('inputError');
            }
            errorEndDateDiv.text(errorEndDateMessage)
        })
        // End Date validation








        let card = $(e.target).closest('.jobXp-item');
        let companyName = card.find('.inputCompany').text();
        let position = card.find('.inputPosition').text();
        let jobEmail = card.find('.inputDescription').text();
        let dateOne = card.find('.inputDateOne').text();
        let dateTwo = card.find('.inputDateTwo').text();
        setEditModalInputs(companyName, position, jobEmail, dateOne, dateTwo)
    });
    // Show Edit Job Experience Modal
    
    $('.editJobXpWrapper').on('click', '.edit-jobXpModal-cancel', function(e) {
        $('.editJobXpWrapper').hide();
        let cancelEditModal = $(e.target).parent().parent()
        $(cancelEditModal).remove()
    });
    // Hide Edit Job Experience Modal

    $('.editJobXpWrapper').on('click', '.edit-jobXpModal-save', function(e) {
        if ($('.editInputField').hasClass('inputError')) {
            alert("correct input fields")
        } else {
            let editedCompanyName = $('#editCompanyName').val();
            let editedPosition = $('#editJobTitle').val();
            let editedJobEmail = $('#editJobEmail').val();
            let editedDateOne = $('#editStartDate').val();
            let editedDateTwo = $('#editEndDate').val();
        
            // Update the card's information
            let card = $('.editJobXpWrapper').data('card');
            card.find('.inputCompany').text(editedCompanyName);
            card.find('.inputPosition').text(editedPosition);
            card.find('.inputDescription').text(editedJobEmail);
            card.find('.inputDateOne').text(editedDateOne);
            card.find('.inputDateTwo').text(editedDateTwo);
        
            $('.editJobXpWrapper').hide();
            let saveEditModal = $(e.target).parent().parent();
            $(saveEditModal).remove()
        }
    });
    // Save Edit Job Experience
    
    function appendJobExperience(companyName, position, jobEmail, dateOne, dateTwo) {
        let newJobExperience = `
          <div class="jobXp-item">
            <div class="optionWrapper">
              <div class="editJobExItem"><i class="fa-solid fa-pen-to-square"></i></div>
              <div class="closeJobExItem"><i class="fas fa-times"></i></div>
            </div>
            <div class="jobXpItem-wrapper">
                <div class="jobXp-body">
                    <h3 class="inputCompany">${companyName}</h3>
                    <p class="inputPosition">${position}</p>
                    <p class="inputDescription">${jobEmail}</p>
                </div>
                <div class="jobXp-footer">
                <p class="inputDateOne">${dateOne}</p>
                <p class="inputDateTwo">${dateTwo}</p>
                </div>
            </div>
          </div>
        `;
        $('.jobXpItem-container').append(newJobExperience);
    }
    // function to append a new job experience card

    function setEditModalInputs(companyName, position, jobEmail, dateOne, dateTwo) {
        $('#editCompanyName').val(companyName);
        $('#editJobTitle').val(position);
        $('#editJobEmail').val(jobEmail);
        $('#editStartDate').val(dateOne);
        $('#editEndDate').val(dateTwo);
        $('.editJobXpWrapper').data('card', $(event.target).closest('.jobXp-item'));
    }
    // function to set inputs in the edit modal

    function resetModalInputs() {
        $('#companyName').val('');
        $('#jobTitle').val('');
        $('#JobEmail').val('');
        $('#startDate').val('');
        $('#endDate').val('');
        $('.modalInputFields').removeClass('valid')
    }
    // Helper function to reset modal inputs
    // Add Experiance. 
    // SLIDE Three

    $(document).on('change', '#uploadUserProfile', function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        // On file selection, read the file and set the image src for all 'newProfile' img tags
        reader.onload = function(e) {
            var img_src = e.target.result;
            $('.newProfile').attr('src', img_src);
        }
    });
    // Upload profile

    $('.firstStep').append(`<div class="currentlyOn"></div>`)
    setInterval(function() {
        let totalFields = $('.personalSlideInput').length;
        let validFields = 0;
      
        $('.personalSlideInput').each(function() {
          if ($(this).hasClass('valid')) {
            validFields++;
          }
        });
      
        if (validFields === totalFields) {
          $('.firstNextButton').addClass('validNext');
          console.log("All fields are valid");

            $('.firstNextButton').on('click', function() {
                slide($('#personalSlide'), $('#educationSlide'), 'left');
              
                $('.firstStep .currentlyOn').remove();
                $('.firstStep').addClass('completedCircle');
                $('.firstLine').addClass('completedLine');
                $('.secondStep').append(`<div class="currentlyOn"></div>`);
            });
        } else {
            $('.firstNextButton').off();
          $('.firstNextButton').removeClass('validNext');
        }
    }, 900);
    setInterval(function() {
        let totalEducationFields = $('.educationFields').length;
        let validEducationFields = 0;

        $('.educationFields').each(function() {
            if($(this).hasClass('valid')) {
            validEducationFields ++;
            } 
        });

        if (validEducationFields === totalEducationFields) {
            $('.secondNextButton').addClass('validNext');
            $('.secondNextButton').on('click', function() {
                slide($('#educationSlide'), $('#experienceSlide'), 'left');

                $('.secondStep .currentlyOn').remove();
                $('.secondStep').addClass('completedCircle')
                $('.secondLine').addClass('completedLine')
                $('.thirdStep').append(`<div class="currentlyOn"></div>`)
            });
        } else {
            $('.secondNextButton').off()
            $('.secondNextButton').removeClass('validNext');
        }
    }, 900);
    let totalWorkFields = $('.workFields').length;
    setInterval(function() {
        let validWorkFields = 0;

        $('.workFields').each(function() {
            if($(this).hasClass('valid')) {
            validWorkFields ++;
            } 
        });

        if (validWorkFields === totalWorkFields) {
            $('.thirdNextButton').addClass('validNext');
            $('.thirdNextButton').on('click', function() {
                slide($('#experienceSlide'), $('#profileSlide'), 'left');
            
                $('.thirdStep .currentlyOn').remove();
                $('.thirdStep').addClass('completedCircle')
                $('.thirdLine').addClass('completedLine')
                $('.fourthStep').append(`<div class="currentlyOn"></div>`)
            });
        } else {
            $('.thirdNextButton').off()
            $('.thirdNextButton').removeClass('validNext');
        }
    }, 900);

    function slide($currentSlide, $nextSlide, direction) {
        $currentSlide.addClass('slideOut');
        setTimeout(function() {
          $currentSlide.hide().removeClass('slideOut');
          $nextSlide.addClass('slideIn').show();
          setTimeout(function() {
            $nextSlide.removeClass('slideIn');
          }, 300);
        }, 300);
    }
    function slideBack($currentSlide, $previousSlide, direction) {
        $currentSlide.addClass('slideBackOut');
        setTimeout(function() {
          $currentSlide.hide().removeClass('slideBackOut');
          $previousSlide.addClass('slideBackIn').show();
          setTimeout(function() {
            $previousSlide.removeClass('slideBackIn');
          }, 300);
        }, 300);
    }
    $('.profileSlideBack').on('click', function() {
        slideBack($('#profileSlide'), $('#experienceSlide'), 'right');

        $('.thirdStep').removeClass('completedCircle')
        $('.fourthStep .currentlyOn').remove();
        $('.thirdLine').removeClass('completedLine');
        $('.thirdStep').append(`<div class="currentlyOn"></div>`)
    });
    $('.experienceSlideBack').on('click', function() {
        slideBack($('#experienceSlide'), $('#educationSlide'), 'right');

        $('.secondStep').removeClass('completedCircle')
        $('.thirdStep .currentlyOn').remove();
        $('.secondLine').removeClass('completedLine');
        $('.secondStep').append(`<div class="currentlyOn"></div>`)
    });
    $('.educationSlideBack').on('click', function() {
        slideBack($('#educationSlide'), $('#personalSlide'), 'right');
        $('.firstStep').removeClass('completedCircle')
        $('.secondStep .currentlyOn').remove();
        $('.firstLine').removeClass('completedLine');
        $('.firstStep').append(`<div class="currentlyOn"></div>`)
    });
    // Back Buttons

    $('.submitBtn').on('click', function() {
        $('.TOS-modalWrapper').show();
    })
    $('.TOSModal-cancel').on('click', function() {
        $('.TOS-modalWrapper').hide();
    })
});