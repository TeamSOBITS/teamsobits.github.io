<script setup lang="ts">
/** About ページの「SOBITS の概要」と「SOBITS の起源」（文章は翻訳ファイルの about.overview / about.origin） */
const { t } = useI18n()

/** 翻訳ファイルでは空行（\n\n）で段落を区切っている */
const paragraphs = (key: string) => t(key).split('\n\n')
</script>

<template>
  <section class="overview container">
    <h2 class="section-heading">{{ t('about.overview.heading') }}</h2>
    <p v-for="(p, i) in paragraphs('about.overview.body')" :key="i">{{ p }}</p>
    <LinkButton to="/robots" label="Robots" class="more" />

    <h2 class="section-heading origin-heading">{{ t('about.origin.heading') }}</h2>
    <p v-for="(p, i) in paragraphs('about.origin.body')" :key="i">{{ p }}</p>
  </section>
</template>

<style scoped>
/* 余白は下だけ（上下に付けると、並んだセクションの間で余白が二重になるため） */
.overview {
  padding-bottom: var(--space-6);
}

p + p {
  margin-top: var(--space-3);
}

.more {
  margin-top: var(--space-4);
}

.origin-heading {
  margin-top: var(--space-6);
}
</style>
