<script setup lang="ts">
/**
 * ニュースの記事ページ（URL は /news/2025-05-17 のように日付）
 * 記事は data/news.ts の NEWS で管理する。ファイル名の [date] は Nuxt の決まりで、URL のその部分が route.params.date に入る
 */
import { NEWS } from '~/data/news'

const route = useRoute()
const { t } = useI18n()
const localize = useLocalized()

const item = NEWS.find((news) => news.date === route.params.date)
if (!item) throw createError({ statusCode: 404, statusMessage: 'Not Found' })

useSeoMeta({ title: () => localize(item.title) })

/** データでは空行（\n\n）で段落を区切っている */
const paragraphs = computed(() => localize(item.body).split('\n\n'))
</script>

<template>
  <article class="news-article container">
    <header class="header">
      <time :datetime="item.date" class="date">{{ formatDate(item.date) }}</time>
      <h1 class="title">{{ localize(item.title) }}</h1>
    </header>

    <div v-if="item.images.length" class="images">
      <NuxtImg
        v-for="image in item.images"
        :key="image"
        :src="image"
        alt=""
        class="image"
        sizes="xs:100vw sm:100vw md:100vw lg:800px xl:800px"
        format="webp"
      />
    </div>

    <div class="body">
      <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
    </div>

    <YouTubeVideo v-if="item.youtubeId" :id="item.youtubeId" :title="localize(item.title)" class="video" />

    <div class="links">
      <LinkButton v-if="item.sourceUrl" :to="item.sourceUrl" :label="t('news.source')" target="_blank" />
      <LinkButton to="/news" :label="t('news.back')" />
    </div>
  </article>
</template>

<style scoped>
.news-article {
  max-width: 800px;
  padding-block: var(--space-6);
}

.header {
  margin-bottom: var(--space-5);
}

.date {
  font-family: var(--font-display);
  letter-spacing: 0.08em;
  color: var(--color-ink-muted);
}

.title {
  margin-top: var(--space-2);
  font-size: var(--text-xl);
  line-height: 1.5;
  color: var(--color-heading);
}

.images {
  display: grid;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.image {
  width: 100%;
  height: auto;
  border-radius: var(--radius-image);
}

.body p {
  line-height: 1.9;
  /* 段落の中の改行（\n）をそのまま改行として表示する */
  white-space: pre-line;
}

.body p + p {
  margin-top: var(--space-3);
}

.video {
  margin-top: var(--space-5);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-6);
}
</style>
