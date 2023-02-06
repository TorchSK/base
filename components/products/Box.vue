<template>

<div class="cursor-pointer rounded-sm text-gray-600" @mouseover="toCartButtonVisible=true" @mouseout="toCartButtonVisible=false">
    <div class="lg:pb-6 relative" @click="redirectToDetail">
        <div v-if="product.sale" class="absolute bottom-2 left-0 text-sm flex z-50">
            <div class="bg-blue-400 text-white px-2 py-0.5 rounded-md mr-1">Sale</div>
            <div class="bg-green-600 text-white px-2 py-0.5 rounded-md">-{{ Math.round((1-(product.price/product.old_price))*100)}}%</div>
        </div>
        
        <ProductsImage :product="product" type="box" />
    </div>

    <nuxt-link :to="{name:'slug', params: {slug: product.slug}}" class="block font-semibold mb-2">{{product.name}}</nuxt-link>

    <div class="text-sm mb-3 font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </div>

    <div class="flex justify-between items-center">
        <div class="flex space-x-2">
            <div class="strikethrough" v-if="product.old_price">{{product.old_price}} Kč</div>
            <div class="font-bold">{{product.price}} Kč</div>
        </div>
        <div v-if="cart.products.map(o => o.id).includes(product.id)" class="flex items-center space-x-2">

            <div class="i-ph-plus-bold" @click="plus(product)" />
                <span class="font-semibold">{{cart.products.find((item) => {return item.id == product.id}).pivot.qty}}</span>
            <div class="i-ph-minus-bold" @click="minus(product)" />
        
        </div>

        <div v-else class="transition-all font-semibold text-sm border border-gray-400 py-1 px-2 rounded-sm hover:bg-gray-100" :class="{'opacity-0':!toCartButtonVisible, 'opacity-100':toCartButtonVisible}" @click="toCart">Do košíku</div>
      
    </div>
</div>

</template>


<script setup>

const router = useRouter()

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const toCartButtonVisible = ref(false)

const redirectToDetail = () => {
    router.push({name:'slug', params: {slug: props.product.slug}})
}

const { addToCart, minus, plus } = await useCart()

const cart = useState('cart')

const toCart = () => {
    addToCart(props.product, 1)
}

</script>