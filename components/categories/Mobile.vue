<template>

<Disclosure v-slot="{ open }">

<DisclosureButton class="flex p-2 w-full" as="div">
    <Button color="blue" class="w-full">Show categories</Button>
</DisclosureButton>

<DisclosurePanel class="sm:hidden fixed overscroll-none flex w-86 h-screen bg-gray-100 border-r p-3 z-99 top-0" v-slot="{ close }">
    <div class="absolute w-full flex justify-between left-0 top-0 p-5">
        <div v-if="activeParent" class="i-ph-caret-left text-xl" @click="back" />
        <div v-else />
        <div class="i-ph-x text-xl" @click="close" />
    </div>

    <ul class="w-full space-y-1 pt-12">
        <li v-if="activeParent" class="text-center p-2 bg-gray-50 w-full text-gray-700">
            <nuxt-link :to="'/'+activeParent.slug">All products in {{activeParent.name}}</nuxt-link>
        </li>
        <li v-for="category in categories" class="p-2 bg-gray-50 w-full flex justify-between items-center" @click="setActiveParent(category)">
            <span>{{category.name}}</span>
            <span v-if="category.children.length"><div class="i-ph-caret-right" /></span>
        </li>
    </ul>
</DisclosurePanel>

</Disclosure>

</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const categoriesApi = useState('categories')

const tree = useCreateTree(categoriesApi.value)

const activeParent = ref()
const previousParents = ref([])

const categories = computed(() => {
    if(activeParent.value) return activeParent.value.children
    return tree
})

const router = useRouter();
const setActiveParent = (category) => {
    if(category.children.length)
    {
        previousParents.value.push(activeParent.value)
        activeParent.value = category
    }
    else router.push({ path: "/"+category.slug });
}

const back = () => {
    activeParent.value = previousParents.value.pop()
}

</script>