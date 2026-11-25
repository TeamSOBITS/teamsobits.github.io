<script setup lang="ts">
/**
 * トップ以外のページの大見出し（ページのタイトル）
 * 例: <PageHeader :title="t('research.title')" />
 */
defineProps<{ title: string }>()
</script>

<template>
  <header class="page-header">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
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
</style>
