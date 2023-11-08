<template>
    <UPageHeader :title="t('about')" />

    <ContentDoc path="/about" />
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
