<script setup lang="ts">
/** トップページ: 各セクションのコンポーネントを上から順に並べる */
const { t } = useI18n()
useSeoMeta({
  description: () => t('site.description'),
  ogTitle: () => t('site.name'),
  ogDescription: () => t('site.description'),
  ogType: 'website',
})
</script>

<template>
  <div>
    <HomeSlideshow />
    <HomeInfo />
    <HomeGreeting />
    <HomeNews />
  </div>
</template>
