setInterval(startClock,1000);
secondHand = document.querySelector('.sec')
minHand = document.querySelector('.min')
hourHand = document.querySelector('.hour')


function startClock(){
    const currentDate = new Date();
    const currentSec = currentDate.getSeconds() / 60;
    const currentMin = (currentSec +currentDate.getMinutes()) / 60;
    const currentHour = (currentMin+currentDate.getHours()) /12;
    rotateHnad(secondHand,currentSec)
    rotateHnad(minHand,currentMin)
    rotateHnad(hourHand,currentHour)
}

const rotateHnad = (element,rotationRatio) =>{
    element.style.setProperty('--rotation',rotationRatio*360);
}
startClock();


