<template>

    <img :src="src" class="max-w-full max-h-full" />
    
</template>

<script setup>

const props = defineProps({
    category: {
        type: Object,
        required: true
    }
})

const src = 'https://imagedelivery.net/N4rAKr0c4NgoYw9LZnG5Ew/6f0d1aeb-530f-4864-715b-9dfae9b85000/box'

</script>