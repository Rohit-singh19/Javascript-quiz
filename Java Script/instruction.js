var sts = setInterval(showtime, 1000);
const st = 1;
let t = st*60;

const proceedEl = document.getElementById('proceed');
const pbtnEl = document.getElementById('pbtn');

function showtime() {
    let sec = t%60;

    sec = sec < 10 ? '0' + sec : sec;

    proceedEl.innerHTML = `${sec}`;
    t--;

    pbtnEl.style.pointerEvents('none');

    if (t < 0) {
        clearInterval(sts);
    }
    
    
}

pbtnEl.addEventListener("click", e => {
    if (t > 0) {
        e.preventDefault();
    }
})