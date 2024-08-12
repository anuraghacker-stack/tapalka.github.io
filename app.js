// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Показ главной кнопки Telegram
tg.MainButton.show();

// Функция для управления анимацией клика
function animateCoin() {
    const coin = document.getElementById('coin');

    // Используем requestAnimationFrame для добавления класса 'active'
    requestAnimationFrame(() => {
        coin.classList.add('active');
        
        // Удаляем класс 'active' после завершения анимации
        setTimeout(() => {
            coin.classList.remove('active');
        }, 100); // Время должно соответствовать времени анимации в CSS
    });
}

// Логика для обработки нажатий на монету
let count = 0;
const coinElement = document.getElementById('coin');

function handleClick() {
    count++;
    document.getElementById('click-count').textContent = count;

    // Запуск анимации
    animateCoin();

    // Отправка данных в Telegram
    tg.sendData(JSON.stringify({ clicks: count }));
}

// Добавление обработчиков событий
coinElement.addEventListener('click', handleClick);
coinElement.addEventListener('touchend', handleClick); // Поддержка touchend для мобильных устройств

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
