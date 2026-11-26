<script setup lang="ts">
/** ニュース一覧のカード1枚: 写真（なければロゴ）・日付・見出し。押すと記事のページへ */
import type { NewsItem } from '~/data/news'

defineProps<{ item: NewsItem }>()

const localize = useLocalized()
</script>

<template>
  <NuxtLinkLocale :to="`/news/${item.date}`" class="news-card">
    <!-- 拡大した写真がはみ出さないよう、写真を枠で囲んでいる -->
    <span class="frame">
      <NuxtImg
        v-if="item.images[0]"
        :src="item.images[0]"
        alt=""
        class="image"
        sizes="xs:100vw sm:50vw md:33vw lg:360px xl:360px"
        format="webp"
        loading="lazy"
      />
      <img v-else src="~/assets/images/logo-white.svg" alt="" class="logo" />
    </span>
    <time :datetime="item.date" class="date">{{ formatDate(item.date) }}</time>
    <span class="title">{{ localize(item.title) }}</span>
  </NuxtLinkLocale>
</template>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.frame {
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--radius-image);
  background: var(--color-brand);
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo {
  width: 50%;
}

.date {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  letter-spacing: 0.08em;
  color: var(--color-ink-muted);
}

.title {
  line-height: 1.6;
}

.news-card:hover .title {
  color: var(--color-accent);
}

@media (scripting: enabled) and (prefers-reduced-motion: no-preference) {
  .image {
    transition: transform 0.4s var(--ease-out);
  }

  .news-card:hover .image {
    transform: scale(1.05);
  }
}
</style>
