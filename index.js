let animationContainer = document.querySelector(".container");
let btnRight = document.querySelector(".btn-right");
let btnLeft = document.querySelector(".btn-left");
let animation = document.querySelector(".animation");
let pixelsAmount = 10;
let positionLeft = 0;
let positionRight = 0;
let animationIntervalRight = null;
let animationIntervalLeft =  null;

function animateRight() {
    if (positionLeft < animationContainer.offsetWidth - 50) {
        positionLeft = positionLeft + 5;
        animation.style.left = positionLeft + "px";
    } else {
        clearInterval(animationIntervalRight);
    }
}

function animateLeft() {
    if (positionLeft > 0) {
        positionLeft = positionLeft - 5;
        animation.style.left = positionLeft + "px";
    } else {
        clearInterval(animationIntervalLeft);
    }
}

btnRight.addEventListener("click", function() {
    animationIntervalRight = setInterval(animateRight, 5);
});

btnLeft.addEventListener("click", function() {
    animationIntervalLeft = setInterval(animateLeft, 5);
});