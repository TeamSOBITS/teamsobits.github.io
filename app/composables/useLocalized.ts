/** 日本語と英語を並べたデータ（例: { ja: '研究紹介', en: 'Research Contents' }） */
export interface Localized {
  ja: string
  en: string
}

/**
 * { ja, en } の形のデータから、今表示している言語の文字を取り出す関数を返す
 *
 * 例: const localize = useLocalized()
 *     localize(item.title)  → 日本語のページなら item.title.ja、英語なら item.title.en
 *
 * 今の言語を知るために Vue の機能（useI18n）を使うので、composable にしている。
 */
export function useLocalized() {
  const { locale } = useI18n()
  return (text: Localized) => text[locale.value as keyof Localized]
}
