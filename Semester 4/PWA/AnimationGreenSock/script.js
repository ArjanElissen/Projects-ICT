const startbut = document.getElementById("start");
const bouncebut = document.getElementById("bounce");
var wiggles = 10;

startbut.addEventListener("click", start);
bouncebut.addEventListener("click", bounce);

function start() {
    gsap.to("#image", { duration: 2, rotation: 1080 });
}

function bounce() {
    gsap.to("#image", { duration: 1, y: '20%', ease: 'bounce' });
}