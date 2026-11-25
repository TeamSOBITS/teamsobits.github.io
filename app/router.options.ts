import type { RouterConfig } from '@nuxt/schema'
import type { RouteLocationNormalized } from 'vue-router'

/**
 * ページ移動時のスクロール位置のルール
 *
 * - ブラウザの「戻る / 進む」 … 前にいた位置に戻す
 * - 言語の切り替え（同じページの別言語版） … 今の位置のまま
 * - ページ内リンク（#info など） … その要素まで移動
 * - それ以外のページ移動 … 一番上へ
 *
 * なぜこのファイルが必要か:
 *   Nuxt は URL が変わると、何もしなくても一番上までスクロールする。
 *   言語を切り替えると / が /ja/ に変わるので、そのままだと毎回一番上に戻されてしまう。
 *   そこで「同じページの別言語版への移動」を見分けて、そのときだけスクロールしないようにしている。
 *
 * ファイル名は Nuxt の決まり（app/router.options.ts に置くと、ページ移動の設定として読み込まれる）。
 *
 * 【ハック】Nuxt 標準のルールを丸ごと置き換えている:
 *   本当に変えたいのは「言語の切り替え」の1つだけだが、Nuxt の仕組み上、
 *   スクロールのルールは一部だけを差し替えられず、全体を書き直すのは難しい。
 *   そのため残りの3つも、Nuxt 標準と同じ動きになるようにここで書き直している。
 *   Nuxt のバージョンが上がって標準の動きが変わっても、ここは古いまま残るので、
 *   Nuxt を更新したときは、標準の動き（Nuxt の router.options の既定値）と見比べること。
 */

/**
 * i18n はルート名の末尾に言語を付ける（例: index___en, index___ja）。
 * その部分を除いた名前が同じなら「同じページ」とみなす
 */
function isSamePageOtherLocale(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  const baseName = (route: RouteLocationNormalized) => String(route.name ?? '').split('___')[0]
  return to.path !== from.path && !!to.name && baseName(to) === baseName(from)
}

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (isSamePageOtherLocale(to, from)) return false
    if (to.hash && to.path === from.path) return { el: to.hash, behavior: 'smooth' }

    // 別ページへの移動は、新しいページの表示が終わってからスクロールする
    const nuxtApp = useNuxtApp()
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce('page:finish', () => {
        // CSS の scroll-behavior: smooth を打ち消して、瞬時に移動する
        resolve(to.hash ? { el: to.hash, behavior: 'instant' } : { top: 0, behavior: 'instant' })
      })
    })
  },
}
