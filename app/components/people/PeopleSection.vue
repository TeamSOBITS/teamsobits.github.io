<script setup lang="ts">
/**
 * メンバーページの1つの欄（教員・博士課程など）: 顔写真・名前・学年・研究室のカードを並べる
 * カードを押すと、詳しい情報の窓（PeopleDialog）を開くよう、親に知らせる
 */
import type { Person } from '~/data/people'

defineProps<{
  /** 欄の id（翻訳ファイルの見出し people.sections.{id} に使う） */
  id: string
  people: Person[]
}>()

defineEmits<{ select: [person: Person] }>()

const localize = useLocalized()
</script>

<template>
  <section :id="id" class="people-section container">
    <h2 class="section-heading">{{ $t(`people.sections.${id}`) }}</h2>
    <ul class="cards">
      <li v-for="person in people" :key="person.id">
        <button type="button" class="card" @click="$emit('select', person)">
          <!-- 写真は窓の中と同じ大きさで読み込む（同じ画像になるので、読み込みは1回で済む） -->
          <NuxtImg
            :src="person.image ?? '/images/people/default.png'"
            alt=""
            class="avatar"
            sizes="240px"
            format="webp"
            loading="lazy"
          />
          <span class="name">{{ localize(person.name) }}</span>
          <span class="meta">{{ person.grade }} / {{ $t(`people.labs.${person.lab}`) }}</span>
        </button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* 余白は下だけ（上下に付けると、並んだセクションの間で余白が二重になるため） */
.people-section {
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
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: center;
  cursor: pointer;
}

.avatar {
  width: 160px;
  aspect-ratio: 1;
  margin-bottom: var(--space-2);
  border-radius: 50%;
  object-fit: cover;
  transition: box-shadow 0.2s;
}

/* 押せることがわかるよう、マウスを乗せると写真の周りを強調色で囲む */
.card:hover .avatar {
  box-shadow: 0 0 0 3px var(--color-accent);
}

.name {
  font-weight: 700;
}

.meta {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}
</style>
