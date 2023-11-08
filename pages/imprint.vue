<template>
    <UPageHeader :title="t('imprint')" />

    <ContentDoc path="/imprint" />
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
