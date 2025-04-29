//бургер
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.links');
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.links a').forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;
    
    // Создаем точки для навигации
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Обновляем активную точку
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }
    
    // Навигация по кнопкам
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Автоматическое перелистывание (опционально)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Остановка авто-перелистывания при наведении
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Свайп для мобильных устройств
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide(); // Свайп влево
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide(); // Свайп вправо
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.shapka_down');
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'mobile-footer-toggle';
    toggleBtn.innerHTML = '↑↓';
    document.body.appendChild(toggleBtn);
    
    // Обработчик клика по кнопке
    toggleBtn.addEventListener('click', function() {
      if (footer.style.display === 'block') {
        footer.style.display = 'none';
        this.innerHTML = '↑↓';
      } else {
        footer.style.display = 'block';
        this.innerHTML = '×';
      }
    });
    
    // Автоматически скрывать/показывать при изменении размера окна
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        footer.style.display = '';
        toggleBtn.style.display = 'none';
      } else {
        footer.style.display = 'none';
        toggleBtn.style.display = 'block';
      }
    });
  });