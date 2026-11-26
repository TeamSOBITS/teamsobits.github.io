<script setup lang="ts">
/**
 * About ページの「RoboCup」: 説明文、出場資格審査用の動画、Team Description Paper
 * 動画と論文の一覧は data/about.ts で管理する。小見出し（Qualification Video など）は日英とも英語
 */
import { QUALIFICATION_VIDEOS, TEAM_DESCRIPTION_PAPERS } from '~/data/about'

const { t } = useI18n()

/** 先頭（最新）の動画だけを埋め込み、残りはリンクにする */
const [latestVideo, ...archivedVideos] = QUALIFICATION_VIDEOS
</script>

<template>
  <section class="robocup container">
    <h2 class="section-heading">{{ t('about.robocup.heading') }}</h2>
    <p v-for="(p, i) in t('about.robocup.body').split('\n\n')" :key="i">{{ p }}</p>

    <template v-if="latestVideo">
      <h3 class="subheading">Qualification Video</h3>
      <YouTubeVideo :id="latestVideo.youtubeId" :title="latestVideo.title" class="video" />
      <ul v-if="archivedVideos.length" class="links">
        <li v-for="video in archivedVideos" :key="video.youtubeId">
          <a :href="`https://youtu.be/${video.youtubeId}`" target="_blank" rel="noopener noreferrer">
            {{ video.title }}
          </a>
        </li>
      </ul>
    </template>

    <h3 class="subheading">Team Description Paper</h3>
    <ul class="links">
      <li v-for="paper in TEAM_DESCRIPTION_PAPERS" :key="paper.file">
        <NuxtLink :to="paper.file" target="_blank">{{ paper.title }} (PDF)</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* 余白は下だけ（上下に付けると、並んだセクションの間で余白が二重になるため） */
.robocup {
  padding-bottom: var(--space-6);
}

p + p {
  margin-top: var(--space-3);
}

.subheading {
  margin-top: var(--space-5);
  margin-bottom: var(--space-3);
  font-family: var(--font-display);
  font-size: var(--text-lg);
  letter-spacing: 0.04em;
}

.video {
  max-width: 800px;
  margin-inline: auto;
}

.links {
  display: grid;
  gap: var(--space-1);
  margin-top: var(--space-3);
}

.links a {
  color: var(--color-accent);
}

.links a::before {
  content: '→ ';
}

.links a:hover {
  text-decoration: underline;
}
</style>
