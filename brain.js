window.onload = function() {
    setTime();
}

let milisec = 0, minutes = 0, seconds = 0, id, lapNumber = 0;

function setTime() {
    document.getElementById("minutes").innerText = ('0' + minutes).slice(-2);
    document.getElementById("seconds").innerText = ('0' + seconds).slice(-2);
    document.getElementById("milisec").innerText = ('0' + milisec).slice(-2);
}

function start() {

    id = setInterval(timer , 10);

    let btn = document.getElementById("btn2");
    btn.onclick = stop;
    btn.innerHTML = 'Stop';
    btn.setAttribute("class", "btn btn-danger button");

}

function stop() {

    let btn = document.getElementById("btn2");
    btn.onclick = reset;
    btn.innerHTML = 'Reset';
    btn.setAttribute("class", "btn btn-warning button");

    clearInterval(id);
    id = NaN;

}

function reset() {

    let btn = document.getElementById("btn2");
    btn.onclick = start;

    minutes = seconds = milisec = lapNumber = 0;

    document.getElementById("laps").innerHTML = "";
    setTime();

    btn.innerHTML = 'Start';
    btn.setAttribute("class", "btn btn-success button");

}

function lap() {
    if (!id) {
        alert("Need the stopwatch to be started to use this option.");
        return;
    }

    lapNumber++;

    let text1 = document.createTextNode(`Lap ${lapNumber}  `);
    let text2 = document.createTextNode(`${('0' + minutes).slice(-2)} : ${('0' + seconds).slice(-2)} : ${('0' + milisec).slice(-2)}`);
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    span1.appendChild(text1);
    span2.appendChild(text2);

    let laps = document.getElementById("laps");
    let lap = document.createElement("div");
    lap.setAttribute("id", "lap");

    lap.appendChild(span1);
    lap.appendChild(span2);

    laps.appendChild(lap);
    laps.appendChild(document.createElement("hr"));

}

function timer() {

    milisec++;

    seconds += parseInt(milisec/100);
    minutes += parseInt(seconds/60);
    milisec %= 100;
    seconds %= 60;

    setTime();
}