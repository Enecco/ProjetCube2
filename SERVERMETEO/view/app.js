const titreSpans = document.querySelectorAll('h1 span'); // on selectionne les éléments du html
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {  // événement quand la page est chargée

    const TL = gsap.timeline({paused: true});   // on met la timeline sur pause

    TL // staggerFrom est une méthode qui permet d'animer des éléments enssemble
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3) //(élément,durée de l'animation{méthode},nombre stagger) top = -50
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1') // on veut juste faire apparaitre donc on enleve "top", "-=1" : lancer l'animation 1seconde avant
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2') // les lignes en haut
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2') // les lignes en haut
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})