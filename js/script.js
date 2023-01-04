const d = document.querySelector("#days");
const hr = document.querySelector("#hours");
const min = document.querySelector("#minutes");
const sec = document.querySelector("#seconds");

function updatetime() {
    const currentyear = new Date().getFullYear();
    const newyear = new Date(`january 1 ${currentyear+1} 00:00:00`);
    const currentdate = new Date();
    //console.log(newyear);
    //console.log(currentdate);
    var find = newyear - currentdate;
    // console.log(find);
    var day = Math.floor(find / 1000 / 60 / 60 / 24);
    var hour = Math.floor((find / 1000 / 60 / 60 % 24));
    var minutes = Math.floor((find / 1000 / 60) % 60);
    var seconds = Math.floor((find / 1000) % 60);
    d.innerHTML = day;
    hr.innerHTML = hour < 10 ? "0" + hour : hour;
    min.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    //console.log(day + " " + hour + " " + minutes + " " + seconds);
}
setInterval(updatetime, 1000);