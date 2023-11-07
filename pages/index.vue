<template>
    <ULandingHero :title="$t('pageInDevelopment')"
        description="Diese Seite wird aktuell noch entwickelt. Daher können die Inhalte nicht vollständig sein oder Fehler auftreten." />
</template>

<script setup lang="ts">
const { t } = useI18n()

// definePageMeta({
//     title: t('home'),
// })
</script>