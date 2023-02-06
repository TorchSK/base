<template>
    
    <div class="flex flex-grow relative" @keydown.esc="close" ref="searchDiv">
        <input type="text" v-model="query" class="bg-gray-700 border-transparent p-2 w-1/2 text-gray-200"/>

        <LazySearchResults v-if="query" :query="debouncedQuery" @clicked="close"/>
    </div>
</template>

<script setup>
import { onClickOutside, refDebounced  } from '@vueuse/core'

const query = ref()
const debouncedQuery = refDebounced(query, 350)

const searchDiv = ref(null)
onClickOutside(searchDiv, () => query.value='')

const close = () => {
    query.value = ''
    debouncedQuery.value = ''
}

</script>