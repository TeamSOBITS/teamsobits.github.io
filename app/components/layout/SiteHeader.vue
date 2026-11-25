<script setup lang="ts">
/**
 * サイト共通のヘッダー
 * - 画面上部に常に表示（固定）
 * - スマホ幅ではハンバーガーメニューになる
 */
const route = useRoute()
const menuOpen = ref(false)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') menuOpen.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))

// ページを移動したらメニューを閉じる
// （リンクを押したときは SiteNav の navigate でも閉じる。両方あるのは、それぞれ片方では拾えない場面があるため:
//   - 今いるページのリンクを押したとき → URL が変わらないので、この watch では閉じない
//   - ブラウザの「戻る」を押したとき → リンクを押していないので、navigate では閉じない）
watch(
  () => route.fullPath,
  () => (menuOpen.value = false),
)
</script>

<template>
  <header class="site-header" :class="{ 'is-open': menuOpen }">
    <div class="inner">
      <NuxtLinkLocale to="/" class="logo">
        <img src="/images/brand/logo-white.svg" alt="TeamSOBITS" width="72" height="45" />
      </NuxtLinkLocale>

      <button
        type="button"
        class="menu-button"
        aria-controls="site-menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span class="visually-hidden">{{ $t('common.menu') }}</span>
        <span class="bars" aria-hidden="true" />
      </button>

      <div id="site-menu" class="menu">
        <SiteNav @navigate="menuOpen = false" />
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  height: var(--header-height);
  background: var(--color-header);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-inline: var(--space-4);
}

.logo img {
  height: 45px;
  width: auto;
}

/* --- ハンバーガーボタン（スマホ・タブレット） --- */
.menu-button {
  position: relative;
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
}

.bars,
.bars::before,
.bars::after {
  position: absolute;
  left: 10px;
  width: 24px;
  height: 2px;
  background: currentColor;
  transition: transform 0.3s var(--ease-out);
}

.bars {
  top: 21px;
}

.bars::before,
.bars::after {
  content: '';
  left: 0;
}

.bars::before {
  transform: translateY(-8px);
}

.bars::after {
  transform: translateY(8px);
}

.is-open .bars {
  background: transparent;
}

.is-open .bars::before {
  transform: rotate(45deg);
  background: currentColor;
}

.is-open .bars::after {
  transform: rotate(-45deg);
}

/* --- メニュー（スマホ・タブレット: ヘッダーの下に開く） --- */
.menu {
  position: fixed;
  inset: var(--header-height) 0 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: var(--space-5) var(--space-4);
  overflow-y: auto;
  background: var(--color-header);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s,
    visibility 0.3s;
}

.is-open .menu {
  opacity: 1;
  visibility: visible;
}

/* --- PC: 横並び --- */
@media (min-width: 1024px) {
  .menu-button {
    display: none;
  }

  .menu {
    position: static;
    flex-direction: row;
    align-items: center;
    gap: var(--space-5);
    padding: 0;
    overflow: visible;
    background: none;
    opacity: 1;
    visibility: visible;
  }
}
</style>
