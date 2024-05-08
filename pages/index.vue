<script setup lang="ts">
const { t } = useI18n()

// definePageMeta({
//     title: t('home'),
// })
</script>

<template>
  <ULandingHero :title="$t('pageInDevelopment')" :description="$t('pageInDevelopmentDescription')" />

  <ContentDoc path="/" />
</template>
