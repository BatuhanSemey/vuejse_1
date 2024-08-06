<script setup>
import Card from './CardItemComponent.vue'

defineProps({
    items: Array,
    clickFavorite: Function,
    clickInDrawer: Function
})
const emit = defineEmits(['clickInDrawer', 'addFavorite'])
</script>

<template>
    <div
        class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        v-auto-animate
    >
        <Card
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :image="item.imageUrl"
            :name="item.title"
            :price="item.price"
            :isAdded="item.isAdded"
            :isFavorite="item.isFavorite"
            :onClickInDrawer="() => emit('clickInDrawer', item)"
            :onclickFavorite="() => emit('addFavorite', item)"
        />
    </div>
</template>

<style>
</style>
