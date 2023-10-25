
<template>
    <nav class="bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <div class="flex items-center py-4 px-2">
                        <NuxtImg src="/logo.png" width="20" height="20" class="mr-2" />
                        <NuxtLink to="/" class="text-primary">{{ t('clubName') }}</NuxtLink>
                    </div>
                    <div class="md:flex items-center space-x-1 text-black" v-for="navItem in navItems" :key="navItem.id">
                        <NuxtLink class="py-4 px-2" :to="navItem.path" active-class="text-primary">{{
                            t(navItem.id) }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const { t } = useI18n({
    useScope: 'local'
})
const navItems = [
    {
        path: '/',
        id: 'home'
    },
    {
        path: '/about',
        id: 'about'
    },
    {
        path: '/contact',
        id: 'contact'
    }
]
</script>