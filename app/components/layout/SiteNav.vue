<script setup lang="ts">
/**
 * ヘッダーのメニュー（About、Research などのリンクの並び）
 * PC 幅では横並び＋ドロップダウン、スマホ幅では縦並びになる。
 */

import { NAVIGATION } from '~/data/site'

// リンクが押されたことを親（SiteHeader）に知らせる。スマホのメニューを閉じるのに使う
defineEmits<{ navigate: [] }>()
</script>

<template>
  <nav class="site-nav" aria-label="Global">
    <ul class="nav-list">
      <li
        v-for="item in NAVIGATION"
        :key="item.to"
        class="nav-item"
        :class="{ 'has-children': item.children }"
      >
        <NuxtLinkLocale :to="item.to" class="nav-link" @click="$emit('navigate')">
          {{ item.label }}
        </NuxtLinkLocale>
        <ul v-if="item.children" class="sub-list">
          <li v-for="child in item.children" :key="child.to">
            <NuxtLinkLocale :to="child.to" class="sub-link" @click="$emit('navigate')">
              {{ child.label }}
            </NuxtLinkLocale>
          </li>
        </ul>
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

.sub-link {
  display: block;
  font-size: var(--text-sm);
}

/* --- スマホ・タブレット: 縦並び --- */
.nav-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.sub-list {
  padding: var(--space-2) 0 0 var(--space-3);
  border-left: 1px solid var(--color-border);
  margin-top: var(--space-2);
}

.sub-list li + li {
  margin-top: var(--space-2);
}

/* --- PC: 横並び＋ドロップダウン --- */
@media (min-width: 1024px) {
  .nav-list {
    flex-direction: row;
    gap: var(--space-4);
  }

  .nav-item {
    position: relative;
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

  .sub-list {
    position: absolute;
    top: 100%;
    left: 50%;
    min-width: 280px;
    margin: 0;
    padding: var(--space-2) 0;
    border: none;
    background: var(--color-header);
    box-shadow: 0 8px 24px rgb(0 0 0 / 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, 8px);
    transition:
      opacity 0.2s,
      transform 0.2s,
      visibility 0.2s;
  }

  .has-children:hover .sub-list,
  .has-children:focus-within .sub-list {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }

  .sub-list li + li {
    margin: 0;
  }

  .sub-link {
    padding: var(--space-2) var(--space-4);
  }

  .sub-link:hover {
    background: rgb(255 255 255 / 0.08);
  }
}
</style>
