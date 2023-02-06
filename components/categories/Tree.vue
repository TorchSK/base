<template>

<div>
    <ul class="mr-6 flex flex-col flex-shrink-0 w-64 gap-3">
        <CategoriesTreeItem v-for="category in tree" :category="category" :product="product" :categories="categories" />
    </ul>

</div>

</template>



<script setup>


const props = defineProps({

    desktop:{
        type:Boolean
    },
    product:{
        type: Object
    }
})

const categories = useState('categories')

const tree = useCreateTree(categories.value)


</script>

<style src="@vueform/slider/themes/default.css"></style>