<script setup lang="ts">
/**
 * ヘッダーのメニュー（About、Research などのリンクの並び）
 * PC 幅では横並び、スマホ幅では縦並びになる。
 */

import { NAVIGATION } from '~/data/site'

// リンクが押されたことを親（SiteHeader）に知らせる。スマホのメニューを閉じるのに使う
defineEmits<{ navigate: [] }>()
</script>

<template>
  <nav class="site-nav" aria-label="Global">
    <ul class="nav-list">
      <li v-for="item in NAVIGATION" :key="item.to">
        <NuxtLinkLocale :to="item.to" class="nav-link" @click="$emit('navigate')">
          {{ item.label }}
        </NuxtLinkLocale>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-link {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-lg);
  letter-spacing: 0.08em;
}

.nav-link.router-link-exact-active {
  color: var(--color-accent);
}

/* --- スマホ・タブレット: 縦並び --- */
.nav-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* --- PC: 横並び --- */
@media (min-width: 1024px) {
  .nav-list {
    flex-direction: row;
    gap: var(--space-4);
  }

  .nav-link {
    font-size: var(--text-base);
    padding-block: var(--space-2);
    position: relative;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s var(--ease-out);
  }

  .nav-link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>
