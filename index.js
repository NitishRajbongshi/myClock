let h = document.getElementById('h');
let m = document.getElementById('m');
let s = document.getElementById('s');
let df = document.getElementById('f');
setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    let format = "AM"
    if(hours >= 12) {
        hours = hours - 12;
        format = "PM";
    }
    if(hours < 10) {
        hours = "0" + hours;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(second < 10) {
        second = "0" + second;
    }
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = second;
    df.innerHTML = format;
    
}, 1000);