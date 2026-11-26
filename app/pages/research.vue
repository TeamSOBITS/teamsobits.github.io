<script setup lang="ts">
/** 研究ページ: 各セクションの部品を上から順に並べる */
const { t } = useI18n()
useSeoMeta({ title: () => t('research.title') })
</script>

<template>
  <div>
    <PageHeader :title="t('research.title')" />
    <ResearchProjects />
    <!-- GitHub カードは閲覧後に中身を取ってきて伸びるので、下に置く（上に置くと #projects へ飛んだとき見出しがずれる） -->
    <ResearchGitHubCard />
  </div>
</template>
