<script setup>
defineProps({
    image: String,
    name: String,
    price: Number
})
</script>

<template>
    <div class="flex border pt-3 pb-3 pl-3 pr-10 rounded-xl gap-3 relative items-center">
        <img :src="image" width="70px" height="70px" alt="" />

        <div class="flex flex-col justify-between">
            <p class="text-sm">{{ name }}</p>
            <div class="flex flex-col">
                <span class="font-bold text-sm text-black">{{ price }} тг.</span>
            </div>
        </div>
        <img class="cursor-pointer absolute right-3 bottom-3" src="/close.svg" alt="" />
    </div>
</template>