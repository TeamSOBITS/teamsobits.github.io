<script setup lang="ts">
/** トップの「NEWS」: 新しい順に3件表示する */
import { NEWS } from '~/data/news'

const localize = useLocalized()

const latest = computed(() =>
  [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3),
)
</script>

<template>
  <section class="news">
    <div class="container">
      <h2 class="heading">{{ $t('home.news.heading') }}</h2>
      <ul class="list">
        <li v-for="item in latest" :key="item.date">
          <NuxtLinkLocale :to="`/news/${item.date}`" class="item">
            <time :datetime="item.date">{{ formatDate(item.date) }}</time>
            <span>{{ localize(item.title) }}</span>
          </NuxtLinkLocale>
        </li>
      </ul>
      <LinkButton to="/news" class="more" />
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
  color: var(--color-heading);
}

.list {
  border-top: 1px solid var(--color-border);
}

.item {
  display: grid;
  gap: var(--space-1);
  padding: var(--space-4) var(--space-2);
  border-bottom: 1px solid var(--color-border);
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
