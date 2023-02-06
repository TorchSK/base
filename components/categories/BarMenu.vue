<template>

<div class="bg-gray-50 absolute w-full shadow-inner flex justify-between z-99">
    <div class="w-2/3 p-6 text-center">
        <ul>
            <li v-for="child in hoveredCategory.children">
                <nuxt-link :to="'/'+child.slug" @click="$emit('clicked')" class="hover:font-semibold">{{child.name}}</nuxt-link>
            </li>
        </ul>
    </div>
    <div class="w-1/3 bg-sky-100 max-h-64">
        <CategoriesImage :category="hoveredCategory" />
    </div>
</div>

</template>

<script setup>

const props = defineProps({
    hoveredCategory: {
        type: Object
    }
})
</script>