<script setup lang="ts">
/** 全ページ共通のレイアウト: ヘッダー / ページ本体 / フッター */

// <html lang>、別言語版へのリンク（hreflang）などを言語に合わせて出力する
const localeHead = useLocaleHead()
useHead(() => ({
  htmlAttrs: { lang: localeHead.value.htmlAttrs.lang },
  link: localeHead.value.link,
  meta: localeHead.value.meta,
}))
</script>

<template>
  <div class="layout">
    <SiteHeader />
    <main class="main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
/*
 * ヘッダーは固定表示なので、その高さ分だけ全体を下げる。
 * この余白は main の外に取る（main の中に取ると白く塗られ、
 * 引っ張りスクロールしたときにヘッダーの下から白が見えてしまう）
 */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: var(--header-height);
}

.main {
  flex: 1;
  background: var(--color-surface);
}
</style>
