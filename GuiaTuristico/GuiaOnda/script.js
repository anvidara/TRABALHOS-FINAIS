//Barra de navegação
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

//Carrossel
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 4000);

function nextImage() {
    count++;
    if (count > 5) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true
}

//Ondas
var onda1 = document.getElementById('onda1')
var onda2 = document.getElementById('onda2')
var onda3 = document.getElementById('onda3')
var onda4 = document.getElementById('onda4')

window.addEventListener('scroll', function(){
    var rolagemPos = window.scrollY

    onda1.style.backgroundPositionX = 1000 + rolagemPos * 4 + 'px';
    onda2.style.backgroundPositionX = 900 + rolagemPos * -4 + 'px';
    onda3.style.backgroundPositionX = 800 + rolagemPos * 2 + 'px';
    onda4.style.backgroundPositionX = 700 + rolagemPos * -2 + 'px';
})

//ScrollReveal
window.sr = ScrollReveal({reset: true})

ScrollReveal().reveal('.title', {
    delay: 100,
    rotate:{x:0, y:50, z:0},
});

//Ir pro topo
document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo(0, 0);
  });