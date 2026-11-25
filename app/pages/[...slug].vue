<script setup lang="ts">
/**
 * まだ移植していないページ用の「準備中」ページ
 * TODO: すべてのページを移植したら 404 ページに置き換える
 */
const { t } = useI18n()
useSeoMeta({ title: () => t('common.comingSoon.title'), robots: 'noindex' })
</script>

<template>
  <section class="coming-soon container">
    <h1>{{ t('common.comingSoon.title') }}</h1>
    <p>{{ t('common.comingSoon.body') }}</p>
    <MoreButton to="/" :label="t('common.comingSoon.back')" class="back" />
  </section>
</template>

<style scoped>
.coming-soon {
  padding-block: var(--space-7);
  text-align: center;
}

h1 {
  margin-bottom: var(--space-3);
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  color: var(--color-brand-deep);
}

.back {
  margin-top: var(--space-5);
}
</style>
