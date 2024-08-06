<script setup>
defineProps({
    id: Number,
    image: String,
    name: String,
    price: Number,
    isAdded: Boolean,
    isFavorite: Boolean,
    onClickInDrawer: Function,
    onclickFavorite: Function
})
</script>

<template>
    <div class="border p-10 rounded-xl relative transition hover:-translate-y-2 hover:shadow-xl">
        <img
            @click="onclickFavorite"
            class="absolute top-5 left-5 cursor-pointer"
            :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
            alt=""
        />
        <img :src="image" alt="" />
        <p class="mt-5 mb-3">{{ name }}</p>
        <div class="flex justify-between">
            <div class="flex flex-col">
                <span class="uppercase text-gray-400">цена:</span>
                <span class="font-bold">{{ price }} тенге</span>
            </div>
            <img
                class="cursor-pointer"
                @click="onClickInDrawer"
                :src="isAdded ? '/checked.svg' : '/plus.svg'"
                alt=""
            />
        </div>
    </div>
</template>