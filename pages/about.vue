<template>
    <h1 class="text-primary text-5xl">{{ t('clubName') }}</h1>
</template>

<script setup lang="ts">
const { t } = useI18n({
    useScope: 'local'
})
</script>
