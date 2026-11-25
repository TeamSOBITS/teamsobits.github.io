<script setup lang="ts">
/** 言語切替（EN / JA）。今いるページの別言語版へ移動する */
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <ul class="language-switcher" :aria-label="t('common.language')">
    <li v-for="item in locales" :key="item.code">
      <NuxtLink
        :to="switchLocalePath(item.code)"
        :lang="item.language"
        :hreflang="item.language"
        :title="item.name"
        :aria-current="item.code === locale ? 'true' : undefined"
      >
        {{ item.code.toUpperCase() }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.language-switcher {
  display: flex;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  letter-spacing: 0.1em;
}

.language-switcher li + li::before {
  content: '/';
  opacity: 0.4;
  margin-inline: var(--space-2);
}

.language-switcher a {
  opacity: 0.55;
  transition: opacity 0.2s;
}

.language-switcher a:hover,
.language-switcher a[aria-current='true'] {
  opacity: 1;
}

/* 薄さの違いだけでは今の言語がわかりにくいので、下線も付ける */
.language-switcher a[aria-current='true'] {
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
