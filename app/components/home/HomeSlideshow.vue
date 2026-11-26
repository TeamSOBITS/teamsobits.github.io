<script setup lang="ts">
/**
 * トップページの一番上のセクション
 * スライドショー＋キャッチコピー（We are SOBITS.）＋SNS リンク＋「Scroll」の表示
 */

/**
 * スライドの写真の一覧（public/ からのパス）。ロゴのスライドの後に、上から順に表示する
 * 写真を変えるときは、public/images/home/slideshow/ の画像とこの一覧の両方を直す
 */
const SLIDES = [
  '/images/home/slideshow/01.jpg',
  '/images/home/slideshow/02.jpg',
  '/images/home/slideshow/03.jpg',
  '/images/home/slideshow/04.jpg',
  '/images/home/slideshow/05.jpg',
  '/images/home/slideshow/06.jpg',
]

/** スライドの枚数（先頭のロゴのスライドを含む） */
const SLIDE_COUNT = SLIDES.length + 1

/** 1枚あたりの表示時間（ミリ秒） */
const INTERVAL = 6000

const current = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  // スライドが1枚以下なら切り替えない
  if (SLIDE_COUNT < 2) return
  timer = setInterval(() => {
    current.value = (current.value + 1) % SLIDE_COUNT
  }, INTERVAL)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section class="top-section">
    <div class="slideshow" aria-hidden="true">
      <!--
        1枚目はロゴ。写真と違い、端が切れると困るので、画像の写真にせず SVG のロゴを青い背景の中央に置いている
        （写真は画面の形に合わせて端を切り落として表示するため、縦長のスマホでは左右が切れる）
      -->
      <div class="slide logo-slide" :class="{ 'is-active': current === 0 }">
        <img src="/images/brand/logo-white.svg" alt="" class="logo" />
      </div>
      <NuxtImg
        v-for="(src, i) in SLIDES"
        :key="src"
        :src="src"
        alt=""
        class="slide"
        :class="{ 'is-active': i + 1 === current }"
        sizes="xs:100vw sm:100vw md:100vw lg:85vw xl:85vw xxl:85vw"
        format="webp"
        :loading="i === 0 ? 'eager' : 'lazy'"
      />
    </div>

    <ShuffleText tag="h1" class="catch" :text="$t('home.slideshow.catch')" />

    <div class="follow">
      <p>{{ $t('common.followUs') }}</p>
      <SnsLinks direction="column" />
    </div>

    <NuxtLink :to="{ hash: '#info' }" class="scroll">{{ $t('common.scroll') }}</NuxtLink>
  </section>
</template>

<style scoped>
.top-section {
  position: relative;
  /* ヘッダーを除いた画面の高さいっぱい */
  height: calc(100svh - var(--header-height));
  min-height: 520px;
  overflow: hidden;
  background: var(--color-surface-deep);
}

/* --- スライドショー（重ねた画像の不透明度を切り替える） --- */
.slideshow {
  position: absolute;
  inset: 0;
  /* 拡大していく画像が枠（とその上の暗いグラデーション）からはみ出さないよう、枠で切り取る */
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition:
    opacity 1.5s ease,
    transform 7.5s linear;
}

.slide.is-active {
  opacity: 1;
  transform: scale(1.06);
}

.logo-slide {
  display: grid;
  place-items: center;
  background: var(--color-brand);
}

.logo {
  width: min(60%, 480px);
  height: auto;
}

/* 文字を読みやすくするため、画像の上に暗いグラデーションを重ねる */
.slideshow::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgb(0 0 0 / 0.55), transparent 50%);
}

@media (min-width: 1024px) {
  .slideshow {
    left: 15%;
  }
}

/* --- キャッチコピー --- */
.catch {
  position: absolute;
  left: var(--space-4);
  bottom: 18%;
  z-index: 3;
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.04em;
  text-shadow: 0 0 18px rgb(7 15 87 / 0.8);
}

@media (min-width: 1024px) {
  .catch {
    left: 6%;
  }
}

/* --- SNS（PC のみ左側に縦並び） --- */
.follow {
  display: none;
}

@media (min-width: 1024px) {
  .follow {
    position: absolute;
    left: 4%;
    top: 50%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
    transform: translateY(-50%);
  }

  .follow p {
    writing-mode: vertical-rl;
    font-family: var(--font-display);
    font-size: var(--text-sm);
    letter-spacing: 0.2em;
  }
}

/* --- スクロール誘導 --- */
.scroll {
  position: absolute;
  right: var(--space-4);
  bottom: 14%;
  z-index: 3;
  padding-bottom: 56px;
  writing-mode: vertical-rl;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  letter-spacing: 0.2em;
}

.scroll::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 1px;
  height: 48px;
  background: currentColor;
  animation: scroll-line 2s ease-in-out infinite;
}

@keyframes scroll-line {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  50.1% {
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

@media (prefers-reduced-motion: reduce) {
  .slide,
  .slide.is-active {
    transform: none;
  }

  .scroll::after {
    animation: none;
    transform: none;
  }
}
</style>
