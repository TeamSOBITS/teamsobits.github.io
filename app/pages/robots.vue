<script setup lang="ts">
/** ロボット紹介ページ: 目次と、ロボット1台ずつの紹介を上から順に並べる */
import { ROBOTS } from '~/data/robots'

const { t } = useI18n()
useSeoMeta({ title: () => t('robots.title') })
</script>

<template>
  <div>
    <PageHeader :title="t('robots.title')" />
    <RobotsNav />
    <RobotsItem v-for="robot in ROBOTS" :key="robot.id" :robot="robot" />
  </div>
</template>
