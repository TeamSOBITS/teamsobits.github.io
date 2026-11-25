/**
 * v-reveal ディレクティブ
 *
 * 使い方: <div v-reveal> ... </div>
 * 要素が画面に入ったときに一度だけ、色の帯が横切る演出をして中身を表示する。
 * 見た目は assets/css/base.css の [data-reveal] で定義している。
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement>('reveal', {
    // サーバー側で HTML を書き出すときにも data-reveal を付ける（表示前のちらつき防止）
    getSSRProps: () => ({ 'data-reveal': '' }),

    mounted(el) {
      el.setAttribute('data-reveal', '')
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add('is-revealed')
              observer.disconnect()
            }
          }
        },
        { threshold: 0.2 },
      )
      observer.observe(el)
    },
  })
})
