<script setup lang="ts">
/** トップの「SOBITS INFORMATION」: チームの紹介文と活動年数 */
const years = useYearsActive()
</script>

<template>
  <section id="info" class="info">
    <div class="container grid">
      <HomeYearsRing />

      <div class="body">
        <h2 class="heading">
          <span>SOBITS</span>
          <span>INFORMATION</span>
        </h2>
        <RevealBlock class="text-block">
          <!-- 翻訳ファイル中の改行（\n）をそのまま改行として表示する -->
          <p class="text">{{ $t('home.info.text', { years }) }}</p>
          <LinkButton to="/about" class="more" />
        </RevealBlock>
      </div>
    </div>
  </section>
</template>

<style scoped>
.info {
  padding-block: var(--space-7);
  background: var(--color-surface-alt);
}

.grid {
  display: grid;
  gap: var(--space-6);
  align-items: center;
}

.heading {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-4);
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--color-heading);
}

.text {
  line-height: 2;
}

/* 改行位置は PC 向けに調整されているため、タブレット以上でだけ反映する */
@media (min-width: 768px) {
  .text {
    white-space: pre-line;
  }
}

.more {
  margin-top: var(--space-5);
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
