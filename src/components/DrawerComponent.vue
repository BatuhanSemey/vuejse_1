<template>
    <div v-if="isVisible" class="fixed z-10 top-0 left-0 w-full h-full bg-black opacity-70"></div>
    <div v-if="isVisible" class="fixed z-20 top-0 right-0 bg-white w-96 h-full p-10">
        <HeaderCart :closeDrawer="closeDrawer" />
        <div class="grid gap-3 mt-3">
            <BasketSneakers
                image="/sneakers/sneakers-1.jpg"
                name="Мужские Кроссовки Nike Blazer Mid Suede"
                :price="12999"
            />
            <BasketSneakers
                image="/sneakers/sneakers-2.jpg"
                name="Мужские Кроссовки Nike Air Max 270"
                :price="12999"
            />
        </div>
    </div>
</template>

<script setup>
import HeaderCart from './HeaderCart.vue'
import BasketSneakers from './BasketSneakersComponent.vue'

defineProps({
    isVisible: Boolean,
    closeDrawer: Function
})
</script>

<style>
</style>