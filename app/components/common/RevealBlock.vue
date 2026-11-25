<script setup lang="ts">
/**
 * スクロールして画面に入ったとき、色の帯が横切ってから中身が現れる演出
 *
 * 使い方:
 *   <RevealBlock>
 *     <p>ここに表示したい中身</p>
 *   </RevealBlock>
 */
const el = useTemplateRef<HTMLElement>('el')
const inView = useInView(el, 0.2)
</script>

<template>
  <div ref="el" class="reveal-block" :class="{ 'is-revealed': inView }">
    <!-- 帯が通り過ぎるまで中身を隠すため、中身をもう1枚の箱に入れている -->
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.reveal-block {
  position: relative;
}

/* 演出は試しに外している（2026-11-26）。元に戻すときは git の履歴から復元する */
</style>
