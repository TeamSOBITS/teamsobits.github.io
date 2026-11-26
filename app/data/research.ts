/**
 * 研究ページのデータ（仮置き）
 *
 * 研究プロジェクトの一覧。研究ページにだけ表示する（About ページは研究ページの /research#projects へ案内するだけ）。
 * プロジェクトを追加するときは、配列に1項目足し、画像を public/images/research/ に置く。
 * 段落は空行（\n\n）で区切る。
 *
 * TODO: データ形式（YAML / Nuxt Content など）を検討中。決まったら置き換える。
 */
import {
  siCplusplus,
  siDocker,
  siGit,
  siGithub,
  siJavascript,
  siPython,
  siRos,
  siUbuntu,
  type SimpleIcon,
} from 'simple-icons'
import type { Localized } from '~/composables/useLocalized'

export interface ResearchProject {
  /** ページ内リンクに使う id（例: /research#guider） */
  id: string
  /** プロジェクト名（日英共通） */
  name: string
  /** 画像のパス（public/ から） */
  image: string
  /** 説明。段落は \n\n で区切る */
  summary: Localized
}

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: 'guider',
    name: 'SOBITS Guider',
    image: '/images/research/guider.png',
    summary: {
      ja: 'Guiderでは、複数のロボットが案内・受付・配膳・会計の役割を分担し、データベースとロボット間通信で情報を共有しながら、多階層の建物の入口から店内の接客までを途切れなく行う案内・接客システムの研究開発を行っています。',
      en: 'In Guider, multiple robots share the roles of guidance, reception, serving, and payment, and share information through a database and inter-robot communication to provide uninterrupted guidance and customer service from the entrance of a multi-story building to the interior of the store.',
    },
  },
  {
    id: 'space',
    name: 'SOBITS @Space',
    image: '/images/research/space.png',
    summary: {
      ja: 'SOBITS @Spaceでは、宇宙飛行士の負担軽減のため、微小重力環境の宇宙ステーションで点検作業や撮影をロボットが自律的に行う研究をしています。私達はJAXAが提供しているシミュレータを用いて日々研究開発を行っています。',
      en: 'In SOBITS @Space, we are researching how robots can autonomously perform inspection and photography tasks in the microgravity environment of a space station to reduce the burden on astronauts. We conduct daily research and development using simulators provided by JAXA.',
    },
  },
  {
    id: 'sobit-x',
    name: 'SOBIT-X',
    image: '/images/research/sobit-x.png',
    summary: {
      ja: 'SOBIT-Xでは、画像と言葉から動作を生成するVLAや行動の結果を予測する世界行動モデル（WAM）を用いて、洗濯物をたたむ・食器を片付けるといった、より高度な家事をこなす移動ロボットの研究を行っています。',
      en: 'SOBIT-X uses VLA (Vision-Language-Action) and WAM (World Action Model) to generate actions from images and text, and to predict the outcomes of actions. The research focuses on developing mobile robots that can perform more advanced household tasks, such as folding laundry and organizing dishes.',
    },
  },
  {
    id: 'hactile-robotics',
    name: 'Hactile-Robotics',
    image: '/images/research/hactile-robotics.png',
    summary: {
      ja: 'Hactile-Roboticsでは，触覚センシング×ロボティクスにより，食品や生活雑貨などロボットが家庭環境で把持する多様な物体について，触覚情報に基づく適切な把持制御の実現を目指しています．',
      en: 'In Hactile-Robotics, we are researching how to achieve appropriate grasping control based on tactile information for a variety of objects that robots can grasp in a home environment, using the combination of tactile sensing and robotics.',
    },
  },
  {
    id: 'world-model',
    name: 'SOBITS World Model',
    image: '/images/research/world-model.png',
    summary: {
      ja: 'SOBITS World Modelでは、実環境の情報からロボットシミュレーション環境を構築し、Real2Sim2Realによって実世界とシミュレーションをつなぐことで、ロボット開発・検証の効率化を目指しています。',
      en: 'SOBITS World Model aims to construct a robot simulation environment from real-world information and connect the real world and simulation through Real2Sim2Real, thereby improving the efficiency of robot development and verification.',
    },
  },
]

/** GitHub カードに表示する技術のロゴ（simple-icons） */
export const OSS_TECHNOLOGIES: { label: string; icons: SimpleIcon[] }[] = [
  { label: 'Platforms', icons: [siUbuntu, siGit, siGithub, siDocker, siRos] },
  { label: 'Languages', icons: [siPython, siCplusplus, siJavascript] },
]
