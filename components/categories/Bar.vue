<template>

    <div class="relative" @mouseleave="menuVisible = false">
        <ul class="flex flex-shrink-0 w-full justify-center space-x-12 border-b">
            <CategoriesBarItem 
                v-for="category in tree" 
                :category="category" 
                @mouseover="showMenu(category)" 
                class="border-b-3 cursor-pointer font-semibold text-gray-700" 
                :class="{'border-sky-300':menuVisible && activeCategory.id == category.id, 
                         'border-transparent':!menuVisible || activeCategory.id != category.id}"
            />
        </ul>

        <Transition>
            <CategoriesBarMenu v-if="menuVisible" :hoveredCategory = "activeCategory" @clicked="menuVisible = false" />
        </Transition>
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

    const menuVisible = ref(false)
    
    const categories = useState('categories')
    
    const tree = useCreateTree(categories.value)
    
    const activeCategory = ref({})

    const showMenu = (category) => {
        activeCategory.value = category
        menuVisible.value = true
    }
    
</script>