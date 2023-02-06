<template>

    <li>
		<div class="flex items-center">
			<div class="expander cursor-pointer mr-1" v-if="category.children && category.children.length" @click="expandedLocal = !expandedLocal">
				<span v-if="expandedLocal"><div class="i-ph-minus-circle text-xl" /></span>
                <span v-else><div class="i-ph-plus-circle text-xl" /></span>
			</div>
			<nuxt-link :to="{name:'slug', params: {slug: category.slug}}" :class="{'font-semibold': activeLocal}" @click.native="$emit('clicked')">{{category.name}}</nuxt-link>
		</div>

        <ul v-if="category.children && category.children.length" v-show="expandedLocal" class="flex flex-col gap-2 mt-2">
		    <CategoriesTreeItem v-for="child in category.children" class="ml-6" ref="child" :category="child" :key="child.slug" :product="product" :categories="categories" @clicked="$emit('clicked')"/>    
        </ul>

	</li>
    
</template>

<script setup>

const route = useRoute()

    const props = defineProps({
        category: {
            type: Object,
            required: true
        },
        categories: {
            type: Array
        }, 
        product:{
            type: Object
        },
    })

    
    let expandedLocal = ref(false)

    let index = -1
    if (props.product && props.product.categories.length)
    {
        index = props.categories.findIndex(x => x.slug == props.product.categories[0].slug)
    }
    else
    {
        index = props.categories.findIndex(x => x.slug == route.params.slug)
    }

    if(route.name != "index" && index > -1){
        const folderMap = new Map(props.categories.map( o => [o.id, o] )); 
        
        const getFolderParents = folder => ((folder && folder.parents && folder.parents.length) ? getFolderParents(folderMap.get(folder.parents[0].id)) : []).concat(folder.slug)
    
        const parentSlugs = getFolderParents(props.categories[index])
        
        expandedLocal.value = parentSlugs.includes(props.category.slug)
    }

    
    const activeLocal = ref(expandedLocal)

</script>

