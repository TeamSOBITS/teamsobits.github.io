<script setup lang="ts">
// favicon は assets から読み込む。nuxt.config.ts の head に書くと、サイトを一段下の階層に置いたときにパスがずれるため
// （ここで読み込むと、書き出しのときに Vite が置いた階層に合わせた URL を決める）
import favicon from '~/assets/images/favicon.ico'

const { t } = useI18n()

// ページごとのタイトルは「ページ名 | TeamSOBITS」、トップは「TeamSOBITS」
useHead({
  titleTemplate: (title) => (title ? `${title} | ${t('site.name')}` : t('site.name')),
  link: [{ rel: 'icon', href: favicon }],
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
