function moveToPage(lang, page) {
    // 言語を保存（他ページでも使用）
    localStorage.setItem("siteLang", lang);

    // 現在のスクロール位置保存（戻り時に使うなら）
    // localStorage.setItem("scrollPos", window.scrollY);
    localStorage.setItem("scrollPos", "0");

    // アンカーありなら "?lang=ja#RoboCup-area" のようにする
    // const url = page + "?lang=" + lang + (anchor ? "#" + anchor : "");

    // 言語パラメータを付与して移動
    window.location.href = page + "?lang=" + lang;
    // window.location.href = url;
}

window.addEventListener("load", () => {
    // URL から言語取得
    const url = new URL(window.location.href);
    const lang = url.searchParams.get("lang") || localStorage.getItem("siteLang") || "ja";

    // ページの言語適用（あなたの langSet を呼ぶ）
    langSet(lang);

    // スクロール位置を戻したい場合
    const pos = localStorage.getItem("scrollPos");
    if (pos !== null) {
        window.scrollTo(0, parseInt(pos));
        localStorage.removeItem("scrollPos");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}