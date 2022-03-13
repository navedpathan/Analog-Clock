setInterval(() => {

    const t = new Date();
    let hr = t.getHours();
    let min = t.getMinutes();
    let sec = t.getSeconds();

    let hrotation = 30*hr + min/2;
    let mrotation = 6*min + sec/10;
    let srotation = 6*sec;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);


