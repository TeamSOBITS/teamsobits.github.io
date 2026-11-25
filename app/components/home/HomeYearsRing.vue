<script setup lang="ts">
/** 「SINCE 2000 / ○○ YEARS」の円。画面に入るとリングが一周描かれる */
import { FOUNDED_YEAR } from '~/data/site'

const years = useYearsActive()
const el = useTemplateRef<HTMLElement>('el')
const inView = useInView(el)
</script>

<template>
  <div ref="el" class="years-ring" :class="{ 'is-visible': inView }">
    <NuxtImg
      src="/images/home/since-2000.jpg"
      alt=""
      class="photo"
      sizes="320px md:480px"
      format="webp"
      loading="lazy"
    />
    <svg class="ring" viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="96" pathLength="100" />
    </svg>
    <p class="label">
      <span class="since">{{ $t('home.info.since', { year: FOUNDED_YEAR }) }}</span>
      <span class="years">{{ years }}</span>
      <span class="unit">{{ $t('home.info.yearsUnit') }}</span>
    </p>
  </div>
</template>

<style scoped>
.years-ring {
  position: relative;
  width: min(100%, 480px);
  aspect-ratio: 1;
  margin-inline: auto;
  color: #fff;
}

.photo {
  position: absolute;
  inset: 6%;
  width: 88%;
  height: 88%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 20px rgb(0 0 0 / 0.4);
}

/* 写真を少し暗くして文字を読みやすくする */
.years-ring::before {
  content: '';
  position: absolute;
  inset: 6%;
  z-index: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(4 33 129 / 0.55), rgb(4 33 129 / 0.2));
}

.ring {
  position: absolute;
  inset: 0;
  transform: rotate(-90deg);
}

.ring circle {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 4;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset 1.8s var(--ease-out);
}

.is-visible .ring circle {
  stroke-dashoffset: 0;
}

.label {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  line-height: 1;
  text-shadow: 0 0 10px rgb(7 15 87);
}

.since {
  font-size: clamp(1rem, 3vw, 1.5rem);
  letter-spacing: 0.2em;
}

.years {
  font-size: clamp(4rem, 14vw, 8rem);
  font-weight: 700;
}

.unit {
  padding: var(--space-1) var(--space-4);
  font-size: var(--text-lg);
  letter-spacing: 0.3em;
  color: var(--color-ink);
  background: #fff;
  text-shadow: none;
}

@media (prefers-reduced-motion: reduce) {
  .ring circle {
    transition: none;
    stroke-dashoffset: 0;
  }
}
</style>
