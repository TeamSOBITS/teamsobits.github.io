<script setup lang="ts">
/**
 * 「More」ボタン
 * to には言語の接頭辞を除いたパスを渡す（例: "/about"）。label を省略すると「More」になる
 */
defineProps<{ to: string; label?: string }>()
</script>

<template>
  <NuxtLinkLocale :to="to" class="more-button">
    <span>{{ label ?? $t('common.more') }}</span>
    <svg viewBox="0 0 24 8" aria-hidden="true"><path d="M0 7h22L16 1" /></svg>
  </NuxtLinkLocale>
</template>

<style scoped>
.more-button {
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

.more-button svg {
  width: 28px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  transition: transform 0.3s var(--ease-out);
}

.more-button:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #fff;
}

.more-button:hover svg {
  transform: translateX(6px);
}
</style>
