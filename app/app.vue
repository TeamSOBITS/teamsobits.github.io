<script setup lang="ts">
const { t } = useI18n()

// ページごとのタイトルは「ページ名 | TeamSOBITS」、トップは「TeamSOBITS」
useHead({
  titleTemplate: (title) => (title ? `${title} | ${t('site.name')}` : t('site.name')),
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
