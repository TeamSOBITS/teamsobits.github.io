/**
 * About ページのデータ（仮置き）
 *
 * - HISTORY：歴史の年表。新しい出来事から順に並べる（ページにもこの順で表示される）
 * - QUALIFICATION_VIDEOS / TEAM_DESCRIPTION_PAPERS：RoboCup の欄に載せる動画と論文。新しいものから順に並べる
 *
 * TODO: データ形式（YAML / Nuxt Content など）を検討中。決まったら置き換える。
 */
import type { Localized } from '~/composables/useLocalized'

export interface HistoryEvent {
  /** 年、または年.月（例: '2025.5'）。表示にそのまま使う */
  date: string
  title: Localized
  /** 受賞などの詳細。1行に1項目、改行（\n）で区切る。なければ省略 */
  details?: Localized
  /** 背景に表示する写真のパス（public/ から） */
  image: string
}

export const HISTORY: HistoryEvent[] = [
  {
    date: '2025.5',
    title: { ja: 'ロボカップジャパンオープン2025.5', en: 'RoboCup Japan Open 2025.5' },
    details: {
      ja: [
        '＠ホーム　オープンプラットフォームリーグ　準優勝',
        '＠ホーム　オープンプラットフォームリーグ　カチャカチャレンジ　優勝',
        '＠ホーム　オープンプラットフォームリーグ　ベストポスターアワード',
        '＠ホーム　オープンプラットフォームリーグ　オープンチャレンジ　3位',
        '＠ホーム　ドメスティックオープンプラットフォームリーグ　ビギナーズチャレンジ　優勝',
      ].join('\n'),
      en: [
        "@Home Domestic Standard Platform: Beginner's Challenge Winner",
        '@Home Open Platform: 2nd Place',
        '@Home Open Platform: Kachaka Challenge 1st Place',
        '@Home Open Platform: Best Poster Award',
        '@Home Open Platform: Open Challenge 3rd Place',
      ].join('\n'),
    },
    image: '/images/about/history/2025-05.jpg',
  },
  {
    date: '2025',
    title: { ja: 'SOBITS過去最多のメンバー数へ', en: 'SOBITS reaches its highest number of members ever' },
    image: '/images/about/history/2025.jpg',
  },
  {
    date: '2024.9',
    title: { ja: 'ロボカップマレーシアオープン2024', en: 'RoboCup Malaysia Open 2024' },
    details: {
      ja: [
        'Best HRI (Human-Robot Interaction) Award：人とロボットのコミュニケーション部門の最優秀賞',
        'Best Presentation Award：Finalsにおけるプレゼンテーションの最優秀賞',
        'Best Oral Presentation賞',
      ].join('\n'),
      en: [
        'Best HRI (Human-Robot Interaction) Award: Highest award in the human-robot communication category',
        'Best Presentation Award: Best presentation at the Finals',
        'Best Oral Presentation Award',
      ].join('\n'),
    },
    image: '/images/about/history/2024-09.jpg',
  },
  {
    date: '2024.4',
    title: { ja: 'ロボカップジャパンオープン2024.4', en: 'RoboCup Japan Open 2024.4' },
    details: {
      ja: [
        '＠ホーム　エデュケーションリーグ　4位',
        '＠ホーム　オープンプラットフォームリーグ　優勝',
        '＠ホーム　シミュレーションOPL　優勝',
        '＠ホーム　ドメスティックオープンプラットフォームリーグ　5位敢闘賞',
      ].join('\n'),
      en: [
        '@Home Education League: 4th place',
        '@Home Open Platform League: Winner',
        '@Home Simulation OPL: Winner',
        '@Home Domestic Open Platform League: 5th place (Special Award for Outstanding Effort)',
      ].join('\n'),
    },
    image: '/images/about/history/2024-04.jpg',
  },
  {
    date: '2024',
    title: { ja: '萩原先生が創価大学に着任', en: 'Associate Professor Hagiwara has joined Soka University' },
    image: '/images/about/history/2024.jpg',
  },
  {
    date: '2023.7',
    title: { ja: 'ロボカップフランスオープン2023.7', en: 'RoboCup France Open 2023.7' },
    details: {
      ja: '＠ホーム　オープンプラットフォームリーグ　初出場',
      en: 'Open Platform League debut appearance @Home',
    },
    image: '/images/about/history/2023-07.jpg',
  },
  {
    date: '2023.5',
    title: { ja: 'ロボカップジャパンオープン2023.5', en: 'RoboCup Japan Open 2023.5' },
    details: {
      ja: [
        '＠ホーム　エデュケーションリーグ　3位入賞',
        '＠ホーム　オープンプラットフォームリーグ　優勝',
        '＠ホーム　シミュレーションOPL優勝',
        '＠ホーム　ドメスティックオープンプラットフォームリーグ初参加',
      ].join('\n'),
      en: ['Education League 2nd place @Home', 'Open Platform League 1st place @Home'].join('\n'),
    },
    image: '/images/about/history/2023-05.jpg',
  },
  {
    date: '2022',
    title: { ja: 'ロボカップジャパンオープン2022', en: 'RoboCup Japan Open 2022' },
    details: {
      ja: [
        '＠ホーム　エデュケーションリーグ　準優勝',
        '＠ホーム　オープンプラットフォームリーグ　優勝',
        '＠ホーム　シミュレーションOPL優勝',
      ].join('\n'),
      en: ['Education League 2nd place @Home', 'Open Platform League 1st place @Home'].join('\n'),
    },
    image: '/images/about/history/2022.jpg',
  },
  {
    date: '2021',
    title: { ja: 'ロボカップアジアパシフィック2021', en: 'RoboCup Asia Pacific 2021' },
    details: {
      ja: [
        '＠ホーム　シミュレーション　OPL　準優勝',
        '＠ホーム　シミュレーション　テクニカルチャレンジ　優勝',
        '＠ホーム　エデュケーションリーグ　優勝',
        '＠ホーム　オープンプラットフォームリーグ　準優勝',
      ].join('\n'),
      en: [
        'Simulation League OPL 2nd place @Home',
        'Simulation League technical challenge 1st place @Home',
        'Education League 1st place @Home',
        'Open Platform League 2nd place @Home',
      ].join('\n'),
    },
    image: '/images/about/history/2021.jpg',
  },
  {
    date: '2020',
    title: { ja: 'ロボカップジャパンオープン2020', en: 'RoboCup Japan Open 2020' },
    details: {
      ja: [
        '＠ホーム　シミュレーション　OPL　優勝',
        '＠ホーム　シミュレーション　テクニカルチャレンジ　3位入賞',
        '＠ホーム　シミュレーション　DSPL　準優勝',
        '＠ホーム　エデュケーションリーグ　優勝',
        '＠ホーム　オープンプラットフォームリーグ　3位入賞',
      ].join('\n'),
      en: [
        'Simulation League OPL 1st place @Home',
        'Simulation League technical challenge 3rd place @Home',
        'Simulation League DSPL 2nd place @Home',
        'Education League 1st place @Home',
        'Open Platform League 1st place @Home',
      ].join('\n'),
    },
    image: '/images/about/history/2020.jpg',
  },
  {
    date: '2019',
    title: { ja: 'ロボカップジャパンオープン2019 ながおか', en: 'RoboCup Japan Open 2019 in Nagaoka' },
    details: { ja: '＠ホーム　シミュレーションリーグ　優勝', en: 'Simulation League 1st place @Home' },
    image: '/images/about/history/2019.jpg',
  },
  {
    date: '2018.10',
    title: { ja: 'World Robot Summit 2018', en: 'World Robot Summit 2018' },
    details: {
      ja: 'Service robotics category Partner robot challenge Virtual space 2nd Place',
      en: 'Service robotics category Partner robot challenge Virtual space 2nd Place',
    },
    image: '/images/about/history/2018-10.jpg',
  },
  {
    date: '2018.5',
    title: { ja: 'ロボカップジャパンオープン2018 おおがき', en: 'RoboCup Japan Open 2018 Ogaki' },
    details: {
      ja: ['＠ホーム　エデュケーションリーグ　優勝', '＠ホーム　シミュレーションリーグ　優勝'].join('\n'),
      en: ['Simulation League 1st place @Home', 'Education League 1st place @Home'].join('\n'),
    },
    image: '/images/about/history/2018-05.jpg',
  },
  {
    date: '2017',
    title: { ja: 'ロボカップジャパンオープン2017 (名城大学)', en: 'RoboCup Japan Open 2017 in Meijo University' },
    details: { ja: '＠ホーム　シミュレーションリーグ　優勝', en: 'Simulation League 1st place @Home' },
    image: '/images/about/history/2017.jpg',
  },
  {
    date: '2016',
    title: { ja: 'ロボカップジャパンオープン2016愛知', en: 'RoboCup Japan Open 2016 in Aichi' },
    details: { ja: '＠ホーム　シミュレーションリーグ　準優勝', en: 'Simulation League 2nd place @Home' },
    image: '/images/about/history/2016.jpg',
  },
  {
    date: '2015',
    title: { ja: 'ロボカップジャパンオープン2015福井', en: 'RoboCup Japan Open 2015 in Fukui' },
    details: { ja: '＠ホーム　シミュレーションリーグ　優勝', en: 'Simulation League 1st place @Home' },
    image: '/images/about/history/2015.jpg',
  },
  {
    date: '2014',
    title: { ja: 'ロボカップジャパンオープン2014', en: 'RoboCup Japan Open 2014' },
    details: { ja: '＠ホーム　シミュレーションリーグ　優勝', en: 'Simulation League 1st place @Home' },
    image: '/images/about/history/2014.png',
  },
  {
    date: '2013',
    title: { ja: 'ロボカップジャパンオープン2013東京', en: 'RoboCup Japan Open 2013 in Tokyo' },
    details: { ja: '＠ホーム　シミュレーションリーグ　優勝', en: 'Simulation League 1st place @Home' },
    image: '/images/about/history/2013.jpg',
  },
  {
    date: '2012.5',
    title: { ja: 'ロボカップジャパンオープン2012大阪', en: 'RoboCup Japan Open 2012 in Osaka' },
    details: { ja: '@ホーム部門 Innovation Award 受賞', en: 'Innovation Award in the @Home category' },
    image: '/images/about/history/2012-05.jpg',
  },
  {
    date: '2012.4',
    title: { ja: '崔先生が教授に就任', en: 'Dr. Choi appointed Professor' },
    image: '/images/about/history/2012-04.jpg',
  },
  {
    date: '2011',
    title: { ja: 'ロボカップジャパンオープン2011大阪', en: 'RoboCup Japan Open 2011 in Osaka' },
    details: { ja: '＠ホームリーグ　4位入賞', en: '4th Place in @Home League' },
    image: '/images/about/history/2011.png',
  },
  {
    date: '2010',
    title: { ja: 'SOBITS結成', en: 'SOBITS formed' },
    image: '/images/about/history/2010.jpg',
  },
  {
    date: '2006',
    title: { ja: '崔先生が准教授に就任', en: 'Dr. Choi appointed Associate Professor' },
    image: '/images/about/history/2006.jpg',
  },
  {
    date: '2000',
    title: {
      ja: '崔先生が講師に就任\n崔研究室設立',
      en: 'Dr. Choi was appointed as an instructor.\nEstablished Choi Laboratory',
    },
    image: '/images/about/history/2000.jpg',
  },
]

/** RoboCup の欄に載せる、出場資格審査用の動画（YouTube）。先頭のものだけをページに埋め込み、残りはリンクにする */
export const QUALIFICATION_VIDEOS: { title: string; youtubeId: string }[] = [
  { title: 'SOBITS 2026 Qualification Video', youtubeId: 'lC7Ppz0_oMU' },
  { title: 'SOBITS 2024 Qualification Video', youtubeId: 'iAZ9yIX03NY' },
  { title: 'SOBITS 2023 Qualification Video', youtubeId: 'brRIAtdjFRw' },
]

/** RoboCup の欄に載せる Team Description Paper（public/ からのパス） */
export const TEAM_DESCRIPTION_PAPERS: { title: string; file: string }[] = [
  { title: 'SOBITS 2026 Team Description Paper', file: '/documents/sobits-2026-team-description-paper.pdf' },
  { title: 'SOBITS 2024 Team Description Paper', file: '/documents/sobits-2024-team-description-paper.pdf' },
  { title: 'SOBITS 2023 Team Description Paper', file: '/documents/sobits-2023-team-description-paper.pdf' },
]
