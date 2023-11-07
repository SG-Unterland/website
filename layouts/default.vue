<template>
    <div class="flex flex-col h-screen justify-between">
        <div>
            <AppHeader />
        </div>
        <div class="ml-5 mr-5 flex-grow">
            <slot />
        </div>
        <div>
            <AppFooter />
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()

</script>
