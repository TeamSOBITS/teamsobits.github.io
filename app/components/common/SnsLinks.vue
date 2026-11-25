<script setup lang="ts">
/** SNS アイコンのリンク一覧。リンク先は data/site.ts の SNS_LINKS で管理する */
import { SNS_LINKS } from '~/data/site'

withDefaults(defineProps<{ direction?: 'row' | 'column' }>(), { direction: 'row' })
</script>

<template>
  <ul class="sns-links" :class="`is-${direction}`">
    <li v-for="sns in SNS_LINKS" :key="sns.name">
      <a :href="sns.url" target="_blank" rel="noopener noreferrer" :title="sns.name">
        <svg viewBox="0 0 24 24" role="img" :aria-label="sns.name">
          <path :d="sns.icon.path" />
        </svg>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.sns-links {
  display: flex;
  gap: var(--space-3);
}

.sns-links.is-column {
  flex-direction: column;
}

.sns-links a {
  display: block;
  padding: var(--space-1);
  transition: opacity 0.2s;
}

.sns-links a:hover {
  opacity: 0.6;
}

.sns-links svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
