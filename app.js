// ============================================================
// app.js — Portfolio ページ ロジック
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
    initNavScroll();
    initFadeIn();
    initSmoothScroll();
});

// ナビゲーションのスクロール影
function initNavScroll() {
    const nav = document.getElementById("nav");
    if (!nav) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }, { passive: true });
}

// フェードインアニメーション
function initFadeIn() {
    const elements = document.querySelectorAll(
        ".about-card, .pub-item, .highlight, .gallery-item, .research-main"
    );

    elements.forEach(el => el.classList.add("fade-in"));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach(el => observer.observe(el));
}

// スムーズスクロール（ナビリンク）
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}
