
<template>
    <UHeader :links="links">
        <template #logo>
            <AppLogo />
        </template>

        <template #right>
            <UColorModeButton />
        </template>

        <template #panel>
            <UNavigationTree :links="mapContentNavigation(navigation)" />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
const navigation = inject<Ref<NavItem[]>>('navigation')

const { t } = useI18n()
const links = [
    {
        to: '/',
        label: t('home'),
    },
    {
        to: '/news',
        label: t('news')
    },
    {
        to: '/about',
        label: t('about')
    },
    {
        to: '/contact',
        label: t('contact')
    }
]
</script>