// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Показ главной кнопки Telegram
tg.MainButton.show();

// Функция для управления анимацией клика
function animateCoin() {
    const coin = document.getElementById('coin');
    coin.classList.add('active');
    setTimeout(() => {
        coin.classList.remove('active');
    }, 100); // Длительность анимации в миллисекундах
}

// Логика для обработки нажатий на монету
let count = 0;
document.getElementById('coin').addEventListener('click', function() {
    count++;
    document.getElementById('click-count').textContent = count;

    // Запуск анимации
    animateCoin();

    // Отправка данных в Telegram
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
