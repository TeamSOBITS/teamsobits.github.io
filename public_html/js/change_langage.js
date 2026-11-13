const url = location.href;
const dir = url.split("/").filter( e => Boolean(e)); // URLを/で分割して配列に格納
const lastDir = dir.pop();  // 分割したURLの最後の部分を取り出し
const beforeDomain = 'http://home.soka.ac.jp/~sobits/';
const afterDomain = url.replace( beforeDomain , '' );
// スイッチの見た目について、スイッチ押下前に変更が必要な場合の記述（不要なら消す）
if ( url.match(new RegExp('/en/')) ) {
   // 英語サイトでの見た目のための処理
} else {
   // 日本語サイトでの見た目のための処理
}
document.getElementById('lang-sw').addEventListener('click', function() {
//ページ内にページ内リンクが設けられている場合を考慮して、URLに#から始まる記述がある場合にその部分を削除
  if (url.match('#')) {
   url.substring(0, url.indexOf('#'));
  }
//スタイルの見た目について、スイッチ押下後、リンク先に飛ぶ前に変更が必要な場合の処理
// URLに「/en/」が含まれる場合に、「/en/」を取ることで日本語サイトを表示
  if ( url.match(new RegExp('/en/')) ){
    const url_ja = url.replace('/en/', '/');
    location.href = url_ja;
// URLに「/en/」が含まれない場合は日本語サイトのため、
//トップページと、そうでない場合で条件分岐してURLを英語サイトのものに変更
  } else {
    if ( url == beforeDomain ) {
      location.href = url + 'en/';
  } else {
      url = url.replace(lastDir + '/' , '')
      location.href = url + 'en/' + lastDir + '/';
    }
  }
}, false);