let smileys = document.getElementById("hungryimg");
let gameover = document.getElementById("gameover")
let staragainbutton = document.getElementById("restartbutton");

const progressBar = document.getElementsByClassName('progress-bar')[0]
const progressBarHunger = document.getElementsByClassName('progress-barHunger')[0]

staragainbutton.addEventListener("click", reloadPage)


setInterval(() => {
    const computedStyle = getComputedStyle(progressBarHunger)
    const width = parseFloat(computedStyle.getPropertyValue('--width1')) || 0
    progressBarHunger.style.setProperty('--width1', width + -.01)

    if (progressBarHunger.style.getPropertyValue('--width') < 100) {
        smileys.src = "./Images/happy.png"
    }

    if (progressBarHunger.style.getPropertyValue('--width1') < 50) {
        document.documentElement.style.setProperty('--backgroundcol1', 'yellow');
        smileys.src = "./Images/neutral.png"
    }

    if (progressBarHunger.style.getPropertyValue('--width1') < 25) {
        document.documentElement.style.setProperty('--backgroundcol1', 'red');
        document.documentElement.style.setProperty('--colortext1', 'white');
        smileys.src = "./Images/sad.png"
    }

    if (progressBarHunger.style.getPropertyValue('--width1') < 5) {
        document.documentElement.style.setProperty('--backgroundcol1', 'red');
        document.documentElement.style.setProperty('--colortext1', 'white');
        smileys.src = "./Images/sad.png"
        startHealth()
    }
}, 5)


function startHealth() {
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar)
        const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
        progressBar.style.setProperty('--width', width + -.0001)
        if (progressBar.style.getPropertyValue('--width') < 50) {
            document.documentElement.style.setProperty('--backgroundcol', 'yellow');

        }
        if (progressBar.style.getPropertyValue('--width') < 25) {
            document.documentElement.style.setProperty('--backgroundcol', 'red');
            document.documentElement.style.setProperty('--colortext', 'white');
        }
        if (progressBar.style.getPropertyValue('--width') < 5) {
            document.documentElement.style.setProperty('--backgroundcol', 'red');
            document.documentElement.style.setProperty('--colortext', 'white');
            gameover.style.display = "block";
        }
    }, 5)
}

function reloadPage() {
    window.location.reload()
}