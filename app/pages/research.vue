<script setup lang="ts">
/** 研究ページ: 各セクションの部品を上から順に並べる */
import { RESEARCH_AREAS } from '~/data/research'

const { t } = useI18n()
useSeoMeta({ title: () => t('research.title') })
</script>

<template>
  <div>
    <PageHeader :title="t('research.title')" />
    <ResearchGitHubCard />
    <ResearchAreaNav />
    <ResearchArea v-for="area in RESEARCH_AREAS" :key="area.id" :area="area" />
  </div>
</template>
