<script setup lang="ts">
/**
 * ページの先頭へ戻るボタン（画面の左下に固定）
 * 一番上にいるときは役に立たないので、画面1枚分ほどスクロールしたら表示する
 */
const isVisible = ref(false)

const update = () => {
  isVisible.value = window.scrollY > window.innerHeight
}

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', update))

/** ぬるっと戻る。OS の「動きを減らす」設定がオンなら瞬時に戻る */
function backToTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' })
}
</script>

<template>
  <button
    type="button"
    class="back-to-top"
    :class="{ 'is-visible': isVisible }"
    :aria-label="$t('common.backToTop')"
    @click="backToTop"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
  </button>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  left: var(--space-4);
  bottom: var(--space-4);
  z-index: 50; /* ヘッダー（100）より下、ページの中身より上 */
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-header);
  color: var(--color-ink);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s,
    visibility 0.3s,
    background-color 0.2s;
}

.back-to-top.is-visible {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  background: var(--color-accent);
}

svg {
  width: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
}

@media (prefers-reduced-motion: reduce) {
  .back-to-top {
    transition: none;
  }
}
</style>
