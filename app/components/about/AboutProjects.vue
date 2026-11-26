<script setup lang="ts">
/**
 * About ページの「プロジェクト」: 導入文と「More」だけを置き、研究ページのプロジェクト欄へ案内する
 * プロジェクトの名前・画像・説明は研究ページにだけ載せる（同じ内容を2か所に書かないため）
 */
</script>

<template>
  <section class="projects container">
    <!-- 見出しと導入文は、研究ページの同じ欄と共通（翻訳ファイルの research.projects） -->
    <h2 class="section-heading">{{ $t('research.projects.heading') }}</h2>
    <p>{{ $t('research.projects.intro') }}</p>

    <LinkButton to="/research#projects" class="more" />
  </section>
</template>

<style scoped>
/* 余白は下だけ（上下に付けると、並んだセクションの間で余白が二重になるため） */
.projects {
  padding-bottom: var(--space-6);
}

.more {
  margin-top: var(--space-4);
}
</style>
