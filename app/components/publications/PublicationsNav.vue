<script setup lang="ts">
/** 業績ページの目次: 各欄（受賞・国際学会発表など）へのページ内リンク */
import { PUBLICATION_SECTIONS } from '~/data/publications'
</script>

<template>
  <nav class="publications-nav container" :aria-label="$t('publications.title')">
    <ul class="links">
      <li v-for="section in PUBLICATION_SECTIONS" :key="section.id">
        <NuxtLink :to="{ hash: `#${section.id}` }">{{ $t(`publications.sections.${section.id}`) }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.publications-nav {
  padding-bottom: var(--space-6);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
}

.links a {
  color: var(--color-accent);
}

.links a::before {
  content: '→ ';
}

.links a:hover {
  text-decoration: underline;
}
</style>
