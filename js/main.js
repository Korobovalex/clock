//  Analog clock

    let hr = document.querySelector('#hr'),
        mn = document.querySelector('#mn'),
        sc = document.querySelector('#sc');

    setInterval(() => {

        day = new Date(),
        hh = day.getHours() * 30,
        mm = day.getMinutes() * 6,
        ss = day.getSeconds() * 6;

        hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;

        //  Digital clock

    let hours = document.getElementById('hour'),
        minutes = document.getElementById('minutes'),
        seconds = document.getElementById('seconds'),
        ampm = document.getElementById('ampm');

    let h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds(),
        am = h >= 12 ? "PM" : "AM";

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    if (h > 12) {
        h = h - 12
    }

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
    }, 1000);

// //  Digital clock
//
// let hours = document.getElementById('hour'),
//     minutes = document.getElementById('minutes'),
//     seconds = document.getElementById('hour'),
//     ampm = document.getElementById('ampm');
//
// let h = new Date().getHours(),
//     m = new Date().getMinutes(),
//     s = new Date().getSeconds(),
//     am = h >= 12 ? "PM" : "AM";
//
// h = (h < 10) ? "0" + h : h
// m = (m < 10) ? "0" + m : m
// s = (s < 10) ? "0" + s : s
//
// if (h > 12) {
//     h = h - 12
// }
//
// hours.innerHTML = h;
// minutes.innerHTML = m;
// seconds.innerHTML = s;
// ampm.innerHTML = am;



