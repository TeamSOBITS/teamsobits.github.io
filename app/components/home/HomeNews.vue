<script setup lang="ts">
/** トップの「NEWS」: 新しい順に3件表示する */
import { NEWS } from '~/data/news'

const { locale } = useI18n()

const latest = computed(() =>
  [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3),
)

/** 2025-05-17 → 2025.05.17 */
const formatDate = (date: string) => date.replaceAll('-', '.')
</script>

<template>
  <section class="news">
    <div class="container">
      <ShuffleText tag="h2" class="heading" :text="$t('home.news.heading')" />
      <div v-reveal>
        <div>
          <ul class="list">
            <li v-for="item in latest" :key="item.date">
              <NuxtLinkLocale :to="`/news/${item.date}`" class="item">
                <time :datetime="item.date">{{ formatDate(item.date) }}</time>
                <span>{{ locale === 'ja' ? item.title.ja : item.title.en }}</span>
              </NuxtLinkLocale>
            </li>
          </ul>
          <LinkButton to="/news" class="more" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news {
  padding-block: var(--space-7);
}

.heading {
  margin-bottom: var(--space-5);
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  letter-spacing: 0.08em;
  color: var(--color-brand-deep);
}

.list {
  border-top: 1px solid #dde1e8;
}

.item {
  display: grid;
  gap: var(--space-1);
  padding: var(--space-4) var(--space-2);
  border-bottom: 1px solid #dde1e8;
  transition: background-color 0.2s;
}

.item:hover {
  background: var(--color-surface-alt);
}

.item time {
  font-family: var(--font-display);
  letter-spacing: 0.08em;
  color: var(--color-accent);
}

@media (min-width: 768px) {
  .item {
    grid-template-columns: 9rem 1fr;
    gap: var(--space-4);
  }
}

.more {
  margin-top: var(--space-5);
}
</style>
