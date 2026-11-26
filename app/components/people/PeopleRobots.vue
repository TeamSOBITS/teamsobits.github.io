<script setup lang="ts">
/**
 * メンバーページの最後: ロボットも仲間として、メンバーと同じ丸いアイコンで並べる
 * 押すと Robots ページのそのロボットの紹介へ移る。ロボットは data/robots.ts の ROBOTS で管理する
 * アイコンの画像は、各ロボットのリポジトリの README にある CG（ROBOTS の icon）
 */
import { ROBOTS } from '~/data/robots'
</script>

<template>
  <section id="robots" class="people-robots container">
    <h2 class="section-heading">{{ $t('people.sections.robots') }}</h2>
    <ul class="cards">
      <li v-for="robot in ROBOTS" :key="robot.id">
        <NuxtLinkLocale :to="`/robots#${robot.id}`" class="card">
          <NuxtImg :src="robot.icon" alt="" class="avatar" sizes="240px" format="webp" loading="lazy" />
          <span class="name">{{ robot.name }}</span>
        </NuxtLinkLocale>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* 並べ方と見た目は、人の欄（PeopleSection.vue）と同じにしている */
.people-robots {
  padding-bottom: var(--space-6);
}

.cards {
  /*
   * 行ごとに真ん中に寄せる。最後の行のあまりの人も真ん中に来るよう、grid ではなく flex で並べる
   * （grid は最後の行を左から詰めるため、そこだけ左に寄ってしまう）
   */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
}

.cards > li {
  width: 180px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  text-align: center;
}

.avatar {
  width: 160px;
  aspect-ratio: 1;
  margin-bottom: var(--space-2);
  border-radius: 50%;
  /* 背景が透明な CG。黒いロボットが暗い背景に溶けないよう明るい丸の上に置き、端を切らずに全体を収める */
  padding: var(--space-2);
  object-fit: contain;
  background: var(--color-ink);
  transition: box-shadow 0.2s;
}

.card:hover .avatar {
  box-shadow: 0 0 0 3px var(--color-accent);
}

.name {
  font-weight: 700;
}
</style>
