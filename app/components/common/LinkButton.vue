<script setup lang="ts">
/**
 * 矢印付きのリンクボタン（例：「More →」）
 *
 * 使い方:
 *   <LinkButton to="/about" />                    → 「More」と表示
 *   <LinkButton to="/" label="トップへ戻る" />    → 好きな文字を表示
 *
 * to にはリンク先のパスを書く。日本語のページにいるときは、自動で /ja/about のように
 * 日本語版へのリンクになるので、"/ja" は書かなくてよい（書くと英語のページからも日本語版に飛んでしまう）。
 *
 * 外部のサイトへのリンクにも使える。to に "https://" から始まる URL を書くと、そのままのリンクになる。
 * 新しいタブで開きたいときは target="_blank" を付ける（rel="noopener noreferrer" は自動で付く）。
 *   <LinkButton to="https://github.com/TeamSOBITS" label="GitHub" target="_blank" />
 *
 * リンク先のサービスを示したいときは、icon に simple-icons のロゴを渡すと文字の前に表示される。
 *   <LinkButton to="https://github.com/..." label="機能紹介" :icon="siGithub" target="_blank" />
 */
import type { SimpleIcon } from 'simple-icons'

defineProps<{
  /** リンク先のパス（例: "/about"）。"/ja" は付けない。外部のサイトなら URL */
  to: string
  /** ボタンの文字。省略すると「More」 */
  label?: string
  /** 文字の前に出すロゴ（simple-icons）。省略するとロゴなし */
  icon?: SimpleIcon
}>()
</script>

<template>
  <NuxtLinkLocale :to="to" class="link-button">
    <svg v-if="icon" viewBox="0 0 24 24" role="img" :aria-label="icon.title" class="icon">
      <path :d="icon.path" />
    </svg>
    <span>{{ label ?? $t('common.more') }}</span>
    <svg viewBox="0 0 24 8" aria-hidden="true" class="arrow"><path d="M0 7h22L16 1" /></svg>
  </NuxtLinkLocale>
</template>

<style scoped>
.link-button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  border: 1px solid currentColor;
  font-family: var(--font-display);
  letter-spacing: 0.15em;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.icon {
  width: 18px;
  height: 18px;
  /* ロゴは各ブランドの色ではなく、文字と同じ色にする */
  fill: currentColor;
}

.arrow {
  width: 28px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  transition: transform 0.3s var(--ease-out);
}

.link-button:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #fff;
}

.link-button:hover .arrow {
  transform: translateX(6px);
}
</style>
