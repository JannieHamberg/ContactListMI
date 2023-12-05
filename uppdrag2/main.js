



/* Butterfly */
var butterfly = document.querySelector('.butterfly');

function getRandomArbitrary(min, max) {
return Math.random() * (max - min) + min;
}

setInterval(function () {
var numberX = Math.floor(getRandomArbitrary(0, 300));
var numberY = Math.floor(getRandomArbitrary(0, 400));

butterfly.style.setProperty('--random-y', numberY + 'px');
butterfly.style.setProperty('--random-x', numberX + 'px');
}, 3000);


