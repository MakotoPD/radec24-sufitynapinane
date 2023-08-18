<template>
    <div>
        <h1>Realizacje</h1>
        <component :is="component" v-if="story" :blok="story.content"/>
    </div>
</template>

<script>
const story = useStoryblok('realizacje')

const component = resolveComponent(
    story.value.content.component
)
</script>