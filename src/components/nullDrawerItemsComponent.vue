<template>
    <div class="flex flex-col items-center gap-3">
        <img src="/null_image.png" alt="" />
        <h1 class="text-xl text-black font-semibold">Корзина пустая</h1>
        <p class="text-base font-normal text-center text-gray-400">
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </p>
        <div
            @click="closeDrawer"
            class="flex items-center justify-center gap-3 bg-green-400 w-60 h-14 rounded-2xl cursor-pointer"
        >
            <img src="/white_arrow_left.png" alt="" />
            <span class="text-white text-base font-semibold">Вернуться назад</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    closeDrawer: Function
})
</script>

<style>
</style>