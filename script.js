// Force le rechargement complet des fichiers CSS et JS
window.addEventListener('load', () => {
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    link.setAttribute('href', href + '?reload=' + new Date().getTime());
  });

  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach((script) => {
    const src = script.getAttribute('src');
    script.setAttribute('src', src + '?reload=' + new Date().getTime());
  });

  // Rends la page visible après la mise à jour
  document.body.style.visibility = "visible";
});


/*PARTIE NAVBAR RESPONSIVE*/

hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}
/*FIN PARTIE NAVBAR RESPONSIVE*/
/*NAVBAR STICKY*/
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 2);
})


// //ICI JE CHANGE LE LOGO EN FONCTION DU STICKY ET DU SCROLL
// document.addEventListener('DOMContentLoaded', () => {
//   console.log("✅ DOM chargé et script.js opérationnel.");

//   // Sélectionner le header et le logo dynamiquement
//   const header = document.querySelector('header');
//   const logo = document.querySelector('.logo img'); // Sélectionne l'image dans le conteneur .logo

//   // Vérifie que le logo existe
//   if (!header || !logo) {
//     console.error("❌ L'élément 'header' ou '.logo img' est introuvable. Vérifie ton HTML.");
//     return;
//   }

//   // Ajoute un écouteur pour détecter le scroll
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//       header.classList.add('sticky'); // Ajoute la classe sticky
//       logo.src = 'img/logotr.png';   // Change dynamiquement le logo
//     } else {
//       header.classList.remove('sticky'); // Supprime la classe sticky
//       logo.src = 'img/logodrk.png';       // Restaure le logo d'origine
//     }
//   });
// });




/*FIN NAVBAR STICKY*/



/*Scroll section*/
function smoothScroll(cible, offset = 0) {
  const element = document.getElementById(cible);
  if (element) {
    window.scrollTo({
      top: element.offsetTop + offset,
      behavior: 'smooth'
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('a[href^="#azienda"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = anchor.getAttribute('href').substring(1);
      // Vous pouvez définir un décalage spécifique ici, par exemple 50 pixels.
      smoothScroll(target, -50);
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('a[href^="#chisono"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = anchor.getAttribute('href').substring(1);
      // Vous pouvez définir un décalage spécifique ici, par exemple 50 pixels.
      smoothScroll(target, -50);
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('a[href^="#secundo"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = anchor.getAttribute('href').substring(1);
      // Vous pouvez définir un décalage spécifique ici, par exemple 50 pixels.
      smoothScroll(target, -50);
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('a[href^="#contatti"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = anchor.getAttribute('href').substring(1);
      // Vous pouvez définir un décalage spécifique ici, par exemple 50 pixels.
      smoothScroll(target, -50);
    });
  });
});
/*Fin Scroll section*/ 


const carousel = document.querySelector('.carousel');

let isDown = false;
let startX;
let scrollLeft;





  //↓ ICI C'EST LA FONCTION QUI FAIT QUE LE BOUTON ME RAMÈNE VERS LE HAUT
function scrollToTop() {
  window.scrollTo({
    top: 10,
    behavior: "smooth",
  });
}



//↓ ICI CA DÉCIDE DE QUAND APPARAÎT MON BOUTON
document.addEventListener("DOMContentLoaded", function() {
  const limit = 250;
  const scrollTopBtn = document.querySelector("#scroll-top-btn");



  document.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("show", window.scrollY >= limit);
  });
});




// Récupère le modal et les éléments
var modal = document.getElementById('imageModal');
var modalImg = document.getElementById('imgDisplay');
var closeBtn = document.querySelector('.close');

// Récupère les flèches de navigation
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');

// Récupère toutes les images miniatures
var images = document.querySelectorAll('#falbum a img');

// Crée un tableau pour stocker les sources des images
var imageArray = Array.from(images).map(img => img.getAttribute('data-full'));

// Garde une trace de l'index actuel de l'image
var currentIndex = 0;

// Affiche le modal avec l'image cliquée
images.forEach(function(img, index) {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    currentIndex = index;  // Met à jour l'index de l'image cliquée
    modalImg.src = imageArray[currentIndex]; // Change la source de l'image du modal
  });
});

// Fonction pour afficher l'image précédente
function showPrevImage() {
  currentIndex = (currentIndex === 0) ? imageArray.length - 1 : currentIndex - 1;
  modalImg.src = imageArray[currentIndex];
}

// Fonction pour afficher l'image suivante
function showNextImage() {
  currentIndex = (currentIndex === imageArray.length - 1) ? 0 : currentIndex + 1;
  modalImg.src = imageArray[currentIndex];
}

// Ajoute des événements sur les flèches de navigation
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Fermer le modal lorsque l'on clique sur la croix
closeBtn.addEventListener('click', function() {
  modal.style.display = "none"; // Cache le modal
});

// Ferme le modal si on clique en dehors de l'image
modal.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
