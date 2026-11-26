<script setup lang="ts">
/** 業績ページ: 目次と、各欄（受賞・国際学会発表・国内学会発表・ジャーナル）を上から順に並べる */
import { PUBLICATION_SECTIONS } from '~/data/publications'

const { t } = useI18n()
useSeoMeta({ title: () => t('publications.title') })
</script>

<template>
  <div>
    <PageHeader :title="t('publications.title')" />
    <PublicationsNav />
    <PublicationsSection
      v-for="section in PUBLICATION_SECTIONS"
      :id="section.id"
      :key="section.id"
      :items="section.items"
    />
  </div>
</template>
