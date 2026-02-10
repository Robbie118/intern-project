function setLang(lang) {
    document.querySelectorAll('.lang').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.lang.' + lang).forEach(el => el.classList.add('active'));

    document.querySelectorAll('.lang-toggle button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(lang + '-btn').classList.add('active');

    localStorage.setItem('preferred-lang', lang);
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'zh';
    setLang(savedLang);
});