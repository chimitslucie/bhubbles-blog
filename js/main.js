// 1 - detecter le clic sur le filtre
// 2 - ajouter la class "filter-modal__open" sur le body

// Récupérer le bouton dans le HTML par son ID, on l'enregistre dans une variable filter
let filter = document.getElementById('filter-btn');

// On detecte le clique sur le bouton "Filtrer"
if(filter) {
    filter.addEventListener('click', e => {

        // On récupère l'élément body
        let body = document.querySelector('body');
    
        // On ajoute la class sur le body
        body.classList.add('filter-modal__open');
    })
    
    let closeIcon = document.querySelector('.filter-modal .filter-modal__icon');
    
    closeIcon.addEventListener('click', e => {
    
        // On récupère l'élément body
        let body = document.querySelector('body');
    
        // On ajoute la class sur le body
        body.classList.remove('filter-modal__open');
    })
}


$('.gallery__slider').slick({
    arrows: false,
    dots: true
});