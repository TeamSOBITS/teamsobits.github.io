import { FOUNDED_YEAR } from '~/data/site'

/**
 * 創設からの活動年数（例: 2026年なら 26）
 *
 * なぜ data/site.ts の定数ではなく composable なのか:
 *   このサイトは、ビルドしたときに HTML を書き出し、閲覧者のブラウザで開いたときにもう一度動く。
 *   定数として「今年 − 2000」と書くと、この計算が2回別々に行われる。
 *   たとえば 2026年にビルドしたサイトを 2027年に開くと、HTML には「26」、ブラウザの計算では「27」となり、
 *   表示が一瞬で書き換わったり、Vue が「中身が食い違っている」と警告を出したりする。
 *   そこで Nuxt の useState を使い、ビルドしたときの値をブラウザに引き継いでいる。
 *   useState は Vue/Nuxt の機能で、部品の中でしか使えないため、composable にしている。
 *
 * 年が変わったら、サイトをビルドし直すと新しい年数になる。
 */
export function useYearsActive() {
  return useState('years-active', () => new Date().getFullYear() - FOUNDED_YEAR)
}
