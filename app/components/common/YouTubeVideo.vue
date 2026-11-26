<script setup lang="ts">
/**
 * YouTube の動画の埋め込み
 *
 * 使い方:
 *   <YouTubeVideo id="lC7Ppz0_oMU" title="SOBITS 2026 Qualification Video" />
 *   id は動画の URL（https://youtu.be/lC7Ppz0_oMU）の最後の部分
 *
 * - loading="lazy"：動画の近くまでスクロールしたときだけ読み込む（ブラウザ標準の機能）。
 *   YouTube の埋め込みは数百 KB あるので、動画まで見に来ない人には読み込ませない。
 * - youtube-nocookie.com：Cookie を使わない版の埋め込み。
 */
defineProps<{
  /** 動画の id */
  id: string
  /** 動画の題名（埋め込みの題名として読み上げに使う） */
  title: string
}>()
</script>

<template>
  <iframe
    :src="`https://www.youtube-nocookie.com/embed/${id}`"
    :title="title"
    class="youtube-video"
    loading="lazy"
    allow="encrypted-media; picture-in-picture"
    allowfullscreen
  />
</template>

<style scoped>
.youtube-video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  border-radius: var(--radius-image);
}
</style>
