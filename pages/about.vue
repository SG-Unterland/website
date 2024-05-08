<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <UPageHeader :title="t('about')" />

  <ContentDoc path="/about" />
</template>
