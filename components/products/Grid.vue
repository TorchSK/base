<template>

<div class="flex-grow">
    <template v-if="products.length" class="flex-grow">
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 flex-grow relative pb-12">
        <Loader v-if="pending"/>
        <ProductsBox v-for="product in products" :product="product"/>
    </div>
    </template>

    <template v-else>
        <div>No products found</div>
    </template>
</div>
</template>


<script setup>

const props = defineProps({
    products: {
        type: Object,
        required: true
    },
    pending: {
        type: Boolean,
        default: false
    }
})

</script>

