let netWorkPostItems = document.querySelectorAll('.netWorkPost-item');
let windowHeight = window.innerHeight;
let midwayViewport = windowHeight / 1;
function handleScrollNetwork() {
    netWorkPostItems.forEach(netWorkPostItems => {
      let rect = netWorkPostItems.getBoundingClientRect();
      let distanceFromTop = Math.max(rect.top, 0);
    
      if (distanceFromTop < midwayViewport) {
        let progressRatio = Math.min(1, 0 + distanceFromTop / midwayViewport);
        let scaleMultiplier = 0.1;
        let scaleValue = 1 + (progressRatio * scaleMultiplier);
        let topValue = progressRatio * 100;
  
        netWorkPostItems.style.transform = `scale(${scaleValue})`;
        netWorkPostItems.style.top = `${topValue}px`;
      }
    });
}
window.addEventListener('scroll', handleScrollNetwork)

let parallax = document.querySelector('.jobWrapper');
let midParallax = document.querySelectorAll('.midParallax');
let smallParallax = document.querySelectorAll('.smallParallax');
let bigParallax = document.querySelectorAll('.bigParallax');
let inView = false;
function checkParallaxVisibility() {
    let rect = parallax.getBoundingClientRect();
    if (rect.top < windowHeight && rect.bottom >= 0) {
        inView = true;
    } else {
        inView = false;
    }
}
function parallaxEffect() {
    let scrollY = window.scrollY;

    let midParallaxOffset = scrollY * -0.2; // Adjust the factor as needed
    midParallax.forEach(midParallaxItem => {
        midParallaxItem.style.transform = `translateY(${midParallaxOffset}px)`;
    });


    let smallParallaxOffset = scrollY * -0.4; // Adjust the factor as needed
    smallParallax.forEach(item => {
        item.style.transform = `translateY(${smallParallaxOffset}px)`;
    });

    let bigParallaxOffset = scrollY * -0.1; // Adjust the factor as needed
    bigParallax.forEach(bigitem => {
        bigitem.style.transform = `translateY(${bigParallaxOffset}px)`;
    });
}

let movingH4 = document.querySelector('.moving-h4');
let creditCounterWrapper = document.querySelector('.creditCounter-wrapper');
let userAmountOne = document.querySelector('.userAmountOne')
let userAmountTwo = document.querySelector('.userAmountTwo')
let userAmountThree = document.querySelector('.userAmountThree')
let isAnimating = false;

let firstStepMax = 500; 
let secondStepMax = 700; 
let thirdStepMax = 900; 

let innerBarOne = document.querySelector('.innerBarOne');
let innerBarTwo = document.querySelector('.innerBarTwo');
let innerBarThree = document.querySelector('.innerBarThree');
function updateTextValue(progress) {
  let targetValue = Math.min(900, progress * 900);
  movingH4.textContent = `${Math.floor(targetValue)} crd`;

  let formattedValue = `${Math.floor(targetValue)}`;
  userAmountOne.textContent = formattedValue;
  userAmountTwo.textContent = formattedValue;
  userAmountThree.textContent = formattedValue;

  if (targetValue >= firstStepMax) {
    userAmountOne.textContent = '500';
  }
  if (targetValue >= secondStepMax) {
    userAmountTwo.textContent = '700';
  }
  if (targetValue >= thirdStepMax) {
    userAmountThree.textContent = '900';
  }
}
function setCreditAmount() {
    let totalAmountElement = document.querySelector('.moving-h4');
    let totalAmount = parseInt(totalAmountElement.textContent);

    let percentageOne = (totalAmount / firstStepMax) * 100;
    let percentageTwo = (totalAmount / secondStepMax) * 100;
    let percentageThree = (totalAmount / thirdStepMax) * 100;

    innerBarOne.style.width = `${percentageOne}%`;
    innerBarTwo.style.width = `${percentageTwo}%`;
    innerBarThree.style.width = `${percentageThree}%`;
}
function checkVisibility() {
  let rect = creditCounterWrapper.getBoundingClientRect();
  if (rect.top < windowHeight && rect.bottom >= 0) {
    isAnimating = true;
  } else {
    isAnimating = false;
  }
}
function handleScrollCredit() {
    if (isAnimating) {
        let rect = creditCounterWrapper.getBoundingClientRect();
        let distanceFromTopCredit = Math.max(rect.top, 0);
        let halfwayViewport = windowHeight / 3;
        let progressRatioCredit = Math.max(0, Math.min(1, 2 - distanceFromTopCredit / halfwayViewport));
        updateTextValue(progressRatioCredit);
    }
}
window.addEventListener('scroll', () => {
    checkVisibility();
    handleScrollCredit();
    setCreditAmount();



    checkParallaxVisibility()
    if (inView) {
        parallaxEffect();
    }
});
checkVisibility();