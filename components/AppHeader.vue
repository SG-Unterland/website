<script setup lang="ts">
const { t } = useI18n()
const links = [
  {
    to: '/',
    label: t('home'),
  },
  {
    to: '/news',
    label: t('news'),
  },
  {
    to: '/about',
    label: t('about'),
  },
  {
    to: '/contact',
    label: t('contact'),
  },
]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <AppLogo />
    </template>

    <template #right>
      <UColorModeButton />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />
    </template>
  </UHeader>
</template>
