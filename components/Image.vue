<template>
    
    <nuxt-img v-if="cdn" :src="src" class="max-w-full max-h-full overflow-hidden" />
    
    <img v-else :src="src" />

</template>

<script setup>
 
const props = defineProps({
    image: {
        type: Object,
        required: false
    },
    type: {
        type: String,
        default: "public"
    },
    cdn: {
        type: Boolean,
        default: true
    }
})

let src

if(props.image && props.image.cloud_id)
{
    src = props.image.cloud_id
}
else
{
    src="placeholder.webp"
}


</script>