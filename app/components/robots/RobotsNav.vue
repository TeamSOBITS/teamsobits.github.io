<script setup lang="ts">
/** ロボット紹介ページの目次: 各ロボットの写真と名前のカード（押すとそのロボットの紹介へ移動する） */
import { ROBOTS } from '~/data/robots'
</script>

<template>
  <nav class="robots-nav container" aria-label="Robots">
    <ul class="cards">
      <li v-for="robot in ROBOTS" :key="robot.id">
        <a :href="`#${robot.id}`" class="card">
          <!-- 拡大した写真がはみ出さないよう、写真を枠で囲んでいる -->
          <span class="frame">
            <NuxtImg
              :src="robot.image"
              alt=""
              class="image"
              sizes="xs:50vw sm:50vw md:33vw lg:200px xl:200px"
              format="webp"
            />
          </span>
          <span class="name">{{ robot.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* 余白は下だけ（上下に付けると、並んだセクションの間で余白が二重になるため） */
.robots-nav {
  padding-bottom: var(--space-6);
}

/* 1枚が 160px より狭くならない範囲で、横に並べられるだけ並べる */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: var(--space-3);
}

.card {
  display: block;
  height: 100%;
  padding: var(--space-2);
  border: 1px solid transparent;
  border-radius: var(--radius-image);
  background: var(--color-surface-alt);
}

.card:hover {
  border-color: var(--color-accent);
}

.frame {
  display: block;
  overflow: hidden;
  border-radius: var(--radius-image);
}

.image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* マウスを乗せると写真が少し大きくなる（「動きを減らす」設定がオンのときは動かさない） */
@media (prefers-reduced-motion: no-preference) {
  .image {
    transition: transform 0.4s var(--ease-out);
  }

  .card:hover .image {
    transform: scale(1.05);
  }
}

.name {
  display: block;
  margin-top: var(--space-2);
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  text-align: center;
}
</style>
