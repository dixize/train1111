// Навигация
function showPage(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById('page-' + id);
    if(target) {
        target.classList.add('active');
    }
    window.scrollTo(0, 0);
}

// Контент для отзывов
const reviewsData = [
    {n: "Дмитрий", t: "Тараканы исчезли через 2 часа. Фантастика!"},
    {n: "Анна", t: "Лучший сервис по дезинфекции в Москве. Рекомендую."},
    {n: "Виктор", t: "Травили клопов. Сделали всё быстро, запаха нет."},
    {n: "Елена", t: "Очень вежливый мастер. Всё объяснил и дал гарантию."},
    {n: "Артем", t: "Заказывал клининг после дезинсекции. Идеально."}
];

function fillTrack(trackId, count) {
    const track = document.getElementById(trackId);
    for(let i=0; i < count; i++) {
        const rev = reviewsData[Math.floor(Math.random() * reviewsData.length)];
        const card = document.createElement('div');
        card.className = 'rev-card';
        card.innerHTML = `
            <div class="stars">★★★★★</div>
            <p>"${rev.t}"</p>
            <strong>${rev.n} ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}.</strong>
        `;
        track.appendChild(card);
    }
    // Клонируем для бесконечной прокрутки
    track.innerHTML += track.innerHTML;
}

// Заполняем оба ряда по 22 отзыва (всего 44 уникальные карточки в потоке)
fillTrack('track-1', 22);
fillTrack('track-2', 22);

// Модалка
function openOrderModal(service) {
    document.getElementById('selected-service-name').innerText = "КАНАЛ: " + service.toUpperCase();
    document.getElementById('orderModal').style.display = 'flex';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('order-form-step').style.display = 'block';
    document.getElementById('order-success-step').style.display = 'none';
}

function submitFinalOrder() {
    const phone = document.getElementById('phone').value;
    if(phone.length < 5) return alert("ОШИБКА: Введите корректные данные");
    
    document.getElementById('order-form-step').style.display = 'none';
    document.getElementById('order-success-step').style.display = 'block';
}
