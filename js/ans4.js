let altimeout;

function setAlarm() {
    let alarmTimeInput = document.getElementById("atime");
    let alarmTime = new Date(alarmTimeInput.value);
    let currentTime = new Date();

    let timeToAlarm = alarmTime.getTime() - currentTime.getTime();

    if (timeToAlarm >= 0) {
        altimeout = setTimeout(() => {
            console.log("Alarm rang!");
        }, timeToAlarm);
    } else {
        console.log("Please select a future time.");
    }
}
