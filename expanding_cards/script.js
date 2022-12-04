
'use strict';


const cards = document.querySelectorAll('.card');


const showCards = () => {
    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.preventDefault();

            // REMOVE ACTIVE STATE FOR ALL SIBLINGS
            const allSiblings = Array.from(card.parentElement.children).filter(
                (siblings) => siblings.id !== card.id
            );
         
            allSiblings.forEach((sibling) => {
                if (sibling.classList.contains('active')) {
                    sibling.classList.toggle("active"); 
                    sibling.lastElementChild.style.display = "none";
                }   
            });
         
            // TOGGLE ACTIVE STATE
            card.classList.toggle('active');

            if (card.classList.contains('active')) {
                card.lastElementChild.style.display = "flex";
            } else {
                card.lastElementChild.style.display = "none";
            }    
			
        })
    })
}

showCards();