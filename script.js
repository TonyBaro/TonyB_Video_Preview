console.log("page loaded...");
document.getElementById("mainvid").muted = true

function play(element){
    element.play()
}

function stop(element){
    element.pause()
}

function unmute(element){
    element.muted = false
}