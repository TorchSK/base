<template>

<div class="flex-grow space-y-12 lg:space-y-24">
        
    <template v-for="element in layout.elements">
        <component :is="componentsMap[element.type]" :element="element" />

    </template>

</div>
</template>

<script setup>

    defineProps({
        layout: {
            type: Object,
            required: false
        }
    })

    const componentsMap = {
        header: resolveComponent('ElementsHeader'),
        banners: resolveComponent('ElementsBanners'),
        products: resolveComponent('ElementsProducts'),
        panel: resolveComponent('ElementsPanel'),
        banner: resolveComponent('ElementsBanner'),
        logoCloudsLight: resolveComponent('ElementsLogoCloudsLight'),
        logoCloudsDark: resolveComponent('ElementsLogoCloudsDark'),

    }
</script>