// 1. スライダー画像切り替え
const slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}
setInterval(nextSlide, 7000); // 7秒ごとに切り替え


const slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
    // 今表示されている画像から「active」を消す
    slides[current].classList.remove('active');
    
    // 次の画像の番号にする（3枚なら 0→1→2→0... とループする）
    current = (current + 1) % slides.length;
    
    // 次の画像に「active」をつける
    slides[current].classList.add('active');
}

// 5秒（5000ミリ秒）ごとに切り替え
setInterval(nextSlide, 5000);


// 2. 矢印クリックでスムーズスクロール
document.getElementById('js-scroll-trigger').addEventListener('click', () => {
    document.getElementById('rules').scrollIntoView({ behavior: 'smooth' });
});


// 3. すべてのナビゲーションリンクにスムーズスクロールを適用
document.querySelectorAll('nav a, .hero-content a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});


// 1. 矢印クリックでスムーズスクロール
document.getElementById('js-scroll-trigger').addEventListener('click', () => {
    document.getElementById('rules').scrollIntoView({ behavior: 'smooth' });
});

// 2. すべてのナビゲーションリンクにスムーズスクロールを適用
document.querySelectorAll('nav a, .hero-content a, .footer-nav-groups a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
