<script setup lang="ts">
/** ニュース一覧ページ: 記事のカードを新しい順に並べる。記事は data/news.ts の NEWS で管理する */
import { NEWS } from '~/data/news'

const { t } = useI18n()
useSeoMeta({ title: () => t('news.title') })
</script>

<template>
  <div>
    <PageHeader :title="t('news.title')" />
    <ul class="cards container">
      <li v-for="item in NEWS" :key="item.date">
        <NewsCard :item="item" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-5) var(--space-4);
  padding-bottom: var(--space-6);
}
</style>
