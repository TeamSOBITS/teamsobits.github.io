<script setup lang="ts">
/**
 * メンバーの詳しい情報の窓（研究テーマ・スキル）
 *
 * ブラウザ標準の <dialog> を使う。Esc で閉じる、開いている間は後ろを操作できない、
 * 閉じたら押したカードに操作の位置（フォーカス）が戻る、といった動きはブラウザがやってくれる。
 * 窓の外（暗くなった部分）を押しても閉じる。
 */
import type { Person } from '~/data/people'

const props = defineProps<{
  /** 表示する人。null のときは閉じる */
  person: Person | null
}>()

const emit = defineEmits<{ close: [] }>()

const localize = useLocalized()
const dialog = useTemplateRef<HTMLDialogElement>('dialog')

watch(
  () => props.person,
  (person) => {
    if (person) dialog.value?.showModal()
    else dialog.value?.close()
  },
)

/** 窓の外を押したとき。<dialog> 自体が押された（中身ではない）なら、外側を押したということ */
function onClick(event: MouseEvent) {
  if (event.target === dialog.value) dialog.value?.close()
}
</script>

<template>
  <dialog ref="dialog" class="people-dialog" @close="emit('close')" @click="onClick">
    <div v-if="person" class="content">
      <button type="button" class="close" :aria-label="$t('people.close')" @click="dialog?.close()">×</button>
      <NuxtImg
        :src="person.image ?? '/images/people/default.png'"
        alt=""
        class="avatar"
        sizes="240px"
        format="webp"
      />
      <h2 class="name">{{ localize(person.name) }}</h2>
      <p class="meta">{{ person.grade }} / {{ $t(`people.labs.${person.lab}`) }}</p>

      <dl class="details">
        <template v-if="person.researchTopic">
          <dt>{{ $t('people.researchTopic') }}</dt>
          <dd>{{ person.researchTopic }}</dd>
        </template>
        <template v-if="person.skills">
          <dt>{{ $t('people.skills') }}</dt>
          <dd>{{ person.skills }}</dd>
        </template>
      </dl>
    </div>
  </dialog>
</template>

<style scoped>
.people-dialog {
  width: min(100% - 2 * var(--space-4), 480px);
  max-height: calc(100svh - 2 * var(--space-4));
  margin: auto;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-image);
  background: var(--color-surface-alt);
  color: var(--color-ink);
}

.people-dialog::backdrop {
  background: rgb(0 0 0 / 0.7);
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-5) var(--space-4);
  text-align: center;
}

.close {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  width: 40px;
  height: 40px;
  border: 0;
  background: none;
  color: inherit;
  font-size: var(--text-xl);
  cursor: pointer;
}

.avatar {
  width: 200px;
  aspect-ratio: 1;
  margin-bottom: var(--space-3);
  border-radius: 50%;
  object-fit: cover;
}

.name {
  font-size: var(--text-xl);
}

.meta {
  color: var(--color-ink-muted);
}

.details {
  width: 100%;
  margin-top: var(--space-4);
  text-align: left;
}

.details dt {
  margin-top: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-heading);
}
</style>
