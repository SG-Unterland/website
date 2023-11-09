<template>
    <UPageHeader :title="t('news')" />

    <ContentQuery path="/news" v-slot="{ data }" :sort="{ date: -1 }">

        <UPageGrid>
            <div v-for="(content, index) in data">
                <UCard :key="index">
                    <template #header>
                        <UPageHeader :title="content.title" :headline="content.creationDate + ' ' + content.creationTime" />
                    </template>

                    <p>{{ content.description }}</p>

                    <template #footer>
                        <div class="flex flex-col2">
                            <div class="flex-auto">
                                <UAvatar :src="'https://github.com/' + content.author + '.png'"
                                    :alt="content.author + 'profile picture'" size="lg" />
                            </div>
                            <div class="flex-auto">
                                <UButton :to="content._path">Weiter lesen</UButton>
                            </div>
                        </div>
                    </template>
                </UCard>
            </div>
        </UPageGrid>

        {{ data }}
    </ContentQuery>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>