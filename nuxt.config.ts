// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n', '@nuxt/image'],

  // components/ 以下はサブフォルダ名を付けずにファイル名だけで使えるようにする
  // 例: components/layout/SiteHeader.vue → <SiteHeader />
  components: [{ path: '~/components', pathPrefix: false }],

  css: ['~/assets/css/tokens.css', '~/assets/css/base.css'],

  // ページ内リンク（# への移動）だけ、ぬるっとスクロールさせる。
  // CSS の scroll-behavior: smooth は別ページへ移るときの「一番上へ戻す」にも効いてしまうので使わない。
  // ページ内リンクは <a href="#..."> ではなく <NuxtLink :to="{ hash: '#...' }"> で書く（a だとブラウザが先に瞬時に飛ぶため）
  router: { options: { scrollBehaviorType: 'smooth' } },

  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Oswald:wght@500;700&display=swap',
        },
      ],
    },
  },

  i18n: {
    // 英語: /about   日本語: /ja/about
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    baseUrl: 'https://teamsobits.github.io',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ja', language: 'ja-JP', name: '日本語', file: 'ja.json' },
    ],
    // ブラウザの言語による自動リダイレクトはしない（要確認事項）
    detectBrowserLanguage: false,
  },

  image: {
    format: ['webp'],
    // 外部の画像も、書き出しのときに取ってきて縮小できるようにする（ロボットのアイコン＝各リポジトリの README の画像）
    domains: ['raw.githubusercontent.com'],
  },

  nitro: {
    preset: 'github_pages',
  },
})
