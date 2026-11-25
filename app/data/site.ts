/**
 * サイト全体で使う基本情報
 *
 * ヘッダー・フッターなど複数の場所で使う情報はここにまとめる。
 * リンクを増やしたり SNS を変えたりするときは、このファイルだけを編集すればよい。
 */
import { siFacebook, siGithub, siInstagram, siX, siYoutube, type SimpleIcon } from 'simple-icons'

/** 創設年（「SINCE 2000」や活動年数の計算に使う） */
export const FOUNDED_YEAR = 2000

export const CONTACT_EMAIL = 'team.sobits@gmail.com'

export interface NavItem {
  /** 表示名（ナビは日英とも英語表記） */
  label: string
  /** 言語の接頭辞（/ja）を除いたパス。言語は表示時に自動で付く */
  to: string
  children?: NavItem[]
}

/**
 * メニューの項目（ヘッダーのメニューと、フッターのサイトマップの両方で使う）
 * ここに1行足すと、両方に項目が増える
 */
export const NAVIGATION: NavItem[] = [
  { label: 'Top', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Research', to: '/research' },
  { label: 'Robots', to: '/robots' },
  {
    label: 'Publications',
    to: '/publications',
    children: [
      { label: 'Awards for Academic Activities', to: '/publications#awards' },
      { label: 'International conferences', to: '/publications#international' },
      { label: 'Domestic conferences (Japan)', to: '/publications#domestic' },
    ],
  },
  { label: 'News', to: '/news' },
  { label: 'People', to: '/people' },
]

export interface SnsLink {
  name: string
  url: string
  icon: SimpleIcon
}

export const SNS_LINKS: SnsLink[] = [
  { name: 'Facebook', url: 'https://www.facebook.com/team.sobits', icon: siFacebook },
  { name: 'X (Twitter)', url: 'https://twitter.com/sobits_soka', icon: siX },
  { name: 'Instagram', url: 'https://www.instagram.com/sobits_soka', icon: siInstagram },
  { name: 'YouTube', url: 'https://www.youtube.com/@teamsobits9311', icon: siYoutube },
  { name: 'GitHub', url: 'https://github.com/TeamSOBITS', icon: siGithub },
]
