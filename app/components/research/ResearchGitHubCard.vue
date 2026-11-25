<script setup lang="ts">
/**
 * 研究ページの「オープンソースソフトウェア」: TeamSOBITS の GitHub の紹介カード
 *
 * - 左：組織のアイコンと名前、使っている技術のロゴ（data/research.ts の OSS_TECHNOLOGIES）
 * - 右：最近更新されたリポジトリ5件（閲覧したときに GitHub から取得する）
 *
 * カードの文言は、日本語のページでも英語のままにしている（GitHub に合わせた見た目にするため）。
 *
 * 最新の更新を見せたいので、ビルド時ではなく閲覧時に取得している（server: false）。
 * GitHub の API は、閲覧者1人あたり1時間に60回まで使える。取得中や失敗したときは
 * 「GitHub で見る」のリンクだけを表示する。
 */
import { OSS_TECHNOLOGIES } from '~/data/research'
import { GITHUB_ORG } from '~/data/site'

/** GitHub API が返すリポジトリの情報のうち、使うもの */
interface Repository {
  name: string
  html_url: string
  description: string | null
  language: string | null
  updated_at: string
  stargazers_count: number
}

const REPOSITORY_COUNT = 5
const orgUrl = `https://github.com/${GITHUB_ORG}`

const { t } = useI18n()

const { data: repositories, status } = useFetch<Repository[]>(
  `https://api.github.com/orgs/${GITHUB_ORG}/repos`,
  { query: { sort: 'updated', per_page: REPOSITORY_COUNT }, server: false, lazy: true },
)

/** 更新日時を「Updated 2 days ago」のように表示する（ブラウザ標準の機能を使う） */
function formatUpdated(isoDate: string) {
  const seconds = (new Date(isoDate).getTime() - Date.now()) / 1000
  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ['year', 60 * 60 * 24 * 365],
    ['month', 60 * 60 * 24 * 30],
    ['day', 60 * 60 * 24],
    ['hour', 60 * 60],
    ['minute', 60],
  ]
  const format = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  const [unit, unitSeconds] = units.find(([, s]) => Math.abs(seconds) >= s) ?? ['second', 1]
  return `Updated ${format.format(Math.trunc(seconds / unitSeconds), unit)}`
}
</script>

<template>
  <section class="github container">
    <h2 class="section-heading">{{ t('research.oss.heading') }}</h2>

    <div class="card">
      <div class="profile">
        <a :href="orgUrl" target="_blank" rel="noopener noreferrer" class="org">
          <img :src="`${orgUrl}.png`" alt="" width="96" height="96" class="avatar" />
          <span class="org-name">{{ GITHUB_ORG }}</span>
        </a>

        <dl class="technologies">
          <div v-for="group in OSS_TECHNOLOGIES" :key="group.label">
            <dt>{{ group.label }}</dt>
            <dd>
              <ul class="icons">
                <li v-for="icon in group.icons" :key="icon.slug">
                  <svg viewBox="0 0 24 24" role="img" :aria-label="icon.title">
                    <title>{{ icon.title }}</title>
                    <path :d="icon.path" />
                  </svg>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>

      <div class="latest">
        <h3 class="latest-heading">Latest Updates</h3>

        <ul v-if="status === 'success' && repositories?.length" class="repositories">
          <li v-for="repo in repositories" :key="repo.name" class="repository">
            <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="repo-name">
              {{ repo.name }}
            </a>
            <p class="repo-description">{{ repo.description ?? 'No description provided.' }}</p>
            <p class="repo-meta">
              <span v-if="repo.language">{{ repo.language }}</span>
              <span>{{ formatUpdated(repo.updated_at) }}</span>
              <span>★ {{ repo.stargazers_count }}</span>
            </p>
          </li>
        </ul>

        <!-- 取得中・取得に失敗したとき -->
        <a v-else :href="orgUrl" target="_blank" rel="noopener noreferrer" class="fallback">
          View on GitHub →
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 余白は下だけ（上下に付けると、並んだセクションの間で余白が二重になるため） */
.github {
  padding-bottom: var(--space-6);
}

.card {
  display: grid;
  gap: var(--space-5);
  padding: var(--space-5);
  border-radius: var(--radius-image);
  background: var(--color-surface-alt);
}

.org {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
}

.org-name {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  letter-spacing: 0.04em;
}

.org:hover .org-name {
  text-decoration: underline;
}

.technologies {
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.technologies dt {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

.icons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-1);
}

/* 暗い背景でも見えるよう、ロゴは各ブランドの色ではなく文字と同じ色にしている */
.icons svg {
  width: 32px;
  height: 32px;
  fill: currentColor;
}

.latest-heading {
  margin-bottom: var(--space-2);
  font-family: var(--font-display);
  font-size: var(--text-lg);
  letter-spacing: 0.04em;
}

.repository {
  padding-block: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}

.repo-name {
  font-weight: 700;
  color: var(--color-accent);
}

.repo-name:hover {
  text-decoration: underline;
}

.repo-description {
  font-size: var(--text-sm);
}

.repo-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1) var(--space-4);
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

.fallback {
  color: var(--color-accent);
}

.fallback:hover {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .card {
    grid-template-columns: 1fr 2fr;
  }
}
</style>
