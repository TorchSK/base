<template>
    
    <nuxt-img :src="src" class="max-w-full max-h-full" />
    
</template>

<script setup>

const props = defineProps({
    image: {
        type: Object,
        required: true
    },
    type:{
        type: String
    }
})


const src = computed(() => `https://imagedelivery.net/N4rAKr0c4NgoYw9LZnG5Ew/${props.image.cloud_id}/public`)

</script>