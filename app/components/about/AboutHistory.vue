<script setup lang="ts">
/**
 * About ページの「歴史」: 年表。スクロールして読んでいる出来事の写真が、背景に切り替わって表示される
 * 出来事は data/about.ts の HISTORY で管理する
 *
 * 仕組み:
 * - 各出来事には、その写真を端を切らずに表示する（alt は空。すぐ隣に見出しがあり、読み上げで2回読まれるため）。広い画面では、真ん中の線の左右に交互に並べる
 * - 背景（全出来事の写真を重ねたもの）は、画面に貼り付いたまま動かない（position: sticky）
 * - 年表の各項目が画面の縦の真ん中を通ったら、その項目を「今読んでいる項目」にし、その写真だけを表示する
 */
import { HISTORY } from '~/data/about'

const localize = useLocalized()

/** 今読んでいる項目の番号。最初は先頭（最新）の出来事 */
const active = ref(0)

const items = useTemplateRef<HTMLElement[]>('items')
let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = Number((entry.target as HTMLElement).dataset.index)
      }
    },
    // 画面の上下を 50% ずつ削り、縦の真ん中の線だけで判定する
    { rootMargin: '-50% 0px -50% 0px' },
  )
  items.value?.forEach((item) => observer?.observe(item))
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section class="history">
    <div class="backdrop" aria-hidden="true">
      <!--
        sizes は各出来事の写真と同じにしている。同じ画像になるので、1枚につき1回の読み込みで済む
        （背景は暗い膜の下なので、画面幅より小さい画像を引き伸ばしても目立たない）
      -->
      <NuxtImg
        v-for="(event, i) in HISTORY"
        :key="event.image"
        :src="event.image"
        alt=""
        class="photo"
        :class="{ 'is-active': i === active }"
        sizes="xs:100vw sm:100vw md:50vw lg:560px xl:560px"
        format="webp"
        loading="lazy"
      />
    </div>

    <div class="content container">
      <h2 class="heading">
        <span class="label">HISTORY</span>
        {{ $t('about.history.heading') }}
      </h2>

      <ol class="timeline">
        <li
          v-for="(event, i) in HISTORY"
          ref="items"
          :key="event.date + event.image"
          :data-index="i"
          class="event"
          :class="{ 'is-active': i === active }"
        >
          <NuxtImg
            :src="event.image"
            alt=""
            class="image"
            sizes="xs:100vw sm:100vw md:50vw lg:560px xl:560px"
            format="webp"
            loading="lazy"
          />
          <p class="date">{{ event.date }}</p>
          <h3 class="title">{{ localize(event.title) }}</h3>
          <p v-if="event.details" class="details">{{ localize(event.details) }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
/*
 * 背景と年表を、grid の同じマスに重ねる。
 * （マイナスの余白で重ねると、sticky の背景がセクションの終わりで止まらず、下のフッターに覆いかぶさる）
 */
.history {
  display: grid;
  background: var(--color-surface-deep);
}

.backdrop,
.content {
  grid-area: 1 / 1;
}

/*
 * 背景。画面に貼り付けたまま、年表をその上に流す。セクションの終わりで止まる。
 * 写真は暗い膜の下の雰囲気づくりなので、画面の形に合わせて端が切れてよい
 */
.backdrop {
  position: sticky;
  top: var(--header-height);
  align-self: start;
  height: calc(100svh - var(--header-height));
  overflow: hidden;
}

.photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.photo.is-active {
  opacity: 1;
}

/* 文字を読みやすくするため、写真の上に暗い膜を重ねる */
.backdrop::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgb(0 0 0 / 0.6);
}

.content {
  position: relative;
  padding-block: var(--space-7);
}

.heading {
  margin-bottom: var(--space-6);
  font-size: var(--text-2xl);
  line-height: 1.4;
}

.label {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  letter-spacing: 0.2em;
  color: var(--color-heading);
}

/*
 * 縦線。
 * スマホでは線を左端に置いて出来事をその右に並べ、768px 以上では線を真ん中に置いて出来事を左右交互に並べる（旧サイトと同じ）
 */
.timeline {
  --gap: var(--space-5); /* 線と出来事のすき間 */

  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1px;
  background: rgb(255 255 255 / 0.4);
}

.event {
  position: relative;
  padding: var(--space-5) 0 var(--space-5) var(--gap);
  text-shadow: 0 0 12px rgb(0 0 0 / 0.8);
}

/*
 * 出来事の写真。端を切らずに全部見せる（高さは写真ごとに変わる）。
 * 背景は「項目が画面の真ん中を通っている間」表示されるので、写真が大きく項目が長いほど、その分長く表示される
 */
.image {
  width: 100%;
  height: auto;
  margin-bottom: var(--space-3);
  border-radius: var(--radius-image);
}

.date {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  letter-spacing: 0.04em;
}

.title {
  font-size: var(--text-lg);
  line-height: 1.5;
  /* 1つの年に出来事が2つある場合、データでは改行（\n）で区切っている */
  white-space: pre-line;
}

.details {
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  white-space: pre-line;
}

/* JavaScript が動くときだけ、今読んでいる項目以外を薄くする（動かないときは全部同じ濃さで読めるように） */
@media (scripting: enabled) {
  .event {
    opacity: 0.45;
    transition: opacity 0.3s;
  }

  .event.is-active {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .photo,
  .event {
    transition: none;
  }
}

@media (min-width: 768px) {
  .timeline::before {
    left: 50%;
  }

  .event {
    width: calc(50% - var(--gap));
    padding-left: 0;
  }

  /* 奇数番目は線の左、偶数番目は線の右 */
  .event:nth-of-type(even) {
    margin-left: auto;
  }
}
</style>
