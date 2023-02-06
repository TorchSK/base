<template>

<li class="flex items-center">
    
    <div class="flex-grow flex">

        <div class="flex-grow flex">
            <div class="w-16 h-16 mr-6">
                <img :src="src" class="max-h-full max-w-full"/>
            </div>

            <div class="flex flex-col justify-center">
                <div>{{product.name}}</div>
                <div v-if="$device.isDesktop" class="text-gray-500">{{product.code}}</div>
            </div>
        </div>
        
        <div class="flex flex-grow justify-center items-center ml-6 space-x-2">
            <div class="i-ph-plus-bold cursor-pointer" @click="plus(product)" />
                <input type="text" class="border w-16 px-2 py-1 rounded-sm" v-model="product.pivot.qty" />
            <div class="i-ph-minus-bold cursor-pointer" @click="minus(product)" />
        </div>

    </div>

    <div class="mr-6 font-bold w-26 text-right">
        {{$formatPrice(product.pivot.price*product.pivot.qty)}}
    </div>

    <div>
        <div class="i-ph-x text-xl cursor-pointer" @click="remove(product)"/>
    </div>
    
    <div></div>
</li>

</template>

<script setup>

const props = defineProps({
    product: {
        type: Object,
        rquired: true
    }
})

const { src } = useCdnImage(props.product.image,'product')

const { minus, plus, remove } = await useCart()

</script>