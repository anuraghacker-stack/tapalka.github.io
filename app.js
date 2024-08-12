// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Показ главной кнопки Telegram
tg.MainButton.show();

// Функция для управления анимацией клика
function animateCoin() {
    const coin = document.getElementById('coin');

    requestAnimationFrame(() => {
        coin.classList.add('active');

        setTimeout(() => {
            coin.classList.remove('active');
        }, 100); // Время должно соответствовать времени анимации в CSS
    });
}

// Логика для обработки нажатий на монету
let count = 0;
const coinElement = document.getElementById('coin');
coinElement.addEventListener('click', function() {
    count++;
    document.getElementById('click-count').textContent = count;

    animateCoin();

    tg.sendData(JSON.stringify({ clicks: count }));
});

coinElement.addEventListener('touchend', function() {
    count++;
    document.getElementById('click-count').textContent = count;

    animateCoin();

    tg.sendData(JSON.stringify({ clicks: count }));
});

// Обработка события нажатия на главную кнопку Telegram
tg.onEvent('mainButtonClicked', () => {
    tg.sendData(JSON.stringify({ clicks: count, message: "Closing the app" }));
    tg.close();
});

// Настройка главной кнопки
tg.MainButton.setParams({
    text: "Закрыть приложение",
    color: "#FF6B00"
});

// Функция для подготовки приложения при его загрузке
function setupApp() {
    tg.ready();
}

// Инициализация приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', setupApp);
