document.addEventListener('DOMContentLoaded', () =>
    requestAnimationFrame(updateTime)
)

const dayInWords = {
    0: "SU",
    1: "MO",
    2: "TU",
    3: "WE",
    4: "TH",
    5: "FR",
    6: "SA",
};


// function to manage time
function setTime(date) {

    // setting hours
    var hour = date.getHours();
    if (hour < 10) {
        hour = '0' + hour;
    }

    if (document.documentElement.style.getPropertyValue('--timer-hours') != hour) {

        document.documentElement.style.setProperty('--timer-hours', "'" + hour + "'");
    }

    // setting minutes
    var min = date.getMinutes();
    if (min < 10) {

        min = '0' + min + '';
    }
    if (document.documentElement.style.getPropertyValue('--timer-minutes') != min) {

        document.documentElement.style.setProperty('--timer-minutes', "'" + min + "'");
    }

    // setting day
    const dayy = dayInWords[date.getDay()] + "";
    if (document.documentElement.style.getPropertyValue('--timer-day') != dayy) {

        document.documentElement.style.setProperty('--timer-day', "'" + dayy + "'");
    }

    const seconds = date.getSeconds() + "";
    if (document.documentElement.style.getPropertyValue('--timer-seconds') != seconds) {

        document.documentElement.style.setProperty('--timer-seconds', "'" + seconds + "'");
    }
}

function updateTime() {

    setTime(new Date());

    requestAnimationFrame(updateTime);
}

element.draggable(document.getElementById('clock'), 'clock');