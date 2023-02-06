<template>

<div class="flex-grow max-w-1/2 space-y-6 bg-gray-50 p-8 rounded-md">
    <div class="flex">
        <label for="name" class="w-[60px]">Name:</label>
        <input name="address.name" v-model="address.name" class="w-full" @change="setAddress"/>
    </div>

    <div class="flex">
        <label for="street" class="w-[60px]">Street:</label>
        <input name="address.street" v-model="address.street" class="w-full"  @change="setAddress"/>
    </div>

    <div class="flex">
        <label for="city" class="w-[60px]">City:</label>
        <input name="address.city" v-model="address.city" class="w-full"  @change="setAddress"/>
    </div>

    <div class="flex">
        <label for="zip" class="w-[60px]">ZIP:</label>
        <input name="address.zip" v-model="address.zip" class="w-full"  @change="setAddress"/>
    </div>

    <div class="flex">
        <label for="phone" class="w-[60px]">Phone:</label>
        <input name="address.phone" v-model="address.phone" class="w-full"  @change="setAddress"/>
    </div>

    <div class="flex">
        <label for="email" class="w-[60px]">Email:</label>
        <input name="address.email" v-model="address.email" class="w-full"  @change="setAddress"/>
    </div>
</div>

</template>

<script setup>


const props = defineProps({
    address: {
        type: Object,
        default: {}
    }
})


const required = (value) => {
    if (value && value.trim()) {
    return true;
    }
    return 'This is required'
}

const emit = defineEmits(['changed'])

const setAddress = () => {
    emit('changed', props.address)
}
</script>