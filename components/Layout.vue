<template>

<div class="flex-grow space-y-6 lg:space-y-12 p-2">
    
    <template v-for="element in layout.elements">

        <ElementsHeader
            v-if="element.type == 'header'" 
            :element="element" 
        />

        <ElementsBanner 
            v-if="element.type == 'banner'" 
            :element="element" 
        />

        <ElementsPanel 
            v-if="element.type == 'panel'" 
            :element="element" 
        />

        <ElementsProductGrid 
            v-if="element.type == 'productGrid'" 
            :element="element" 
        />

        <ElementsProductPanel 
            v-if="element.type == 'productPanel'" 
            :element="element" 
        />
    </template>

</div>
</template>

<script setup>

    defineProps({
        layout: {
            type: Object,
            required: true
        }
    })
</script>