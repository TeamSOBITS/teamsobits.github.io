<script setup lang="ts">
/** サイト共通のフッター（連絡先・サイトマップ・SNS） */
import { CONTACT_EMAIL, NAVIGATION } from '~/data/site'
</script>

<template>
  <footer class="site-footer">
    <div class="container inner">
      <section class="info">
        <NuxtLinkLocale to="/" class="logo">
          <img src="/images/brand/logo-white.svg" alt="TeamSOBITS" width="96" height="60" />
        </NuxtLinkLocale>
        <address>{{ $t('site.address') }}</address>
        <dl class="contact">
          <dt>E-mail</dt>
          <dd>
            <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
          </dd>
        </dl>
      </section>

      <section class="links">
        <nav aria-label="Sitemap">
          <ul class="sitemap">
            <li v-for="item in NAVIGATION" :key="item.to">
              <NuxtLinkLocale :to="item.to">{{ item.label }}</NuxtLinkLocale>
            </li>
          </ul>
        </nav>
        <SnsLinks />
      </section>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding-block: var(--space-6);
  background: var(--color-header);
  font-size: var(--text-sm);
}

.inner {
  display: grid;
  gap: var(--space-5);
}

.logo img {
  height: 60px;
  width: auto;
  margin-bottom: var(--space-4);
}

address {
  font-style: normal;
  opacity: 0.8;
}

.contact {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

.contact dt {
  opacity: 0.6;
}

.contact a {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.sitemap {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);
  font-family: var(--font-display);
  font-size: var(--text-base);
  letter-spacing: 0.08em;
}

.sitemap a:hover {
  color: var(--color-accent);
}

@media (min-width: 1024px) {
  .inner {
    grid-template-columns: 1fr auto;
    align-items: end;
  }

  .links {
    align-items: flex-end;
  }
}
</style>
