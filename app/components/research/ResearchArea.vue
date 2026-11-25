<script setup lang="ts">
/**
 * 研究ページの研究領域1つ分（見出し・説明・研究テーマの一覧）
 * 研究ページでは data/research.ts の RESEARCH_AREAS の数だけ並べている
 */
import type { ResearchArea } from '~/data/research'

defineProps<{ area: ResearchArea }>()

const localize = useLocalized()

/** データでは空行（\n\n）で段落を区切っている */
const paragraphs = (text: string) => text.split('\n\n')
</script>

<template>
  <section :id="area.id" class="area container">
    <h2 class="section-heading">{{ localize(area.title) }}</h2>

    <RevealBlock class="summary">
      <p v-for="(p, i) in paragraphs(localize(area.summary))" :key="i">{{ p }}</p>
    </RevealBlock>

    <ul class="themes">
      <li v-for="theme in area.themes" :key="theme.image">
        <RevealBlock class="theme">
          <h3 class="theme-title">{{ localize(theme.title) }}</h3>
          <div class="theme-body">
            <NuxtImg
              :src="theme.image"
              alt=""
              class="theme-image"
              sizes="xs:100vw sm:100vw md:100vw lg:400px xl:400px"
              format="webp"
              loading="lazy"
            />
            <div class="theme-abstract">
              <p v-for="(p, i) in paragraphs(localize(theme.abstract))" :key="i">{{ p }}</p>
            </div>
          </div>
        </RevealBlock>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* 余白は下だけ（上下に付けると、並んだセクションの間で余白が二重になるため） */
.area {
  padding-bottom: var(--space-6);
}

.summary p + p,
.theme-abstract p + p {
  margin-top: var(--space-3);
}

.themes {
  display: grid;
  gap: var(--space-5);
  margin-top: var(--space-5);
}

.theme {
  padding: var(--space-4);
  border-radius: var(--radius-image);
  background: var(--color-surface-alt);
}

.theme-title {
  margin-bottom: var(--space-3);
  font-size: var(--text-lg);
  line-height: 1.5;
}

.theme-body {
  display: grid;
  gap: var(--space-4);
}

.theme-image {
  width: 100%;
  height: auto;
  border-radius: var(--radius-image);
}

.theme-abstract {
  font-size: var(--text-sm);
}

@media (min-width: 1024px) {
  .theme-body {
    grid-template-columns: 400px 1fr;
    align-items: start;
  }
}
</style>
