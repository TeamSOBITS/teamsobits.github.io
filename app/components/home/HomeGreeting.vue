<script setup lang="ts">
/** トップの「Greetings / 代表挨拶」 */
const { t } = useI18n()

/** 翻訳ファイルでは空行（\n\n）で段落を区切っている */
const paragraphs = computed(() => t('home.greeting.body').split('\n\n'))
const subheading = computed(() => t('home.greeting.subheading'))
</script>

<template>
  <section class="greeting">
    <div class="container grid">
      <RevealBlock class="side">
        <h2 class="heading">
          <span class="initial">{{ t('home.greeting.heading').charAt(0) }}</span
          >{{ t('home.greeting.heading').slice(1) }}
          <span v-if="subheading" class="subheading">{{ subheading }}</span>
        </h2>
        <NuxtImg
          src="/images/home/greeting.jpg"
          :alt="t('home.greeting.photoAlt')"
          class="photo"
          width="758"
          height="470"
          sizes="xs:100vw sm:100vw md:100vw lg:45vw xl:45vw"
          format="webp"
          loading="lazy"
        />
      </RevealBlock>

      <RevealBlock class="message">
        <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
        <p class="signature">{{ t('home.greeting.signature') }}</p>
      </RevealBlock>
    </div>
  </section>
</template>

<style scoped>
.greeting {
  padding-block: var(--space-7);
  color: var(--color-on-dark);
  background: var(--color-dark);
}

.grid {
  display: grid;
  gap: var(--space-5);
}

.heading {
  margin-bottom: var(--space-4);
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.1em;
}

.initial {
  font-size: 2.4em;
  color: var(--color-accent);
}

.subheading {
  display: block;
  margin-top: var(--space-3);
  font-family: var(--font-body);
  font-size: var(--text-base);
  letter-spacing: 0.2em;
}

.photo {
  width: 100%;
  height: auto;
  border-radius: var(--radius-image);
}

.message p + p {
  margin-top: var(--space-4);
}

.signature {
  text-align: right;
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 5fr 6fr;
    gap: var(--space-6);
    align-items: end;
  }
}
</style>
