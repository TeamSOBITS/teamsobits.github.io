<script setup lang="ts">
/**
 * 画面に入ったとき、文字がランダムに入れ替わりながら左から確定していく演出
 * 例: <ShuffleText tag="h2" text="NEWS" />
 */
const props = withDefaults(
  defineProps<{
    text: string
    /** 出力するタグ（h1, h2, span など） */
    tag?: string
    /** 演出にかける時間（ミリ秒） */
    duration?: number
  }>(),
  { tag: 'span', duration: 900 },
)

const RANDOM_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const el = useTemplateRef<HTMLElement>('el')
const inView = useInView(el)
const display = ref(props.text)
let frame = 0

function play() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const chars = [...props.text]
  const start = performance.now()

  const step = (now: number) => {
    const progress = Math.min((now - start) / props.duration, 1)
    const fixedCount = Math.floor(progress * chars.length)
    display.value = chars
      .map((char, i) =>
        i < fixedCount || char === ' '
          ? char
          : RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)],
      )
      .join('')
    if (progress < 1) frame = requestAnimationFrame(step)
  }
  frame = requestAnimationFrame(step)
}

watch(inView, (visible) => visible && play())
watch(
  () => props.text,
  (text) => (display.value = text),
)
onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <!-- 読み上げソフトには演出中の文字ではなく本来の文字を読ませる -->
  <component :is="tag" ref="el" :aria-label="text">
    <span aria-hidden="true">{{ display }}</span>
  </component>
</template>
