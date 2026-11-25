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

/*
 * 演出は、JavaScript が動く環境で、かつ「動きを減らす」設定がオフのときだけ。
 * それ以外では最初から中身を表示する（演出のせいで中身が見えなくなるのを防ぐ）
 */
@media (scripting: enabled) and (prefers-reduced-motion: no-preference) {
  .content {
    opacity: 0;
  }

  /* 横切る色の帯 */
  .reveal-block::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--color-accent);
    transform: scaleX(0);
    transform-origin: left;
    pointer-events: none;
  }

  /* 帯が中身を覆いきったタイミング（0.45秒後）で中身を表示する */
  .is-revealed .content {
    animation: reveal-content 0.01s 0.45s forwards;
  }

  .is-revealed::after {
    animation: reveal-sweep 0.9s var(--ease-out) forwards;
  }
}

/* 帯が左から伸びて全体を覆い、右へ抜けていく */
@keyframes reveal-sweep {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50.1% {
    transform-origin: right;
  }
  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}

@keyframes reveal-content {
  to {
    opacity: 1;
  }
}
</style>
