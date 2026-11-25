<script setup lang="ts">
/**
 * 矢印付きのリンクボタン（例：「More →」）
 *
 * 使い方:
 *   <LinkButton to="/about" />                    → 「More」と表示
 *   <LinkButton to="/" label="トップへ戻る" />    → 好きな文字を表示
 *
 * to にはリンク先のパスを書く。日本語のページにいるときは、自動で /ja/about のように
 * 日本語版へのリンクになるので、"/ja" は書かなくてよい（書くと英語のページからも日本語版に飛んでしまう）。
 */
defineProps<{
  /** リンク先のパス（例: "/about"）。"/ja" は付けない */
  to: string
  /** ボタンの文字。省略すると「More」 */
  label?: string
}>()
</script>

<template>
  <NuxtLinkLocale :to="to" class="link-button">
    <span>{{ label ?? $t('common.more') }}</span>
    <svg viewBox="0 0 24 8" aria-hidden="true"><path d="M0 7h22L16 1" /></svg>
  </NuxtLinkLocale>
</template>

<style scoped>
.link-button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  border: 1px solid currentColor;
  font-family: var(--font-display);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.link-button svg {
  width: 28px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  transition: transform 0.3s var(--ease-out);
}

.link-button:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #fff;
}

.link-button:hover svg {
  transform: translateX(6px);
}
</style>
