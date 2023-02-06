<template>

<div class="w-1/2 max-h-82 absolute top-11 left-0 z-99 bg-gray-50 border rounded-b-md p-4 flex flex-col space-y-3 overflow-y-auto">
    <template v-if="result && result.categories && result.categories.length">
        <div>
            <h2 class="font-semibold">Categories</h2>
            <ul>
                <li v-for="category in result.categories">
                    <nuxt-link :to="'/'+category.slug" @click="$emit('clicked')">{{category.name}}</nuxt-link>
                </li>
            </ul>
        </div>
    </template>

    <template v-if="result && result.products && result.products.length">
        <div>
            <h2 class="font-semibold">Products</h2>
            <ul>
                <li v-for="product in result.products">
                    <nuxt-link :to="'/'+product.slug" @click="$emit('clicked')">{{product.name}}</nuxt-link>
                </li>
            </ul>
        </div>
    </template>

    <Loader v-if="pending"/>

</div>

</template>

<script setup>
    
const props = defineProps({
    query: {
        type: String
    }
})

const { data:result, pending } = await useApiFetch(() => `search/${props.query}`, {immediate:false})


</script>