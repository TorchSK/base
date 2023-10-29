<template>
    <NuxtImg v-if="cdn" :src="src" class="w-full" />
    

</template>

<script setup>
 
const props = defineProps({
    image: {
        type: [String,Object],
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

if(props.image)
    {
        if (typeof props.image === 'string' || props.image instanceof String)
        {
            src = props.image
        }   
        else
        {
            src = props.image.cloud_id
        }
    }
    else
    {
        src= `placeholder.webp`
    }



</script>