/**
 * ニュース一覧（仮置き）
 *
 * TODO: データ形式（YAML / Nuxt Content など）を検討中。決まったら置き換える。
 */
import type { Localized } from '~/composables/useLocalized'

export interface NewsItem {
  /** 公開日 YYYY-MM-DD（記事ページの URL にも使う） */
  date: string
  title: Localized
}

export const NEWS: NewsItem[] = [
  {
    date: '2025-05-17',
    title: {
      ja: '滋賀で開催されたRoboCup@Home JapanOpen 2025 に参加しました',
      en: 'We participated in RoboCup@Home JapanOpen 2025 held in Shiga',
    },
  },
  {
    date: '2025-04-23',
    title: {
      ja: '新年度のご挨拶と新体制について',
      en: 'Greetings for the new fiscal year and new organization',
    },
  },
  {
    date: '2025-03-13',
    title: {
      ja: 'SOBITSのメールアドレスが変わりました',
      en: "SOBITS' email address has changed",
    },
  },
]
