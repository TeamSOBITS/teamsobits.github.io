/**
 * メンバー（People）ページのデータ（仮置き）
 *
 * 1人＝1項目。ページでは、欄（教員・博士・修士・学士）に分け、学年 → 研究室 → 名前（英語）の順に自動で並べる。
 * そのため、ここに書く順番は気にしなくてよい。
 * 写真は public/images/people/ に置き、image にパスを書く。省略すると代わりの画像（default.png）が出る。
 * 研究テーマとスキルは日本語だけ（日英どちらのページにも同じ文を出す）。
 *
 * 写真の名前（{研究室}-{学年}-{名前}）は、旧サイトでメンバーの一覧（CSV）から作っていた id と同じ。
 *
 * TODO: データ形式（YAML / Nuxt Content など）と、毎年の入れ替えの流れ（Google フォーム → CSV → 変換）を検討中。
 */
import type { Localized } from '~/composables/useLocalized'

/** 学年。Faculty は教員、D は博士課程、M は修士課程、B は学士課程 */
export type Grade = 'Faculty' | 'D3' | 'D2' | 'D1' | 'M2' | 'M1' | 'B4' | 'B3'

/** 研究室。表示名は翻訳ファイルの people.labs */
export type Lab = 'choi' | 'hagiwara'

export interface Person {
  /** 一人ひとりを見分ける名前（{研究室}-{学年}-{名前}） */
  id: string
  /** 名前（日本語は「姓 名」、英語は「SURNAME Given」） */
  name: Localized
  grade: Grade
  lab: Lab
  /** 研究テーマ（任意。日英共通） */
  researchTopic?: string
  /** スキル（任意。日英共通） */
  skills?: string
  /** 写真のパス（public/ から。任意） */
  image?: string
}

/**
 * 並べる順番。この配列の順に、学年・研究室を並べる
 * （学年を足すときは Grade と GRADE_ORDER の両方に足す）
 */
export const GRADE_ORDER: Grade[] = ['Faculty', 'D3', 'D2', 'D1', 'M2', 'M1', 'B4', 'B3']
export const LAB_ORDER: Lab[] = ['choi', 'hagiwara']

/**
 * ページの欄。学年の頭文字で分ける。id は翻訳ファイルの見出し（people.sections.faculty など）に使う
 */
export const PEOPLE_SECTIONS: { id: string; grades: Grade[] }[] = [
  { id: 'faculty', grades: ['Faculty'] },
  { id: 'doctoral', grades: ['D3', 'D2', 'D1'] },
  { id: 'master', grades: ['M2', 'M1'] },
  { id: 'bachelor', grades: ['B4', 'B3'] },
]

export const PEOPLE: Person[] = [
  {
    id: 'choi_lab-m2-adachi_daichi',
    name: { ja: '足立 大地', en: 'ADACHI Daichi' },
    grade: 'M2',
    lab: 'choi',
    researchTopic: 'ステレオカメラによる距離計測システム',
    image: '/images/people/choi_lab-m2-adachi_daichi.jpeg',
  },
  {
    id: 'choi_lab-m2-hanajima_yusaku',
    name: { ja: '花嶋 優作', en: 'HANAJIMA Yusaku' },
    grade: 'M2',
    lab: 'choi',
    researchTopic: 'ヘテロコア光ファイバセンサ、触覚センシング、制御、ものづくり工学',
    skills: '3DCAD、3Dプリンタ、CAM、CNC、CAE解析',
    image: '/images/people/choi_lab-m2-hanajima_yusaku.jpeg',
  },
  {
    id: 'choi_lab-m2-suzuki_seito',
    name: { ja: '鈴木 誠人', en: 'SUZUKI Seito' },
    grade: 'M2',
    lab: 'choi',
    researchTopic: '案内ロボット開発',
    image: '/images/people/choi_lab-m2-suzuki_seito.jpeg',
  },
  {
    id: 'choi_lab-m2-yuhashi_kazuaki',
    name: { ja: '油橋 和明', en: 'YUHASHI Kazuaki' },
    grade: 'M2',
    lab: 'choi',
    researchTopic: '複数カメラによる人物の位置情報を用いた人数計測手法の開発',
    skills: '画像処理',
  },
  {
    id: 'hagiwara_lab-m2-sim_jiahao',
    name: { ja: 'シム ジアハオ', en: 'SIM Jiahao' },
    grade: 'M2',
    lab: 'hagiwara',
    researchTopic: '言語・視覚情報と3次元環境理解に基づくモバイルマニピュレータの知能化',
    skills: 'Python, C++, ROS / ROS 2, Linux, Git / GitHub, Docker, SLAM, 3D Semantic Mapping, 3D Gaussian Splatting, LLM / VLM / VLA',
    image: '/images/people/hagiwara_lab-m2-sim_jiahao.jpeg',
  },
  {
    id: 'hagiwara_lab-m2-wang_zhenyu',
    name: { ja: '王 振宇', en: 'WANG Zhenyu' },
    grade: 'M2',
    lab: 'hagiwara',
    researchTopic: 'セマンティックマップおよびロボットの環境・状況理解に関する研究開発',
  },
  {
    id: 'choi_lab-m1-jochi_ryo',
    name: { ja: '城地 遼', en: 'JOCHI Ryo' },
    grade: 'M1',
    lab: 'choi',
    researchTopic: '宇宙船内ロボットの自律移動',
    skills: 'ROS2, Docker, Python, GitHub, Claude Code',
    image: '/images/people/choi_lab-m1-jochi_ryo.jpeg',
  },
  {
    id: 'choi_lab-m1-lee_junho',
    name: { ja: 'イ ジュンホ', en: 'LEE Junho' },
    grade: 'M1',
    lab: 'choi',
    researchTopic: 'ロボット基盤モデル',
    skills: 'ロボット設計とモデリング(CAD, 3dプリンタ)，VR遠隔操作',
    image: '/images/people/choi_lab-m1-lee_junho.jpeg',
  },
  {
    id: 'choi_lab-m1-shigemori_masao',
    name: { ja: '重森 正夫', en: 'Shigemori Masao' },
    grade: 'M1',
    lab: 'choi',
    researchTopic: '画像認識、アプリケーション開発',
    image: '/images/people/choi_lab-m1-shigemori_masao.jpeg',
  },
  {
    id: 'choi_lab-m1-tanaka_yuto',
    name: { ja: '田中 優斗', en: 'TANAKA Yuto' },
    grade: 'M1',
    lab: 'choi',
    researchTopic: '移動機構、シミュレータ',
    image: '/images/people/choi_lab-m1-tanaka_yuto.jpeg',
  },
  {
    id: 'choi_lab-m1-yasufuku_kazuki',
    name: { ja: '安福一輝', en: 'YASUFUKU Kazuki' },
    grade: 'M1',
    lab: 'choi',
    researchTopic: '人物識別、ロボットカフェ、個別配膳、シミュレーター、アルタブマップ',
    skills: 'DiscordBot、GAS、3Dプリンター、要旨添削',
    image: '/images/people/choi_lab-m1-yasufuku_kazuki.jpeg',
  },
  {
    id: 'hagiwara_lab-m1-lucas_da_mota_bruno',
    name: { ja: 'ダ モタ ブルノ ルーカス', en: 'Lucas da Mota Bruno' },
    grade: 'M1',
    lab: 'hagiwara',
    researchTopic: '生活支援ロボットの長期タスクプランニング、LLMチェイニング、言語・視覚情報の意味的グラウンディング',
    skills: '生活支援ロボット開発（Toyota HSR）、LLMベースのタスクプランニング、画像処理・OCR、ROS 2、Gazebo、Docker、GitHub、VS Code',
    image: '/images/people/hagiwara_lab-m1-lucas_da_mota_bruno.jpeg',
  },
  {
    id: 'hagiwara_lab-m1-masuda_sota',
    name: { ja: '増田 創太', en: 'MASUDA Sota' },
    grade: 'M1',
    lab: 'hagiwara',
    researchTopic: 'マルチモーダル情報を用いた多人数環境における話しかけ者推定',
    image: '/images/people/hagiwara_lab-m1-masuda_sota.jpeg',
  },
  {
    id: 'hagiwara_lab-m1-sato_kenta',
    name: { ja: '佐藤健太', en: 'SATO Kenta' },
    grade: 'M1',
    lab: 'hagiwara',
    researchTopic: 'ロボット基盤モデル',
    skills: 'Python GitHub Docker',
    image: '/images/people/hagiwara_lab-m1-sato_kenta.jpeg',
  },
  {
    id: 'choi_lab-faculty-choi_yongwoon',
    name: { ja: '崔 龍雲', en: 'CHOI Yongwoon' },
    grade: 'Faculty',
    lab: 'choi',
    researchTopic: 'ステレオカメラによる距離計測システム',
    image: '/images/people/choi_lab-faculty-choi_yongwoon.jpeg',
  },
  {
    id: 'hagiwara_lab-faculty-hagiwara_yoshinobu',
    name: { ja: '萩原 良信', en: 'HAGIWARA Yoshinobu' },
    grade: 'Faculty',
    lab: 'hagiwara',
    researchTopic: '知覚情報処理・知能情報学・知能ロボティクス・記号創発ロボティクス',
    image: '/images/people/hagiwara_lab-faculty-hagiwara_yoshinobu.jpeg',
  },
  {
    id: 'hagiwara_lab-d2-valentin_keith',
    name: { ja: 'バレンティン ケイト', en: 'VALENTIN Keith' },
    grade: 'D2',
    lab: 'hagiwara',
    researchTopic: '異種ロボットにおけるMorphology学習とそのBehavior Learning',
    skills: 'ロボット設計とモデリング(CAD, 3dプリンタ)，電子回路工作，ロボット制御，データ駆動学習(RL/VLA/WAM)，シミュレータ構築',
    image: '/images/people/hagiwara_lab-d2-valentin_keith.jpeg',
  },
  {
    id: 'hagiwara_lab-d1-ikeda_yuki',
    name: { ja: '池田 勇輝', en: 'IKEDA Yuki' },
    grade: 'D1',
    lab: 'hagiwara',
    researchTopic: '宇宙における知能ロボティクス',
  },
  {
    id: 'choi_lab-b4-hosaka_yuko',
    name: { ja: '保坂 優子', en: 'HOSAKA Yuko' },
    grade: 'B4',
    lab: 'choi',
    researchTopic: '実機ロボット教材SOBIT-Beginを用いた計算論 的思考力の育成と評価',
    skills: 'Python, C++, Java/JavaScript, HTML, ROS2, GitHub, Webサイト・アプリ開発, データサイエンス',
    image: '/images/people/choi_lab-b4-hosaka_yuko.jpeg',
  },
  {
    id: 'choi_lab-b4-ito_masahide',
    name: { ja: '伊藤 匡秀', en: 'ITO Masahide' },
    grade: 'B4',
    lab: 'choi',
    researchTopic: 'VLA学習データ品質評価のための物体可視率自動算出手法の検証',
    image: '/images/people/choi_lab-b4-ito_masahide.jpeg',
  },
  {
    id: 'choi_lab-b4-kaneda_yua',
    name: { ja: '金田 優空', en: 'KANEDA Yua' },
    grade: 'B4',
    lab: 'choi',
    researchTopic: '人追従システム、自己位置推定',
    image: '/images/people/choi_lab-b4-kaneda_yua.jpeg',
  },
  {
    id: 'choi_lab-b4-kobayashi_kazuma',
    name: { ja: '小林 和真', en: 'KOBAYASHI Kazuma' },
    grade: 'B4',
    lab: 'choi',
    researchTopic: 'エレベーターにおけるWi-Fiによる階層認識',
    skills: 'データベース, GitHub, Docker',
    image: '/images/people/choi_lab-b4-kobayashi_kazuma.jpeg',
  },
  {
    id: 'choi_lab-b4-lee_yunwoo',
    name: { ja: 'イ ユンウ', en: 'LEE Yunwoo' },
    grade: 'B4',
    lab: 'choi',
    researchTopic: 'Sim2Real',
    image: '/images/people/choi_lab-b4-lee_yunwoo.jpeg',
  },
  {
    id: 'choi_lab-b4-murakami_yoko',
    name: { ja: '村上 世佑子', en: 'MURAKAMI Yoko' },
    grade: 'B4',
    lab: 'choi',
    researchTopic: 'コミュニケーションロボット、記憶構築、画像処理',
    skills: 'github、HTML、css、python、ros1,ros2、ゲーム作成、障害者支援、高校生教育',
    image: '/images/people/choi_lab-b4-murakami_yoko.jpeg',
  },
  {
    id: 'hagiwara_lab-b4-hamachi_daiyo',
    name: { ja: '濵地 大洋', en: 'HAMACHI Daiyo' },
    grade: 'B4',
    lab: 'hagiwara',
    researchTopic: '場所概念モデル',
    image: '/images/people/hagiwara_lab-b4-hamachi_daiyo.jpeg',
  },
  {
    id: 'hagiwara_lab-b4-hibiki_tsuchiya',
    name: { ja: '土屋 響', en: 'TSUCHIYA Hibiki' },
    grade: 'B4',
    lab: 'hagiwara',
  },
  {
    id: 'hagiwara_lab-b4-okitani_mizuho',
    name: { ja: '沖谷 瑞保', en: 'OKITANI Mizuho' },
    grade: 'B4',
    lab: 'hagiwara',
    researchTopic: 'マルチモーダル人物概念に基づく長期的なサービスロボットのための人物理解・個人化',
    skills: 'Python, C++, ROS 2, Computer Vision, Multimodal Learning, CLIP, CLAP, YOLO, Nav2,  PostgreSQL, Docker',
    image: '/images/people/hagiwara_lab-b4-okitani_mizuho.jpeg',
  },
  {
    id: 'hagiwara_lab-b4-owada_kaiji',
    name: { ja: '大和田 海慈', en: 'OWADA Kaiji' },
    grade: 'B4',
    lab: 'hagiwara',
    researchTopic: '自動カリキュラム、クリーンアーキテクチャ',
    skills: 'GitHub, VSCode',
    image: '/images/people/hagiwara_lab-b4-owada_kaiji.jpeg',
  },
  {
    id: 'hagiwara_lab-b4-uema_yura',
    name: { ja: '上間 友愛', en: 'UEMA Yura' },
    grade: 'B4',
    lab: 'hagiwara',
    researchTopic: '音声、ロボット、セマンティック',
    image: '/images/people/hagiwara_lab-b4-uema_yura.jpeg',
  },
  {
    id: 'choi_lab-b3-nakane_masayuki',
    name: { ja: '中根正幸', en: 'NAKANE Masayuki' },
    grade: 'B3',
    lab: 'choi',
  },
  {
    id: 'choi_lab-b3-shikama_kentaro',
    name: { ja: '色摩 健太朗', en: 'SHIKAMA Kentaro' },
    grade: 'B3',
    lab: 'choi',
    researchTopic: '視覚言語モデル、自律移動',
  },
  {
    id: 'choi_lab-b3-zhang_haoran',
    name: { ja: '張 浩然', en: 'Zhang Haoran' },
    grade: 'B3',
    lab: 'choi',
    researchTopic: 'ロボカフェ開発',
    image: '/images/people/choi_lab-b3-zhang_haoran.jpeg',
  },
  {
    id: 'hagiwara_lab-b3-kajihara_shigenori',
    name: { ja: '梶原 成紀', en: 'KAJIHARA Shigenori' },
    grade: 'B3',
    lab: 'hagiwara',
    image: '/images/people/hagiwara_lab-b3-kajihara_shigenori.jpeg',
  },
  {
    id: 'hagiwara_lab-b3-okamoto_ayumi',
    name: { ja: '岡本 愛結', en: 'OKAMOTO Ayumi' },
    grade: 'B3',
    lab: 'hagiwara',
    skills: 'Unity,Blender,デザイン,イラスト',
  },
  {
    id: 'hagiwara_lab-b3-shiiba_yoshihisa',
    name: { ja: '椎葉 義寿', en: 'SHIIBA Yoshihisa' },
    grade: 'B3',
    lab: 'hagiwara',
    image: '/images/people/hagiwara_lab-b3-shiiba_yoshihisa.jpeg',
  },
  {
    id: 'hagiwara_lab-b3-yonemitsu_riko',
    name: { ja: '米満 莉子', en: 'YONEMITSU Riko' },
    grade: 'B3',
    lab: 'hagiwara',
    skills: 'ROS2，Python，Docker，GitHub，3D CAD（Onshape），基本情報技術者',
    image: '/images/people/hagiwara_lab-b3-yonemitsu_riko.jpeg',
  },
]
