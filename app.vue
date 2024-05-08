<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  identifierAttribute: 'id',
})
useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs!.lang,
  },
  link: [...(head.value.link || [])],
  meta: [...(head.value.meta || [])],
})

const { t } = useI18n()

useHead({
  title: t('clubName'),
  meta: [
    {
      name: 'description',
      content: t('appDescription'),
    },
  ],
})

useSeoMeta({
  title: t('clubName'),
  ogTitle: t('clubName'),
  description: t('appDescription'),
  ogDescription: t('appDescription'),
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
