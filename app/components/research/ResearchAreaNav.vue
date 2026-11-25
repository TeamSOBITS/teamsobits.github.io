<script setup lang="ts">
/** 研究ページの「研究領域」: 導入文と、各領域へのページ内リンク */
import { RESEARCH_AREAS } from '~/data/research'

const localize = useLocalized()
</script>

<template>
  <section class="area-nav container">
    <h2 class="section-heading">{{ $t('research.areas.heading') }}</h2>
    <RevealBlock>
      <p>{{ $t('research.areas.intro') }}</p>
      <ul class="links">
        <li v-for="area in RESEARCH_AREAS" :key="area.id">
          <a :href="`#${area.id}`">{{ localize(area.title) }}</a>
        </li>
      </ul>
    </RevealBlock>
  </section>
</template>

<style scoped>
/* 余白は下だけ（上下に付けると、並んだセクションの間で余白が二重になるため） */
.area-nav {
  padding-bottom: var(--space-6);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin-top: var(--space-3);
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
