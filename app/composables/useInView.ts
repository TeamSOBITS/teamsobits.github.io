import type { Ref } from 'vue'

/**
 * 要素が画面に入ったら true になる（一度 true になったら戻らない）
 *
 * 例: const el = useTemplateRef('el'); const inView = useInView(el)
 */
export function useInView(target: Readonly<Ref<HTMLElement | null>>, threshold = 0.3) {
  const inView = ref(false)
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    if (!target.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          inView.value = true
          observer?.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(target.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return inView
}
