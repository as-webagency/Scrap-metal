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

    // калькулятор - price 
    const priceCalc = (price = 100) => {

        const priceBlockCalc = document.querySelector('.price-calc__wrap'),
            priceBlockSelect = document.querySelector('.price-calc__inner'),
            priceBlockInput = document.querySelector('.price-calc__input'),
            totalPriceFrom = document.getElementById('total-price-from');

        const heroCountSum = () => {
            let totalPrice = 0;
            const priceSelectValue = priceBlockSelect.options[priceBlockSelect.selectedIndex].value,
                priceInputValue = +priceBlockInput.value;
                
            if (priceSelectValue && priceInputValue) {
                totalPrice = priceSelectValue * priceInputValue;
            } else if (priceSelectValue) {
                totalPrice = 'От';
            } else {
                totalPrice = 0;
            }
            
            totalPriceFrom.textContent = totalPrice;
        };

        priceBlockCalc.addEventListener('change', (event) => {
            const target = event.target;

            if (target === priceBlockSelect || target === priceBlockInput) {
                heroCountSum();
            }
        });

    };

    priceCalc(100);

});