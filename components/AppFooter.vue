<template>
    <footer class="bg-white text-center text-black">
        <div class="flex justify-between">
            <div>
                <span>@ 2023 Copyright: </span>
                <a class="font-semibold text-primary" href="https://mgm12.dev/">MGM12</a>
            </div>
            <div>
                <NuxtLink to="/imprint" active-class="text-primary">{{ t('imprint') }}</NuxtLink>
            </div>
        </div>

    </footer>
</template>

<script setup lang="ts">
const { t } = useI18n({
    useScope: 'local'
})
</script>
