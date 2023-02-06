<template>
        <div class="bg-gray-100 mt-12 w-full md:w-1/4 md:mt-0 p-6 flex flex-col justify-between place-self-start receipt relative mb-6">
                <div class="mb-24 flex justify-between">
                    <div>Items in cart: {{cart.products.length}}</div>
                    <i class="i-ph-x-circle text-2xl text-red-600 cursor-pointer opacity-60 hover:opacity-100" @click="openModal"/>
                </div>

                <div>
                            
                    <div class="flex justify-between mb-6">
                        <div>Products price</div>
                        <div class="flex-grow border-b border-dotted border-gray-300 relative -top-1 mx-2"></div>
                        <div class="">{{$formatPrice(cart.productPrice)}}</div>
                    </div>


                    <div class="flex justify-between mb-6" v-if="route.fullPath == '/cart/delivery'">
                        <div>Delivery price</div>
                        <div class="flex-grow border-b border-dotted border-gray-300 relative -top-1 mx-2"></div>
                        <div class="">{{$formatPrice(cart.subtotal)}}</div>
                    </div>
                    
                    <div class="flex justify-between mb-12 mt-12">
                        <div class="font-semibold">Total</div>
                        <div class="flex-grow border-b border-dotted border-gray-300 relative -top-1 mx-2"></div>

                        <div class="font-bold">{{$formatPrice(cart.total)}}</div>
                    </div>

                    <div class="flex">

                        
                        <NuxtLink v-if="!cart.products.length" to="/" class="block bg-blue-400 
                            hover:bg-blue-500 text-white font-bold py-2 px-4 mr-2 rounded text-center w-full flex items-center">
                            <div class="i-ph-caret-circle-left text-3xl"></div>
                            <div class="ml-2">Back to eshop</div>

                        </NuxtLink>

                        <NuxtLink v-if="route.fullPath == '/cart/delivery'" to="/cart" class="block bg-blue-400 
                            hover:bg-blue-500 text-white font-bold py-2 px-4 mr-2 rounded text-center">
                            <div class="i-ph-caret-circle-left text-3xl"></div>
                        </NuxtLink>
                    
                        <NuxtLink v-if="route.fullPath == '/cart'  && cart.products.length" to="/cart/delivery" class="block bg-green-500 
                            hover:bg-green-600 text-white font-bold py-2 flex justify-center items-center px-4 rounded w-full text-center">
                            <div class="mr-2">Continue</div>
                            <div class="i-ph-caret-circle-right text-3xl"></div>
                        </NuxtLink>

                        <div v-if="route.fullPath == '/cart/delivery'" to="/cart/delivery" class="cursor-pointer block bg-green-500 
                            hover:bg-green-600 text-white font-bold py-2 flex justify-center items-center px-4 rounded w-full text-center relative"
                            :class="{'opacity-25 cursor-not-allowed':!meta.valid}"
                            :disabled="!meta.valid"    
                            @click="createOrder"
                        >
                            <div class="mr-2">Confirm order</div>
                            <div class="i-ph-check-circle text-3xl"></div>

                            <LazyLoader v-if="creatingOrder" />
                    </div>
                        
                    </div>
                </div>

                <LazyModal ref="modal" @confirmed="resetCart"/>

        </div>
</template>

<script setup>

defineProps({
    meta:{
        type: Object
    },
})
const { cart, resetCart } = await useCart()
const route = useRoute()

const creatingOrder = ref(false)
const createOrder = async () => {

    creatingOrder.value = true
    
    const { data:order } = await useApiFetch('order', {method: "POST", body: {cartid: cart.value.id}})

    await navigateTo(`/orders/${order.value.id}/success?cookie_id=${cart.value.cookie_id}`)
}

const modal = ref(null)
//the variable name (modal) needs to match the template ref name 
//given in the second step of Tolbxela's answer

const openModal = () => {
    modal.value.openModal()
}


</script>