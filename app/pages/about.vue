<script setup lang="ts">
/** About ページ: 各セクションの部品を上から順に並べる */
const { t } = useI18n()
useSeoMeta({ title: () => t('about.title') })
</script>

<template>
  <div>
    <!-- 副題の「Robot for happiness」はチームの標語なので、日英とも英語 -->
    <PageHeader :title="t('about.title')" :subtitle="`${t('about.team')} — Robot for happiness`" />
    <AboutOverview />
    <AboutProjects />
    <AboutRoboCup />
    <AboutHistory />
  </div>
</template>
