<template>

<div class="border border-gray-300">
<nuxt-link :to="{name:'blog-slug', params: {slug: blog.slug}}">{{blog.name}}</nuxt-link>
</div>
</template>


<script setup>

const props = defineProps({
    blog: {
        type: Object,
        required: true
    }
})

</script>