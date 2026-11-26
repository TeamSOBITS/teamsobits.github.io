<script setup lang="ts">
/**
 * トップ以外のページの大見出し（ページのタイトル）
 * 例: <PageHeader :title="t('research.title')" />
 *     <PageHeader title="About" subtitle="Robot for happiness" />  → タイトルの下に小さく副題を出す
 */
defineProps<{
  title: string
  /** タイトルの下に出す副題。省略すると出さない */
  subtitle?: string
}>()
</script>

<template>
  <header class="page-header">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
    </div>
  </header>
</template>

<style scoped>
.page-header {
  padding-block: var(--space-6);
}

.title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  line-height: 1.1;
  letter-spacing: 0.04em;
}

.subtitle {
  margin-top: var(--space-2);
  color: var(--color-ink-muted);
  letter-spacing: 0.04em;
}
</style>
