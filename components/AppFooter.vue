<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
const links = [{
  label: t('imprint'),
  to: '/imprint',
}]
</script>

<template>
  <UFooter :links="links">
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
  </UFooter>
</template>
