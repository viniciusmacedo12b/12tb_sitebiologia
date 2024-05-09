
function transitionindex()
{
const transition = document.querySelector('.transition');
transition.setAttribute('class', 'animation');
const button = document.querySelector('.card');
button.setAttribute('class', 'conteudoanimation');
const p = document.querySelector('.paragrafo');
p.setAttribute('class', 'conteudoanimation');
const h1 = document.querySelector('.top');
h1.setAttribute('class', 'conteudoanimation');
setTimeout(function() {
    window.location.replace("animaisT.html");
  }, 1500);
}
function transitionanimaisT()
{
    const transitiona = document.querySelector('.transition');
    transitiona.setAttribute('class', 'animation');
    const buttona = document.querySelector('.card');
    buttona.setAttribute('class', 'conteudoanimation');
    const pa = document.querySelector('.paragrafo');
    pa.setAttribute('class', 'conteudoanimation');
    const h1a = document.querySelector('.top');
    h1a.setAttribute('class', 'conteudoanimation');
    setTimeout(function() {
        window.location.replace("taticas.html") }, 1500);
}
function transitionanimaisTvoltar()
{
    const transitionv = document.querySelector('.transition');
    transitionv.setAttribute('class', 'animation');
    const buttonv = document.querySelector('.card');
    buttonv.setAttribute('class', 'conteudoanimation');
    const pv = document.querySelector('.paragrafo');
    pv.setAttribute('class', 'conteudoanimation');
    const h1v = document.querySelector('.top');
    h1v.setAttribute('class', 'conteudoanimation');
    setTimeout(function() {
        window.location.replace("index.html") }, 1500);
}