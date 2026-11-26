<script setup lang="ts">
/**
 * メンバーページ: 欄（教員・博士・修士・学士）ごとにメンバーを並べ、最後に Robots ページへの案内を置く
 * 欄の中は、学年 → 研究室 → 名前（英語）の順に並べる（データに書く順番は気にしなくてよい）
 */
import { GRADE_ORDER, LAB_ORDER, PEOPLE, PEOPLE_SECTIONS, type Person } from '~/data/people'

const { t } = useI18n()
useSeoMeta({ title: () => t('people.title') })

const byOrder = (a: Person, b: Person) =>
  GRADE_ORDER.indexOf(a.grade) - GRADE_ORDER.indexOf(b.grade) ||
  LAB_ORDER.indexOf(a.lab) - LAB_ORDER.indexOf(b.lab) ||
  a.name.en.localeCompare(b.name.en)

const sections = PEOPLE_SECTIONS.map((section) => ({
  id: section.id,
  people: PEOPLE.filter((person) => section.grades.includes(person.grade)).sort(byOrder),
}))

/** 詳しい情報の窓に出している人（null なら閉じている） */
const selected = ref<Person | null>(null)
</script>

<template>
  <div>
    <PageHeader :title="t('people.title')" />
    <PeopleSection
      v-for="section in sections"
      :id="section.id"
      :key="section.id"
      :people="section.people"
      @select="selected = $event"
    />
    <PeopleRobots />
    <PeopleDialog :person="selected" @close="selected = null" />
  </div>
</template>
