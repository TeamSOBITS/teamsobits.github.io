<script setup lang="ts">
/**
 * ロボット紹介ページのロボット1台分（名前・写真・紹介文・機能紹介へのリンク）
 * ロボット紹介ページでは data/robots.ts の ROBOTS の数だけ並べている
 */
import { siGithub } from 'simple-icons'
import type { Robot } from '~/data/robots'

defineProps<{ robot: Robot }>()

const localize = useLocalized()

/** 写真と文章が画面に入ったら、演出を始める */
const body = useTemplateRef<HTMLElement>('body')
const inView = useInView(body, 0.2)

/** データでは空行（\n\n）で段落を区切っている */
const paragraphs = (text: string) => text.split('\n\n')
</script>

<template>
  <section :id="robot.id" class="robot container">
    <h2 class="section-heading">{{ robot.name }}</h2>

    <div ref="body" class="body" :class="{ 'is-visible': inView }">
      <NuxtImg
        :src="robot.image"
        :alt="robot.name"
        class="image"
        sizes="xs:100vw sm:100vw md:100vw lg:560px xl:560px"
        format="webp"
        loading="lazy"
      />
      <div class="description">
        <p v-for="(p, i) in paragraphs(localize(robot.description))" :key="i">{{ p }}</p>
        <LinkButton
          :to="robot.repositoryUrl"
          label="View on GitHub"
          :icon="siGithub"
          target="_blank"
          class="repository"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 余白は下だけ（上下に付けると、並んだセクションの間で余白が二重になるため） */
.robot {
  padding-bottom: var(--space-6);
}

.body {
  display: grid;
  gap: var(--space-4);
}

.image {
  width: 100%;
  height: auto;
  border-radius: var(--radius-image);
}

.description p + p {
  margin-top: var(--space-3);
}

.repository {
  margin-top: var(--space-4);
}

@media (min-width: 1024px) {
  .body {
    grid-template-columns: 560px 1fr;
    align-items: start;
  }

  /*
   * 単調にならないよう、偶数番目のロボットは写真を右に置く（左右交互）。
   * nth-of-type は「同じタグ（section）の兄弟」の中で数えるので、目次（nav）やタイトル（header）は数に入らない。
   * ページにロボット以外の section を並べると順番がずれるので注意。
   */
  .robot:nth-of-type(even) .body {
    grid-template-columns: 1fr 560px;
  }

  /* 写真が右にあるときは、右から滑り込ませる */
  .robot:nth-of-type(even) {
    --slide-from: 40px;
  }

  .robot:nth-of-type(even) .image {
    order: 1;
  }
}

/*
 * 画面に入ったとき、写真が横から滑り込み、少し遅れて文章が現れる（一度だけ）。
 * JavaScript が動く環境で、かつ「動きを減らす」設定がオフのときだけ。
 * それ以外では最初から表示する（演出のせいで中身が見えなくなるのを防ぐ）
 */
@media (scripting: enabled) and (prefers-reduced-motion: no-preference) {
  .image {
    opacity: 0;
    transform: translateX(var(--slide-from, -40px));
    transition:
      opacity 0.7s var(--ease-out),
      transform 0.7s var(--ease-out);
  }

  .description {
    opacity: 0;
    transition: opacity 0.7s var(--ease-out) 0.2s;
  }

  .is-visible .image,
  .is-visible .description {
    opacity: 1;
    transform: none;
  }
}
</style>
