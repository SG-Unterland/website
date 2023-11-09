<template>
    <main>
        <ContentDoc v-slot="{ doc }">
            <article>
                <UPageHeader :title="doc.title" />
                <ContentRenderer :value="doc" />
            </article>
        </ContentDoc>
    </main>
</template>
  