function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==========================================
// 2. フォーム送信時の確認メッセージ
// ==========================================
function confirmSave() {
    return confirm("この内容で問い合わせを送信してもよろしいですか？");
}

// ==========================================
// 3. ページを開いたときに「あいさつ」を表示する
// ==========================================
function showGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const now = new Date();
        const hours = now.getHours();
        let message = "";

        if (hours >= 5 && hours < 12) {
            message = "☀️ んみゃーち！朝の宮古島へようこそ！";
        } else if (hours >= 12 && hours < 18) {
            message = "🏝️ んみゃーち！昼の美しい宮古島を満喫してください！";
        } else {
            message = "✨ んみゃーち！夜の宮古島へようこそ！星空が綺麗ですよ。";
        }
        greetingElement.textContent = message;
    }
}

// ==========================================
// 4. ハンバーガーメニューの開閉処理
// ==========================================
function initMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            navMenu.classList.toggle('open');
        });
    }
}

// 💡 ページが完全に読み込まれたら、すべての初期化処理を実行する
window.addEventListener('DOMContentLoaded', () => {
    showGreeting(); // あいさつの表示
    initMenu();     // ハンバーガーメニューの有効化
});