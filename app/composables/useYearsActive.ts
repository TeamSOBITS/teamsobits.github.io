import { FOUNDED_YEAR } from '~/data/site'

/**
 * 創設からの活動年数（例: 2026年なら 26）
 * ページを書き出した（ビルドした）時点の年で計算し、ブラウザ側でも同じ値を使う。
 */
export function useYearsActive() {
  return useState('years-active', () => new Date().getFullYear() - FOUNDED_YEAR)
}
