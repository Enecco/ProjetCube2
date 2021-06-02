const titreSpans2 = document.querySelectorAll('h2 span');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2'); 


window.addEventListener('load', () => {  // événement quand la page est chargée

    const TL = gsap.timeline({paused: true});   // on met la timeline sur pause

    // staggerFrom est une méthode qui permet d'animer des éléments enssemble
   
    TL .staggerFrom(titreSpans2, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    TL.from(l1, 1, {width: 0, ease: "power2.out"}, '-=1.5') // les lignes en haut
    TL.from(l2, 1, {width: 0, ease: "power2.out"}, '-=1.5') // les lignes en haut
    TL.from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    TL.staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})