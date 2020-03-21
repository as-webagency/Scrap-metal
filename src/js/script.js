$(document).ready(function () {
    'use strict';
    
    // калькулятор - hero 
    const heroCalc = (price = 100) => {

        const heroBlockCalc = document.querySelector('.hero-block__calc'),
            heroBlockSelect = document.querySelector('.hero-block__select'),
            heroBlockInput = document.querySelector('.hero-block__input'),
            totalHeroFrom = document.getElementById('total-hero-from');

        const heroCountSum = () => {
            let total = 0;
            const heroSelectValue = heroBlockSelect.options[heroBlockSelect.selectedIndex].value,
                heroInputValue = +heroBlockInput.value;
                
            if (heroSelectValue && heroInputValue) {
                total = heroSelectValue * heroInputValue;
            } else if (heroSelectValue) {
                total = 'От';
            } else {
                total = 0;
            }
            
            totalHeroFrom.textContent = total;
        };

        heroBlockCalc.addEventListener('change', (event) => {
            const target = event.target;

            if (target === heroBlockSelect || target === heroBlockInput) {
                heroCountSum();
            }
        });

    };

    heroCalc(100);

});