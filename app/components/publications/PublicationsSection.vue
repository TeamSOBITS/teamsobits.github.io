<script setup lang="ts">
/**
 * 業績ページの1つの欄（受賞・国際学会発表など）。項目を年ごとにまとめて、新しい順に並べる
 * 欄の一覧と項目は data/publications.ts で管理する
 */
import type { Award, Paper } from '~/data/publications'

const props = defineProps<{
  /** 欄の id（ページ内リンクと、翻訳ファイルの見出しに使う） */
  id: string
  items: (Award | Paper)[]
}>()

const localize = useLocalized()

/** 受賞は日英の文から今の言語を選ぶ。学会発表は文が1つなのでそのまま */
const textOf = (item: Award | Paper) => (typeof item.text === 'string' ? item.text : localize(item.text))

/** 年ごとのまとまり。データの順番（新しい順）のまま、同じ年の項目を1つにまとめる */
const groups = computed(() => {
  const result: { year: number; items: (Award | Paper)[] }[] = []
  for (const item of props.items) {
    const last = result.at(-1)
    if (last?.year === item.year) last.items.push(item)
    else result.push({ year: item.year, items: [item] })
  }
  return result
})
</script>

<template>
  <section :id="id" class="publications-section container">
    <h2 class="section-heading">{{ $t(`publications.sections.${id}`) }}</h2>

    <div v-for="group in groups" :key="group.year" class="year-group">
      <h3 class="year">{{ group.year }}</h3>
      <ul class="items">
        <li v-for="(item, i) in group.items" :key="i">
          <!-- リンクがある項目は、項目全体をリンクにする。右端の ↗ が目印（スマホにはホバーがないため） -->
          <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="item is-link">
            <span>{{ textOf(item) }}</span>
            <span class="arrow" aria-hidden="true">↗</span>
          </a>
          <p v-else class="item">{{ textOf(item) }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* 余白は下だけ（上下に付けると、並んだセクションの間で余白が二重になるため） */
.publications-section {
  padding-bottom: var(--space-6);
}

.year-group + .year-group {
  margin-top: var(--space-5);
}

.year {
  margin-bottom: var(--space-2);
  font-family: var(--font-display);
  font-size: var(--text-xl);
  letter-spacing: 0.04em;
}

/* 区切り線は外側の li に付ける（中の項目は、マウスを乗せると角丸で塗るので、線まで丸まらないように） */
.items > li {
  border-bottom: 1px solid var(--color-border);
}

.item {
  display: flex;
  gap: var(--space-3);
  justify-content: space-between;
  padding: var(--space-3) var(--space-2);
  font-size: var(--text-sm);
  line-height: 1.8;
  transition: background-color 0.2s;
}

.arrow {
  flex-shrink: 0;
  color: var(--color-ink-muted);
  transition: color 0.2s;
}

/* リンクのある項目にマウスを乗せると、項目全体を強調色（青）でうっすら塗る */
.is-link:hover {
  border-radius: var(--radius-image);
  background: color-mix(in srgb, var(--color-accent) 15%, transparent);
}

.is-link:hover .arrow {
  color: var(--color-accent);
}
</style>
