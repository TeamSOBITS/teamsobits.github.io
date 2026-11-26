<script setup lang="ts">
/**
 * 研究ページの「プロジェクト」: 導入文、各プロジェクトへの目次、研究プロジェクトの一覧（画像と説明）
 * プロジェクトは data/research.ts の RESEARCH_PROJECTS で管理する
 */
import { RESEARCH_PROJECTS } from '~/data/research'

const localize = useLocalized()

/** データでは空行（\n\n）で段落を区切っている */
const paragraphs = (text: string) => text.split('\n\n')
</script>

<template>
  <section id="projects" class="projects container">
    <h2 class="section-heading">{{ $t('research.projects.heading') }}</h2>
    <p>{{ $t('research.projects.intro') }}</p>

    <nav :aria-label="$t('research.projects.heading')">
      <ul class="names">
        <li v-for="project in RESEARCH_PROJECTS" :key="project.id">
          <NuxtLink :to="{ hash: `#${project.id}` }">{{ project.name }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <ul class="list">
      <!-- id は About ページなどからのページ内リンク（/research#guider）に使う -->
      <li v-for="project in RESEARCH_PROJECTS" :id="project.id" :key="project.id" class="project">
        <h3 class="name">{{ project.name }}</h3>
        <div class="body">
          <NuxtImg
            :src="project.image"
            alt=""
            class="image"
            sizes="xs:100vw sm:100vw md:100vw lg:400px xl:400px"
            format="webp"
            loading="lazy"
          />
          <div class="summary">
            <p v-for="(p, i) in paragraphs(localize(project.summary))" :key="i">{{ p }}</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* 余白は下だけ（上下に付けると、並んだセクションの間で余白が二重になるため） */
.projects {
  padding-bottom: var(--space-6);
}

/* 各プロジェクトへの目次 */
.names {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin-top: var(--space-3);
  font-family: var(--font-display);
  letter-spacing: 0.04em;
}

.names a {
  color: var(--color-accent);
}

.names a::before {
  content: '→ ';
}

.names a:hover {
  text-decoration: underline;
}

.list {
  display: grid;
  gap: var(--space-5);
  margin-top: var(--space-5);
}

.project {
  padding: var(--space-4);
  border-radius: var(--radius-image);
  background: var(--color-surface-alt);
}

.name {
  margin-bottom: var(--space-3);
  font-family: var(--font-display);
  font-size: var(--text-xl);
  letter-spacing: 0.04em;
}

.body {
  display: grid;
  gap: var(--space-4);
}

.image {
  width: 100%;
  height: auto;
  border-radius: var(--radius-image);
}

.summary p + p {
  margin-top: var(--space-3);
}

@media (min-width: 1024px) {
  .body {
    grid-template-columns: 400px 1fr;
    align-items: start;
  }
}
</style>
