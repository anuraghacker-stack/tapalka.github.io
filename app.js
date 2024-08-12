// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Показываем кнопку закрытия веб-приложения в Telegram
tg.MainButton.show();

// Логика нажатия на монету
let count = 0;
document.getElementById('coin').addEventListener('click', function() {
    count++;
    document.getElementById('click-count').textContent = count;

    // Отправка данных в Telegram (например, текущий счет)
    tg.sendData(JSON.stringify({ clicks: count }));
});

// Событие, которое срабатывает, когда приложение запускается
tg.onEvent('mainButtonClicked', () => {
    // Можно реализовать логику, например, отправить данные и закрыть мини-приложение
    tg.close();
});

// Открытие клавиатуры и установка цвета главной кнопки
tg.MainButton.setParams({
    text: "Закрыть приложение",
    color: "#FF6B00"
});

// Функция, чтобы настроить приложение в момент запуска
function setupApp() {
    tg.ready(); // Подготовка приложения
}

// Инициализация приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', setupApp);
