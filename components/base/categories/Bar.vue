<template>
    <div class="bg-white relative">
        <div class="bg-white border-b border-gray-200 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
            <div class="flex h-16 items-center justify-center">    

                <div class="hidden h-full lg:flex">
                <!-- Mega menus -->
                <PopoverGroup>
                    <div class="flex h-full justify-center space-x-16">
                    <Popover v-for="(category, categoryIdx) in categories" :key="category.name" class="flex" v-slot="{ open,close }">
                        <div class="relative flex">
                            <PopoverButton 
                                @mouseover="(e) => hoverPopover(e, open)"
                                @mouseleave="closePopover(close)"
                                :class="[open ? 'border-indigo-600 text-copper' : 'border-transparent text-primary hover:text-gray-900', 
                                'relative z-10 -mb-px bg-transparent flex items-center pt-px outline-none font-base transition-colors duration-200 ease-out']">
                               <nuxt-link :to="'/'+category.slug">{{ category.name }}</nuxt-link>
                            </PopoverButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <PopoverPanel
                        v-if="category.categories && category.categories.length"
                        @mouseover.prevent="popoverHover = true"
                        @mouseleave.prevent="closePopover(close)"
                        class="absolute z-99 inset-x-0 top-full text-gray-500 sm:text-sm">
                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                            <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                            <div class="relative bg-white">
                            <div class="mx-auto max-w-7xl px-8">
                                <div class="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                <div class="grid grid-cols-2 gap-y-10 gap-x-8">
                                    <div>
                                    <p :id="`desktop-featured-heading-${categoryIdx}`" class="font-medium text-gray-900">Featured</p>
                                    <ul role="list" :aria-labelledby="`desktop-featured-heading-${categoryIdx}`" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.featured" :key="item.name" class="flex">
                                        <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div>
                                    <p id="desktop-categories-heading" class="font-medium text-gray-900">Categories</p>
                                    <ul role="list" aria-labelledby="desktop-categories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.categories" :key="item.name" class="flex">
                                        <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-y-10 gap-x-8">
                                    <div>
                                    <p id="desktop-collection-heading" class="font-medium text-gray-900">Collection</p>
                                    <ul role="list" aria-labelledby="desktop-collection-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.collection" :key="item.name" class="flex">
                                        <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                    </ul>
                                    </div>

                                    <div>
                                    <p id="desktop-brand-heading" class="font-medium text-gray-900">Brands</p>
                                    <ul role="list" aria-labelledby="desktop-brand-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.brands" :key="item.name" class="flex">
                                        <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </PopoverPanel>
                        </transition>
                    </Popover>

                    </div>
                </PopoverGroup>
                </div>

    
            </div>
            </div>
        </div>
        </div>
</div>
</template>
  
<script setup lang="ts">

import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'

const router = useRouter()

const { data:categories } = await useApiFetch("/categories")
        
const popoverHover = ref(false)
const popoverTimeout = ref(null)

const hoverPopover = (e, open) => {
  popoverHover.value = true
  if (!open) e.target.parentNode.click()
}

const closePopover = (close) => {
  popoverHover.value = false
  if (popoverTimeout.value) clearTimeout(popoverHover.value)
  popoverTimeout.value = setTimeout(() => {
    if (!popoverHover.value) close()
  }, 100)
}

const goToCateogry = (category) => {
    router.go(category.slug)
}

</script>