// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Показ главной кнопки Telegram
tg.MainButton.show();

// Функция для обновления счётчика кликов и отправки данных в Telegram
function updateClickCount() {
    count++;
    document.getElementById('click-count').textContent = count;

    // Отправка данных в Telegram (например, текущий счёт)
    tg.sendData(JSON.stringify({ clicks: count }));
}

// Логика для обработки нажатий на монету
let count = 0;
document.getElementById('coin').addEventListener('click', updateClickCount);

// Обработка события нажатия на главную кнопку в Telegram
tg.onEvent('mainButtonClicked', () => {
    // Реализация логики, например, отправка данных и закрытие мини-приложения
    tg.sendData(JSON.stringify({ clicks: count, message: "Closing the app" }));
    tg.close();
});

// Настройка параметров главной кнопки
tg.MainButton.setParams({
    text: "Закрыть приложение",
    color: "#FF6B00"
});

// Функция для подготовки приложения при его загрузке
function setupApp() {
    tg.ready(); // Готовность приложения к работе
}

// Инициализация приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', setupApp);
