<template>

    <nuxt-img :src="override || src" class="max-w-full max-h-full" height="768" />
    
</template>

<script setup>

const props = defineProps({
    product: {
        type: Object,
        required: true
    },
    override:{
        type: Object,
        default: null
    },
    type: {
        type: String,
        default: "public"
    }
})

let src

if(props.product.image)
{
    src = `https://imagedelivery.net/N4rAKr0c4NgoYw9LZnG5Ew/${props.product.image.cloud_id}/${props.type}`
}
else
{
    src = `https://imagedelivery.net/N4rAKr0c4NgoYw9LZnG5Ew/d11ac4bc-1460-45dc-e783-95f8a0a5ce00/${props.type}`
}

</script>