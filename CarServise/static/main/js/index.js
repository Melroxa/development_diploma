// Получите ссылку на изображение
const image = document.getElementById('image');

// Добавьте слушатель события "mousemove" к контейнеру
document.querySelector('.container').addEventListener('mousemove', onMouseMove);

function onMouseMove(e) {
    // Получите координаты курсора относительно центра изображения
    const { offsetX, offsetY } = e;
    const { width, height } = e.target.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;

    // Вычислите смещение от центра изображения
    const deltaX = offsetX - centerX;
    const deltaY = offsetY - centerY;

    // Используйте GSAP для анимации смещения
    gsap.to(image, {
        x: deltaX / -20, // Управляйте интенсивностью магнитного эффекта
        y: deltaY / -20,
        duration: 1, // Длительность анимации
    });
}

// Добавьте слушатель события "mouseout" для сброса позиции изображения
document.querySelector('.container').addEventListener('mouseout', () => {
    gsap.to(image, {
        x: 0,
        y: 0,
        duration: 1,
    });
});