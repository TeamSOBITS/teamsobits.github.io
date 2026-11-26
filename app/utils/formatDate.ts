/**
 * 日付を「2025.05.17」の形にする（データでは 2025-05-17 と書いている）
 * トップのニュース欄・ニュース一覧・記事ページで使う。app/utils/ に置くと、import なしで使える（Nuxt の決まり）
 */
export const formatDate = (date: string) => date.replaceAll('-', '.')
