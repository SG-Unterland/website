<template>
    <ULandingHero :title="$t('pageInDevelopment')" :description="$t('pageInDevelopmentDescription')" />

    <ContentDoc path="/" />
</template>

<script setup lang="ts">
const { t } = useI18n()

// definePageMeta({
//     title: t('home'),
// })
</script>