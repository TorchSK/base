<template>

<div class="">

<ul>
    <li v-for="error in errors" class="py-2 px-4 bg-red-200 rounded-sm">{{error}}</li>
</ul>

</div>

</template>

<script setup>

    const props = defineProps({
        errors: {
            type: Array,
            default: []
        }
    });

</script>
