const sortBtn = document.getElementById('sortPowerBtn');
const carList = document.querySelector('.car-list');

sortBtn.addEventListener('click', () => {
    // Pegar os carros como array
    let cars = Array.from(carList.children);

    cars.sort((a, b) => {
        return parseInt(b.getAttribute('data-power')) - parseInt(a.getAttribute('data-power'));
    });

    cars.forEach(car => carList.appendChild(car));
});