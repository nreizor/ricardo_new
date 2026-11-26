// ====== Рикардо ======
const ricardoBg  = document.getElementById('ricardoBg');
const ricardoImg = document.getElementById('ricardoImg');

let danceTimer = null;

// Функция для запуска "танца" (включает гифку + покачивание)
function startDance() {
  ricardoBg.classList.add('dancing');
  
  // Сбрасываем таймер, если он уже был
  clearTimeout(danceTimer);
  
  // Через 3 секунды после последнего клика/наведения убираем класс "dancing"
  // (гифка продолжит двигаться, пока курсор наведен, благодаря CSS)
  danceTimer = setTimeout(() => {
    ricardoBg.classList.remove('dancing');
  }, 3000);
}

// При клике на фон
ricardoBg.addEventListener('click', () => {
  startDance();
});

// (Опционально) При наведении мыши также запускаем "танец" с покачиванием
ricardoBg.addEventListener('mouseenter', () => {
  startDance();
});


// ====== Кнопки входа ======
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const provider = btn.dataset.provider;
    console.log(`🔐 Попытка входа через ${provider}`);

    // Запускаем танец и при клике на кнопки!
    startDance();

    // Показываем уведомление
    showToast(`Вход через ${provider}...`);
  });
});


// ====== Простое всплывающее уведомление ======
function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    background: rgba(30, 30, 30, 0.95);
    color: #fff;
    padding: 12px 20px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.15);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    z-index: 100;
    opacity: 0;
    transition: opacity .3s ease, transform .3s ease;
    box-shadow: 0 10px 30px rgba(0,0,0,.5);
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(-20px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}