<template>

    <li>
        <nuxt-link :to="'/'+category.slug" class="pt-6 pb-5 block">{{category.name}}</nuxt-link>
	</li>
    
</template>

<script setup>


    const props = defineProps({
        category: {
            type: Object,
            required: true
        },
    })

  

</script>

